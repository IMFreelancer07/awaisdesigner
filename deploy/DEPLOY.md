# Deploy Awais Portfolio (standalone on port 274)

Independent from Syed Tech — no shared Caddy, no shared Docker network.

| | Syed Tech | Awais Portfolio |
|--|-----------|-----------------|
| **Path** | `/home/deploy/main-website/syedtechsolutions` | `/home/deploy/awais-portfolio` |
| **App port** | 786 (loopback) | **274 (public)** |
| **Public access** | Caddy :80 / :443 | **Direct :274** |
| **Config changes** | None needed | This project only |

**Public URL:** `http://YOUR_VPS_IP:274`

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
| `WEB_CONTAINER_NAME` | `awais-portfolio-web` |
| `IMAGE_NAME` | `awais-portfolio/web:latest` |

### No longer needed — delete from GitHub

- `DOCKER_NETWORK`
- `CADDY_CONTAINER_NAME`
- `PUBLIC_PORT`
- `SITE_DOMAIN`
- `ACME_EMAIL`

---

## VPS firewall (one time)

```bash
sudo ufw allow 274/tcp
sudo ufw reload
```

Also open **274** in your cloud provider firewall.

Syed Tech ports (22, 80, 443, 786 loopback) are unchanged.

---

## Cloudflare (optional)

Orange-cloud proxy only supports certain HTTPS ports — **274 is not one of them**.

Use one of:

**A. Cloudflare Tunnel** (recommended for HTTPS on a domain)

In your tunnel config, add a public hostname:

- **Hostname:** `awaisdesigner.com`
- **Service:** `http://127.0.0.1:274`

No changes to Syed Tech Caddy or tunnel entries.

**B. Direct access**

`http://YOUR_VPS_IP:274` — no Cloudflare needed.

---

## Deploy

Push to `main` or run **Actions → Deploy to VPS**.

Verify:

```bash
cd /home/deploy/awais-portfolio
docker compose ps
curl -s http://127.0.0.1:274/healthz    # → ok
curl -I http://YOUR_VPS_IP:274          # from your machine
```

---

## Troubleshooting

| Problem | Fix |
|---------|-------|
| Connection refused on :274 | `sudo ufw allow 274/tcp`; check cloud firewall |
| Syed Tech broken | This stack is isolated — check Syed Tech compose separately |
| Port conflict | Only one service can bind :274 — `docker ps` and stop duplicates |
