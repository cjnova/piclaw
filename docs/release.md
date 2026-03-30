# Release process

## Publishing

Pushing a version tag triggers `.github/workflows/publish.yml` and publishes multi-arch GHCR images:

- `ghcr.io/rcarmo/piclaw:<tag>`
- `ghcr.io/rcarmo/piclaw:latest`

## Cutting a release

```bash
make bump-patch    # or make bump-minor
make push
```

This bumps `VERSION` and `package.json`, commits, tags, and pushes. The CI workflow builds and publishes Docker images for AMD64 and ARM64.

## Release naming

Each release gets a cult/classic movie name. See the [cut-release skill](/workspace/.pi/skills/cut-release/SKILL.md) for the full convention and workflow.

## Container runtime compatibility

PiClaw works with any OCI-compliant runtime.

- **Preferred image source:** `ghcr.io/rcarmo/piclaw`
- **Primary target:** Docker / Docker Desktop
- Also works with Apple Containers, Podman, nerdctl, and similar runtimes
