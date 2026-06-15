# Deploy Awais Portfolio (shared VPS with Syed Tech)

## How the two sites fit together

```
Internet
   │
   ▼
┌─────────────────────────────────────────────────────────┐
│  syedtech-caddy  (:80 / :443)  — ONE shared reverse proxy │
└─────────────────────────────────────────────────────────┘
   │                              │
   │  syedtechsolutions.com       │  awaisdesigner.com
   ▼                              ▼
┌──────────────────┐    ┌──────────────────────────┐
│  syedtech-web    │    │  awais-portfolio-web     │
│  nginx :786      │    │  nginx :274              │
│  127.0.0.1:786   │    │  127.0.0.1:274           │
└──────────────────┘    └──────────────────────────┘
         └──────────── syedtech-net (Docker network) ────────────┘
```

| Site | Container | Internal port | Host loopback | Public access |
|------|-----------|---------------|---------------|---------------|
| Syed Tech | `syedtech-web` | 786 | `127.0.0.1:786` | `https://syedtech-domain` via Caddy |
| Awais Portfolio | `awais-portfolio-web` | 274 | `127.0.0.1:274` | `https://awais-domain` via Caddy |

Port **274 is not opened on the firewall** for public traffic (same as 786). Caddy on 80/443 terminates TLS and forwards to the container over `syedtech-net`.

---

## Step 1 — Fix the workflow error (SSH key)

Your log shows:

```
VPS_SSH_KEY:
Load key ".../deploy_key": error in libcrypto
Permission denied
```

**`VPS_SSH_KEY` is empty or invalid.** GitHub masked it but the value is blank.

### Generate a key (on your Mac)

```bash
ssh-keygen -t ed25519 -C "github-actions-awais-portfolio" -f ~/.ssh/awais_portfolio_deploy -N ""
```

### Install the public key on the VPS

```bash
ssh-copy-id -i ~/.ssh/awais_portfolio_deploy.pub -p YOUR_SSH_PORT deploy@YOUR_VPS_IP
```

### Add the private key to GitHub

```bash
cat ~/.ssh/awais_portfolio_deploy
```

Copy **everything**, including:

```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

Paste into: **GitHub repo → Settings → Secrets → Actions → `VPS_SSH_KEY`**

> If you use the **`production` environment**, add the secret there too (environment secrets override repo secrets).

### Test locally before re-running CI

```bash
ssh -i ~/.ssh/awais_portfolio_deploy -p YOUR_SSH_PORT deploy@YOUR_VPS_IP "echo ok"
```

---

## Step 2 — All GitHub Secrets (checklist)

### Required — must be set

| Secret | Example | Status / notes |
|--------|---------|----------------|
| `VPS_HOST` | `203.0.113.10` | VPS IP or hostname |
| `VPS_USER` | `deploy` | SSH user |
| `VPS_SSH_KEY` | full private key PEM | **FIX THIS — was empty** |
| `DEPLOY_PATH` | `/home/deploy/awais-portfolio` | Directory for this repo on VPS |
| `DOCKER_NETWORK` | `syedtech-net` | **Add if missing** — from Syed Tech compose |

### Recommended — set explicitly

| Secret | Value for this site |
|--------|---------------------|
| `VPS_SSH_PORT` | your SSH port (you already have this) |
| `WEB_PORT` | `274` |
| `WEB_CONTAINER_NAME` | `awais-portfolio-web` |
| `IMAGE_NAME` | `awais-portfolio/web:latest` |

### Not used by this project — safe to delete

| Secret | Why |
|--------|-----|
| `CADDY_CONTAINER_NAME` | Shared Caddy belongs to Syed Tech stack |
| `PUBLIC_PORT` | No public port; Caddy handles 80/443 |
| `SITE_DOMAIN` | Set in Syed Tech Caddyfile, not CI |
| `ACME_EMAIL` | Already on Syed Tech Caddy |

### GitHub environment

Create **`production`** under Settings → Environments (workflow requires it).

---

## Step 3 — VPS one-time setup

```bash
# As root/sudo on VPS
sudo mkdir -p /home/deploy/awais-portfolio   # match DEPLOY_PATH secret
sudo chown deploy:deploy /home/deploy/awais-portfolio

# Confirm Syed Tech stack is running and network exists
docker network ls | grep syedtech-net
docker ps | grep syedtech
```

---

## Step 4 — Add the route in the existing Caddyfile

SSH to the VPS and edit the **Syed Tech** Caddyfile (where `syedtech-web:786` is already configured).

Find the existing block (pattern):

```caddy
syedtechsolutions.com {
    reverse_proxy web:786
}
```

Add a **new block** for Awais (below it):

```caddy
awaisdesigner.com {
    encode gzip
    reverse_proxy awais-portfolio-web:274
}
```

Use your real domain. The hostname `awais-portfolio-web` must match `WEB_CONTAINER_NAME`.

Reload Caddy:

```bash
cd /path/to/syedtech-compose
docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
```

Point DNS **A record** for `awaisdesigner.com` → VPS IP (same IP as Syed Tech).

---

## Step 5 — Deploy

Push to `main` or run **Actions → Deploy to VPS → Run workflow**.

CI will:

1. rsync code → `DEPLOY_PATH`
2. write `.env` from secrets
3. `docker compose up -d --build web`
4. curl `http://127.0.0.1:274/healthz`

---

## Step 6 — Verify

On the VPS:

```bash
cd $DEPLOY_PATH   # your DEPLOY_PATH
docker compose ps
curl -s http://127.0.0.1:274/healthz    # → ok

docker network inspect syedtech-net --format '{{range .Containers}}{{.Name}} {{end}}'
# should list both syedtech-web and awais-portfolio-web
```

From your machine:

```bash
curl -I https://awaisdesigner.com
```

---

## Optional: access via IP:274 (without domain)

Only if you need direct IP access (not recommended for production):

```bash
sudo ufw allow 274/tcp
```

Then hit `http://VPS_IP:274`. HTTPS still goes through Caddy + domain for normal use.

---

## Troubleshooting

| Error | Fix |
|-------|-----|
| `error in libcrypto` / `Permission denied` | `VPS_SSH_KEY` empty or malformed — re-paste full private key |
| `Too many authentication failures` | Same — bad/empty key file written by CI |
| `network syedtech-net not found` | Start Syed Tech stack first; set `DOCKER_NETWORK=syedtech-net` |
| Caddy 502 | `docker compose ps` in awais project; check `curl 127.0.0.1:274/healthz` |
| Caddy can't reach app | Container name in Caddyfile must be `awais-portfolio-web` |
