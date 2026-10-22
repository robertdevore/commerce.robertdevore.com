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
fonts and licenses intact. Commerce is pinned to the published npm package
`@kujolang/commerce@0.5.1`; the lockfile records its integrity.
Use Node.js 22.23.4+, 24.22.1+, or 26.12.1+ within the supported release lines.

Cloudflare Pages automatically deploys the production site from `main`.
