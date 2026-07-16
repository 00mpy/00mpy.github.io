# Oompy — Work in Motion

A static Next.js portfolio built for GitHub Pages.

## Deploy

1. Push this repository to GitHub with `main` as the default branch.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. Push to `main`, or run **Deploy GitHub Pages** from the Actions tab.

The workflow builds the site into `out/` and publishes it automatically.

## Local development

```powershell
pnpm install
pnpm run dev
```

Run `pnpm run build` to verify the static export locally.
