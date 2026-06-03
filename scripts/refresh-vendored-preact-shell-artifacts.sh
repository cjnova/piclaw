#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
VENDOR_DIR="$ROOT_DIR/vendor/npm"
REGISTRY="https://npm.pkg.github.com"
PACKAGES=(
  "@cjnova/preact-shell-ui"
  "@cjnova/preact-shell-auth-provider"
  "@cjnova/preact-shell-identity-contracts"
  "@cjnova/preact-shell-workspace-provider"
)

if [[ -z "${NODE_AUTH_TOKEN:-}" ]]; then
  NODE_AUTH_TOKEN="$(gh auth token)"
fi
export NODE_AUTH_TOKEN

mkdir -p "$VENDOR_DIR"

package_json_path="$ROOT_DIR/package.json"

for pkg in "${PACKAGES[@]}"; do
  version="$(bunx --bun npm view "$pkg" version --registry="$REGISTRY" 2>/dev/null | tail -n1 | tr -d '[:space:]')"
  if [[ -z "$version" ]]; then
    version="0.1.1"
  fi

  tarball_name="$(echo "$pkg" | sed 's#^@##; s#/#-#g')-${version}.tgz"
  package_slug="$(echo "$pkg" | sed 's#^@##; s#/#-#g')"

  rm -f "$VENDOR_DIR/${package_slug}-"*.tgz

  (
    cd "$VENDOR_DIR"
    bunx --bun npm pack "${pkg}@${version}" --registry="$REGISTRY" >/dev/null
  )

  TARBALL_FILE="$VENDOR_DIR/$tarball_name" PACKAGE_VERSION="$version" python3 <<'PY'
import io
import json
import os
import tarfile
from pathlib import Path

path = Path(os.environ["TARBALL_FILE"])
package_version = os.environ["PACKAGE_VERSION"]

with tarfile.open(path, "r:gz") as source:
    members = source.getmembers()
    payload = []
    for member in members:
        data = source.extractfile(member).read() if member.isfile() else None
        if member.name == "package/package.json" and data is not None:
            package_json = json.loads(data)
            deps = package_json.get("dependencies") or {}
            changed = False
            for dep_name, dep_version in list(deps.items()):
                if isinstance(dep_version, str) and dep_version.startswith("workspace:"):
                    deps[dep_name] = package_version
                    changed = True
            if changed:
                package_json["dependencies"] = deps
                data = (json.dumps(package_json, indent=2) + "\n").encode()
        payload.append((member, data))

tmp = path.with_suffix(".tmp")
with tarfile.open(tmp, "w:gz") as target:
    for member, data in payload:
        out_member = tarfile.TarInfo(member.name)
        out_member.mode = member.mode
        out_member.mtime = member.mtime
        out_member.type = member.type
        out_member.uid = member.uid
        out_member.gid = member.gid
        out_member.uname = member.uname
        out_member.gname = member.gname
        if data is None:
            out_member.size = 0
            target.addfile(out_member)
        else:
            out_member.size = len(data)
            target.addfile(out_member, io.BytesIO(data))

tmp.replace(path)
PY

  PACKAGE_NAME="$pkg" TARBALL_PATH="file:vendor/npm/$tarball_name" PACKAGE_JSON_PATH="$package_json_path" python3 <<'PY'
import json
import os
from pathlib import Path

path = Path(os.environ["PACKAGE_JSON_PATH"])
package_name = os.environ["PACKAGE_NAME"]
tarball_path = os.environ["TARBALL_PATH"]

data = json.loads(path.read_text())
deps = data.setdefault("dependencies", {})
deps[package_name] = tarball_path
overrides = data.setdefault("overrides", {})
overrides[package_name] = tarball_path
path.write_text(json.dumps(data, indent=2) + "\n")
PY

  echo "Vendored $pkg@$version -> vendor/npm/$tarball_name"
done

echo "Running bun install to refresh bun.lock"
(cd "$ROOT_DIR" && bun install)
