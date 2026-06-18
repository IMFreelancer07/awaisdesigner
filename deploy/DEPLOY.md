# Deploy Awais Portfolio (behind the shared central Caddy)

This site sits behind one **central Caddy** (`/opt/caddy`) shared with the other
projects on the VPS. Caddy terminates HTTPS for `awaisdesigner.com` and reverse-
proxies to this project's `web` container over the shared **`proxy`** Docker
network. The container's :274 is bound to **loopback only** (local debug).

| | Syed Tech | Awais Portfolio |
|--|-----------|-----------------|
| **Path** | `/home/deploy/main-website/syedtechsolutions` | `/home/deploy/awais-portfolio` |
| **App port** | 786 (loopback) | 274 (loopback) |
| **Public access** | central Caddy :80 / :443 | central Caddy :80 / :443 |
| **Caddy snippet** | `/opt/caddy/conf.d/syedtechsolutions.caddy` | `/opt/caddy/conf.d/awaisdesigner.caddy` |

**Public URL:** `https://awaisdesigner.com`

---

## Architecture

```
Internet ──443──> central Caddy (/opt/caddy)
                    ├─ syedtechsolutions.com → syedtech-web:786
                    └─ awaisdesigner.com     → awais-portfolio-web:274
                         (all over the shared `proxy` network)
```

The central Caddy's main `Caddyfile` does `import /etc/caddy/conf.d/*.caddy`, so
each project just contributes one snippet. This repo ships its snippet at
[`deploy/awaisdesigner.caddy`](./awaisdesigner.caddy).

---

## VPS prerequisites (one time)

```bash
# Shared proxy network (created once, used by Caddy + every app)
docker network create proxy 2>/dev/null || true

# Install this project's Caddy snippet into the central proxy and reload
cp /home/deploy/awais-portfolio/deploy/awaisdesigner.caddy /opt/caddy/conf.d/
docker exec caddy caddy reload --config /etc/caddy/Caddyfile
```

(The central Caddy stack itself lives in `/opt/caddy` — `Caddyfile` +
`docker-compose.yml` + `conf.d/`. It is not part of this repo.)

**DNS:** point `awaisdesigner.com` and `www.awaisdesigner.com` at the VPS IP as
**A records set to "DNS only"** (grey cloud). Caddy then issues the Let's Encrypt
cert automatically. Do **not** proxy (orange-cloud) these records, or ACME will
fail and Cloudflare will return 525.

> No public `274` firewall rule is needed anymore — the port is loopback-only and
> traffic comes through Caddy on 443.

---

## GitHub Secrets

### Required

| Secret | Example |
|--------|---------|
| `VPS_HOST` | VPS IP |
| `VPS_USER` | `deploy` |
| `VPS_SSH_KEY` | private key |
| `DEPLOY_PATH` | `/home/deploy/awais-portfolio` |

### Optional

| Secret | Default |
|--------|---------|
| `VPS_SSH_PORT` | `22` |
| `WEB_PORT` | `274` |
| `WEB_CONTAINER_NAME` | `awais-portfolio-web` *(must match the snippet's upstream)* |
| `IMAGE_NAME` | `awais-portfolio/web:latest` |

---

## Deploy

Push to `main` or run **Actions → Deploy to VPS**. CI rsyncs the repo, writes
`.env`, and runs `docker compose up -d --build` — which (re)creates `web` already
attached to the `proxy` network, so Caddy can always reach it.

Verify:

```bash
cd /home/deploy/awais-portfolio
docker compose ps
curl -s http://127.0.0.1:274/healthz                 # → ok (local)
docker exec caddy wget -qO- http://awais-portfolio-web:274/healthz   # → ok (via proxy net)
curl -I https://awaisdesigner.com                    # → HTTP/2 200, via: 1.1 Caddy
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| `502` / no upstream from Caddy | `web` not on `proxy` net → `docker network connect proxy awais-portfolio-web`, or redeploy (compose now joins it automatically) |
| Cloudflare `525` / cert won't issue | A record must be **DNS only** (grey), and any proxied **AAAA** record removed, so ACME reaches the VPS directly |
| Container name mismatch | `WEB_CONTAINER_NAME` must equal the upstream in `awaisdesigner.caddy` (`awais-portfolio-web`) |
| `network proxy not found` | run `docker network create proxy` on the VPS once |
