# Kujo Commerce Demo

The production acceptance site for Kujo SSG + Kujo Commerce + Kujo SiteKit.
The public storefront uses Mock checkout; no real payment is collected.

```sh
npm ci
npm run build
kujo serve output --port 8080
```

Builds obtain the portable Kujo `v1.0.1` binary and exact SSG `v1.0.0` tag when local checkouts are absent. SiteKit
`v1.0.0`'s supported `dist/` artifact is vendored under `assets/sitekit/` with
fonts and licenses intact. Commerce is pinned to `v0.2.0`.

Cloudflare Pages automatically deploys the production site from `main`.
