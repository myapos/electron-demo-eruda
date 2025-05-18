#!/bin/bash
# This script reinstalls Electron with the latest stable version
node -v  # Should be 20.x
pnpm -v  # Latest stable (>=7 or 8)
rm -rf node_modules pnpm-lock.yaml node_modules/electron
rm -rf ~/.cache/electron
rm -rf ~/.cache/electron-builder
pnpm store path electron
# → you'll get a path like ~/.local/share/pnpm/store/v3/files/...
# Go to that directory and remove `electron` folders

pnpm store prune
pnpm install
pwd
node ./node_modules/electron/install.js