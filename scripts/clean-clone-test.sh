#!/usr/bin/env bash
set -euo pipefail
tmp_dir="$(mktemp -d)"
trap 'rm -rf "$tmp_dir"' EXIT
git clone --depth 1 "$(git remote get-url origin)" "$tmp_dir/site"
cd "$tmp_dir/site"
npm ci
npm run build
test -f output/index.html
test -f output/_kujo/commerce/catalog.json
test -f output/assets/sitekit/sitekit.css
test -f output/assets/commerce/commerce.js
test -f output/sitemap.xml
test -f output/robots.txt
test -f output/llms.txt
