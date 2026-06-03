#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
UPSTREAM_DIR="${1:-${PREACT_SHELL_SOURCE_DIR:-../preact-shell}}"
TARGET_DIR="$ROOT_DIR/runtime/vendor/preact-shell"
PACKAGES=(
  "ui"
  "auth-provider"
  "identity-contracts"
  "workspace-provider"
)

if [[ ! -d "$UPSTREAM_DIR/packages" ]]; then
  echo "preact-shell source not found at: $UPSTREAM_DIR" >&2
  echo "Pass path as first arg or set PREACT_SHELL_SOURCE_DIR" >&2
  exit 1
fi

mkdir -p "$TARGET_DIR/packages"

for pkg in "${PACKAGES[@]}"; do
  src="$UPSTREAM_DIR/packages/$pkg/"
  dst="$TARGET_DIR/packages/$pkg/"
  if [[ ! -d "$src" ]]; then
    echo "missing upstream package directory: $src" >&2
    exit 1
  fi

  rsync -a --delete \
    --exclude node_modules \
    --exclude dist \
    --exclude .turbo \
    --exclude '*.tsbuildinfo' \
    "$src" "$dst"
  echo "synced preact-shell package: $pkg"
done

cp "$UPSTREAM_DIR/README.md" "$TARGET_DIR/README.upstream.md"

if command -v git >/dev/null 2>&1 && [[ -d "$UPSTREAM_DIR/.git" ]]; then
  upstream_ref="$(git -C "$UPSTREAM_DIR" rev-parse --short HEAD)"
else
  upstream_ref="unknown"
fi

cat > "$TARGET_DIR/SYNC.md" <<EOF
# Vendored preact-shell source snapshot

Last synced from: \
- Source path: $UPSTREAM_DIR
- Git ref: $upstream_ref

Run from piclaw root to refresh:

\`\`\`bash
./scripts/refresh-vendored-preact-shell-artifacts.sh /path/to/preact-shell
bun install
\`\`\`
EOF

# ensure local intra-vendor dependencies resolve without workspace protocol
python3 <<'PY'
import json
from pathlib import Path

base = Path("runtime/vendor/preact-shell/packages")
patches = {
    "ui": {"@cjnova/preact-shell-identity-contracts": "file:../identity-contracts"},
    "auth-provider": {"@cjnova/preact-shell-identity-contracts": "file:../identity-contracts"},
}

for pkg, dep_updates in patches.items():
    path = base / pkg / "package.json"
    data = json.loads(path.read_text())
    deps = data.setdefault("dependencies", {})
    deps.update(dep_updates)
    path.write_text(json.dumps(data, indent=2) + "\n")
PY

echo "Running bun install to refresh bun.lock"
(cd "$ROOT_DIR" && bun install)
