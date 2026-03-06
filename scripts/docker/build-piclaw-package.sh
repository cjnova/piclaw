#!/usr/bin/env bash
# scripts/docker/build-piclaw-package.sh – Build piclaw .tgz and install globally.
#
# Runs bun update, tsc, bun pack, then `bun add -g` to let bun handle
# the global install layout under $BUN_INSTALL.
set -euo pipefail

export BUN_INSTALL="${BUN_INSTALL:-/usr/local/lib/bun}"
export PATH="$BUN_INSTALL/bin:/home/linuxbrew/.linuxbrew/bin:$PATH"

cd /home/agent/piclaw

bun update
bun install
bun run build
bun run build:web

rm -f piclaw-*.tgz
PACK_DIR="$(mktemp -d)"
bun pm pack --outdir "$PACK_DIR"

TARBALL="$(find "$PACK_DIR" -maxdepth 1 -name 'piclaw-*.tgz' | head -n1)"
if [ -z "$TARBALL" ] || [ ! -f "$TARBALL" ]; then
  TARBALL="$(find . -maxdepth 1 -name 'piclaw-*.tgz' | head -n1)"
fi
if [ -z "$TARBALL" ] || [ ! -f "$TARBALL" ]; then
  echo "piclaw tarball not found" >&2
  exit 1
fi

sudo BUN_INSTALL="$BUN_INSTALL" "$BUN_INSTALL/bin/bun" add -g "$TARBALL"

rm -f "$TARBALL"
rm -rf "$PACK_DIR"

# Ensure world-readable after install
sudo chmod -R a+rX "$BUN_INSTALL"

# Symlink piclaw into /usr/local/bin if bun placed it under $BUN_INSTALL/bin
if [ -f "$BUN_INSTALL/bin/piclaw" ]; then
  sudo ln -sf "$BUN_INSTALL/bin/piclaw" /usr/local/bin/piclaw
fi
