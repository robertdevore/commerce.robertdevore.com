# Kujo Commerce Demo

The production acceptance site for Kujo SSG + Kujo Commerce + Kujo SiteKit.
The public storefront uses Mock checkout; no real payment is collected. It proves
structured money, variants, trusted catalog generation, capability-aware cart UI,
safe webhook defaults, and the eight-adapter provider contract.

```sh
npm ci
npm run build
kujo serve output --port 8080
```

Builds obtain the portable Kujo `v1.0.1` binary and exact SSG `v1.0.0` tag when local checkouts are absent. SiteKit
`v1.0.0`'s supported `dist/` artifact is vendored under `assets/sitekit/` with
fonts and licenses intact. Commerce is pinned to reviewed commit
`d94e2c3591bc363d745922aaf6b70ba471b82362` (`0.3.0`) until the next immutable
release tag is cut.

Cloudflare Pages automatically deploys the production site from `main`.
