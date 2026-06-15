# Deploy Awais Portfolio (shared VPS)

This site follows the same pattern as your existing website:

| Layer | This project | Existing site |
|-------|--------------|---------------|
| **App** | `awais-portfolio-web` (nginx, port 274) | `syedtech-web` (nginx, port 786) |
| **Proxy** | — | Shared Caddy on :80 / :443 |
| **Network** | Joins `syedtech-net` | Owns `syedtech-net` |

**Public URL:** `https://YOUR_DOMAIN` (via the shared Caddy)

Deployments are automated via GitHub Actions. Credentials live in **GitHub Secrets**.

---

## 1. One-time VPS setup

Your VPS should already have Docker, the `deploy` user, and the other site running.

### Create this project's directory

Use the same path as your `DEPLOY_PATH` secret:

```bash
sudo mkdir -p /path/you/chose
sudo chown deploy:deploy /path/you/chose
```

No extra firewall port is needed — Caddy on 80/443 handles public traffic.

### Add this site to the existing Caddyfile

On the VPS, edit the Caddyfile for your **other** website and add the block from `deploy/Caddyfile.snippet`:

```caddy
awaisdesigner.com {
	encode gzip
	reverse_proxy awais-portfolio-web:274
}
```

Reload Caddy after editing:

```bash
cd /path/to/existing/site
docker compose exec caddy caddy reload --config /etc/caddy/Caddyfile
# or: docker compose restart caddy
```

Point DNS for your domain to the VPS IP.

---

## 2. GitHub Secrets

**Settings → Secrets and variables → Actions**

Also create a **`production`** environment if you haven't already.

### Required

| Secret | Example | Purpose |
|--------|---------|---------|
| `VPS_HOST` | `203.0.113.10` | VPS IP or hostname |
| `VPS_USER` | `deploy` | SSH user |
| `VPS_SSH_KEY` | `-----BEGIN OPENSSH PRIVATE KEY-----…` | Deploy private key |
| `DEPLOY_PATH` | `/home/deploy/awais-portfolio` | This project's directory on the VPS |
| `DOCKER_NETWORK` | `syedtech-net` | Shared network from your existing site's compose |

### Optional

| Secret | Default | Purpose |
|--------|---------|---------|
| `VPS_SSH_PORT` | `22` | SSH port |
| `WEB_PORT` | `274` | nginx port (loopback + container) |
| `IMAGE_NAME` | `awais-portfolio/web:latest` | Docker image tag |
| `WEB_CONTAINER_NAME` | `awais-portfolio-web` | Container name (must match Caddy snippet) |

### No longer needed for this project

These were for a standalone Caddy container — remove them if you added them:

- `CADDY_CONTAINER_NAME`
- `PUBLIC_PORT`
- `SITE_DOMAIN` (configure in the main Caddyfile instead)
- `ACME_EMAIL` (configured on the existing Caddy)

---

## 3. How CI deploy works

On push to `main` (or manual **Run workflow**):

1. Rsyncs code to `DEPLOY_PATH`
2. Writes `.env` from secrets
3. Runs `docker compose up -d --build web`
4. Health-checks `http://127.0.0.1:274/healthz`

---

## 4. Manual deploy

```bash
ssh deploy@YOUR_VPS_IP
cd $DEPLOY_PATH
cp .env.example .env
nano .env
docker compose up -d --build web
```

Verify:

```bash
docker compose ps
curl -s http://127.0.0.1:274/healthz          # → ok
curl -I https://your-domain.com               # via shared Caddy
```

---

## Troubleshooting

| Problem | Check |
|---------|-------|
| 502 from Caddy | `docker compose ps` in this project; `curl http://127.0.0.1:274/healthz` |
| Caddy can't reach app | Both containers on `syedtech-net`: `docker network inspect syedtech-net` |
| Network not found | Start the existing site first so `syedtech-net` exists |
| Wrong container name | `WEB_CONTAINER_NAME` must match the hostname in the Caddy snippet |
