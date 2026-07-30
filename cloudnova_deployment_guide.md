# CloudNova Deployment Guide (Static Site via Nginx)

_Last updated: July 26, 2026_

This document is a complete reference for how CloudNova is deployed, so you never have to re-investigate the server setup again.

## 1. Server Inventory

You manage **two separate servers**. Do not confuse them.

| Server | IP | Hostname | SSH Key | What runs there |
|---|---|---|---|---|
| Server A | 213.199.48.152 | vmi2998357 (Contabo) | (password-based, or different key) | z-agent, permesso-bot, airport-bot, metabase, jitsi, postgres |
| Server B | 65.21.241.211 | ubuntu-4gb-hel1-4 (Hetzner) | `C:\Users\sanke\JCL_SITE\sanpub` | **CloudNova** (static site via nginx) |

CloudNova only lives on **Server B (65.21.241.211)**. Server A has nothing to do with CloudNova.

## 2. How CloudNova Is Actually Deployed

Key discovery: CloudNova is **not** a Docker container, not a PM2 process, and not a systemd service.

- It is a static Vite build (`index.html`, `assets/`, images) sitting in `/var/www/cloudnova` on Server B.
- Nginx serves these files directly for `cloudnova.tech` and `www.cloudnova.tech`.
- There is a second nginx site, `cloudnova-dashboard`, serving `dashboard.cloudnova.tech` (proxies elsewhere — separate app).
- `/root/cloudnova` on the server is an empty, unrelated folder — **not** a git repo, not the source of truth. Ignore it.
- There is no git clone, no Node/pnpm install, and no build tooling on the server itself. All building happens locally on Windows.

### Relevant nginx config location
```
/etc/nginx/sites-enabled/cloudnova
/etc/nginx/sites-enabled/cloudnova-dashboard
```

## 3. Local Project Location

Local source code lives at:
```
C:\Users\sanke\Documents\project
```
The CloudNova sub-app is built via the workspace at:
```
C:\Users\sanke\Documents\project\artifacts\cloudnova
```
GitHub remote: `https://github.com/sanketnawale/CloudNova_V2.git`, branch `main`.

## 4. Full Deployment Workflow (Step by Step)

### Step 1 — Commit and push code changes to GitHub (optional but recommended for history)
```powershell
cd C:\Users\sanke\Documents\project
git add .
git status
git commit -m "describe your change here"
git push origin main
```

### Step 2 — Build the CloudNova app locally
```powershell
cd C:\Users\sanke\Documents\project
pnpm install
pnpm --dir ./artifacts/cloudnova run build
```
Important: the build output lands in:
```
artifacts\cloudnova\dist\public\
```
(NOT directly in `dist/`, it's nested one level deeper inside `public`). This includes `index.html`, `assets/*.js`, `assets/*.css`, and static images.

### Step 3 — Copy the build to the server via scp
```powershell
scp -i C:\Users\sanke\JCL_SITE\sanpub -r C:\Users\sanke\Documents\project\artifacts\cloudnova\dist\public\* root@65.21.241.211:/var/www/cloudnova/
```
Notes:
- The trailing `*` after `public` means "copy everything inside this folder," not the folder itself.
- `-r` copies recursively (needed for the `assets` subfolder).
- Plain `scp` only adds/overwrites files — it does **not** delete old files that no longer exist in the new build. Over time, stale hashed JS/CSS files (e.g. `index-h-_RYRG9.css`) will accumulate as harmless clutter unless manually cleaned or you switch to rsync (see Section 6).

### Step 4 — SSH into the server
```powershell
ssh -i C:\Users\sanke\JCL_SITE\sanpub root@65.21.241.211
```

### Step 5 — Fix file ownership and reload nginx
```bash
chown -R www-data:www-data /var/www/cloudnova
nginx -t && systemctl reload nginx
```
`nginx -t` validates the config syntax before reload, preventing accidental downtime from a bad config.

## 5. Quick Diagnostic Commands (for future "is it deployed?" checks)

Run these on Server B to confirm deployment status without guessing:

```bash
docker ps -a                                  # confirm no docker container for cloudnova
pm2 list                                       # confirm no pm2 process for cloudnova
systemctl list-units --type=service | grep -i cloudnova   # confirm no systemd service
find / -type d -iname "cloudnova" 2>/dev/null  # locate all cloudnova folders
ls -la /var/www/cloudnova                      # confirm static files exist
grep -ri "cloudnova" /etc/nginx/sites-enabled/* # confirm nginx site config
tail -20 /var/log/nginx/access.log | grep cloudnova  # confirm live traffic
```

## 6. Optional: Cleaner Sync With Rsync (Better Than scp)

If WSL or Git Bash is available on the Windows machine, use rsync instead of scp — it mirrors the folder exactly and deletes stale files automatically:

```bash
rsync -avz --delete -e "ssh -i /path/to/sanpub" artifacts/cloudnova/dist/public/ root@65.21.241.211:/var/www/cloudnova/
```

The `--delete` flag removes anything on the server that no longer exists locally, keeping `/var/www/cloudnova` perfectly in sync with the latest build.

## 7. Common Mistakes to Avoid Next Time

- Do not try `git pull` on the server — there is no git repo there. Always build locally, then transfer the built files.
- Do not SSH into 213.199.48.152 expecting to find CloudNova — that's a different server entirely.
- Do not assume `dist/` is the final build folder — check for a nested `dist/public/` first.
- Always run `chown -R www-data:www-data /var/www/cloudnova` after copying files, or nginx may throw permission errors serving them.
- Always run `nginx -t` before `systemctl reload nginx` to catch config errors early.
