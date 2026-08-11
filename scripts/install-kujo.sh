#!/usr/bin/env bash
set -euo pipefail
mkdir -p .kujo-bin
case "$(uname -s)-$(uname -m)" in
  Linux-x86_64) asset=kujo-v1.0.1-linux-x64.tar.gz ;;
  Darwin-arm64) asset=kujo-v1.0.1-macos-arm64.tar.gz ;;
  Darwin-x86_64) asset=kujo-v1.0.1-macos-x64.tar.gz ;;
  *) echo "Unsupported platform" >&2; exit 1 ;;
esac
curl -fsSLo ".kujo-bin/$asset" "https://github.com/kujolang/kujo/releases/download/v1.0.1/$asset"
curl -fsSLo ".kujo-bin/$asset.sha256" "https://github.com/kujolang/kujo/releases/download/v1.0.1/$asset.sha256"
(cd .kujo-bin && shasum -a 256 -c "$asset.sha256" && tar -xzf "$asset")
chmod +x .kujo-bin/kujo
