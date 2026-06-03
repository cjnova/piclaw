import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";
import { Icon } from "../Icon";
import type { TreeNode } from "./types";
import { formatBytes } from "./format-bytes";

export const DOT_COLORS = [
  "#4fc1ff", "#a8cc8c", "#f4b942", "#e06c75",
  "#c678dd", "#56b6c2", "#e5c07b", "#61afef",
  "#98c379", "#e06c75",
];

const RING_SPECS = [
  { innerR: 38, outerR: 68 },
  { innerR: 71, outerR: 90 },
  { innerR: 93, outerR: 108 },
] as const;

const GAP_DEG = 1.5;
const MAX_SLICES = 14;
const SB_CX = 120;
const SB_CY = 120;

export interface FolderChildInfo {
  name: string;
  path: string;
  type: "dir" | "file";
  size: number | null;
}

export interface SunburstNode {
  name: string;
  path: string;
  type: "dir" | "file";
  size: number | null;
  children?: SunburstNode[];
}

export interface ChartSegment {
  color: string;
  label: string;
  pct: number;
  size: number;
}

interface ArcSegment {
  d: string;
  color: string;
  label: string;
  size: number;
}

export interface FolderPreviewProps {
  node: TreeNode;
  folderChildren: FolderChildInfo[] | null;
  sunburstRoot?: SunburstNode | null;
  totalSize: number | null;
  loading?: boolean;
  error?: string;
  actions?: ComponentChildren;
  description?: string;
}

function nameHash(name: string): number {
  let h = 0x811c9dc5;
  for (let i = 0; i < name.length; i++) {
    h ^= name.charCodeAt(i);
    h = (h * 0x01000193) >>> 0;
  }
  return h;
}

function buildChartSegments(children: FolderChildInfo[] | null, totalSize: number | null, maxSlices = 10): ChartSegment[] {
  if (!children?.length) return [];

  const total = totalSize ?? children.reduce((sum, child) => sum + Math.max(0, child.size ?? 0), 0);
  if (total <= 0) return [];

  const sorted = [...children]
    .filter((child) => (child.size ?? 0) > 0)
    .sort((a, b) => (b.size ?? 0) - (a.size ?? 0));

  if (!sorted.length) return [];

  const top = sorted.slice(0, Math.max(1, maxSlices));
  const remainder = sorted.slice(top.length).reduce((sum, child) => sum + (child.size ?? 0), 0);

  const segments: ChartSegment[] = top.map((child, index) => ({
    color: DOT_COLORS[index % DOT_COLORS.length],
    label: child.type === "dir" ? `📁 ${child.name}` : child.name,
    pct: ((child.size ?? 0) / total) * 100,
    size: child.size ?? 0,
  }));

  if (remainder > 0) {
    segments.push({
      color: "rgba(255,255,255,0.28)",
      label: "Other",
      pct: (remainder / total) * 100,
      size: remainder,
    });
  }

  return segments;
}

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

function describeArc(
  cx: number,
  cy: number,
  innerR: number,
  outerR: number,
  startAngle: number,
  endAngle: number,
): string {
  const span = endAngle - startAngle;
  if (span >= 359.9) {
    const mid = startAngle + 180;
    return `${describeArc(cx, cy, innerR, outerR, startAngle, mid)} ${describeArc(cx, cy, innerR, outerR, mid, startAngle + 359.8)}`;
  }

  const s1 = polarToCartesian(cx, cy, outerR, startAngle);
  const e1 = polarToCartesian(cx, cy, outerR, endAngle);
  const s2 = polarToCartesian(cx, cy, innerR, endAngle);
  const e2 = polarToCartesian(cx, cy, innerR, startAngle);
  const largeArc = span > 180 ? 1 : 0;

  return [
    `M ${s1.x.toFixed(3)} ${s1.y.toFixed(3)}`,
    `A ${outerR} ${outerR} 0 ${largeArc} 1 ${e1.x.toFixed(3)} ${e1.y.toFixed(3)}`,
    `L ${s2.x.toFixed(3)} ${s2.y.toFixed(3)}`,
    `A ${innerR} ${innerR} 0 ${largeArc} 0 ${e2.x.toFixed(3)} ${e2.y.toFixed(3)}`,
    "Z",
  ].join(" ");
}

function buildArcSegments(
  nodes: SunburstNode[],
  ring: number,
  startAngle: number,
  endAngle: number,
  parentHue?: number,
): ArcSegment[] {
  if (ring >= RING_SPECS.length) return [];

  const { innerR, outerR } = RING_SPECS[ring];
  const totalRange = endAngle - startAngle;
  if (totalRange <= GAP_DEG * 2) return [];

  const valid = nodes
    .filter((n) => (n.size ?? 0) > 0)
    .sort((a, b) => (b.size ?? 0) - (a.size ?? 0))
    .slice(0, MAX_SLICES);

  if (!valid.length) return [];

  const totalSize = valid.reduce((sum, node) => sum + (node.size ?? 0), 0);
  if (totalSize <= 0) return [];

  const segments: ArcSegment[] = [];
  let angle = startAngle + GAP_DEG / 2;

  for (const node of valid) {
    const size = node.size ?? 0;
    const fraction = size / totalSize;
    const segRange = totalRange * fraction - GAP_DEG;

    if (segRange < 1.5) {
      angle += totalRange * fraction;
      continue;
    }

    const segEnd = angle + segRange;
    const hue = ring === 0 ? nameHash(node.name) % 360 : (parentHue ?? nameHash(node.name) % 360);
    const lightness = ring === 0 ? 58 : ring === 1 ? 46 : 36;

    segments.push({
      d: describeArc(SB_CX, SB_CY, innerR, outerR, angle, segEnd),
      color: `hsl(${hue}, 68%, ${lightness}%)`,
      label: node.name,
      size,
    });

    if (node.children?.length) {
      segments.push(...buildArcSegments(node.children, ring + 1, angle, segEnd, hue));
    }

    angle = segEnd + GAP_DEG;
  }

  return segments;
}

interface SunburstChartProps {
  root: SunburstNode;
  totalSize: number;
}

function SunburstChart({ root, totalSize }: SunburstChartProps) {
  const arcs = buildArcSegments(root.children ?? [], 0, 0, 360);

  return (
    <div className="workspace__sunburst">
      <svg viewBox="0 0 240 240" aria-label="Folder size sunburst chart">
        {RING_SPECS.map((spec, index) => (
          <circle
            key={`ring-${index}`}
            className="workspace__sunburst-ring"
            cx={SB_CX}
            cy={SB_CY}
            r={(spec.innerR + spec.outerR) / 2}
            fill="none"
            strokeWidth={spec.outerR - spec.innerR}
          />
        ))}

        {arcs.map((arc, index) => (
          <path
            key={`arc-${index}-${arc.label}`}
            className="workspace__sunburst-segment"
            d={arc.d}
            fill={arc.color}
          >
            <title>{arc.label} — {formatBytes(arc.size)}</title>
          </path>
        ))}

        <circle className="workspace__sunburst-core" cx={SB_CX} cy={SB_CY} r="35" />

        <foreignObject x={SB_CX - 35} y={SB_CY - 18} width="70" height="36">
          <div className="workspace__sunburst-center">
            <span className="workspace__sunburst-total">{formatBytes(totalSize)}</span>
            <span className="workspace__sunburst-label">TOTAL</span>
          </div>
        </foreignObject>
      </svg>
    </div>
  );
}


export function FolderPreview({
  node,
  folderChildren,
  sunburstRoot = null,
  totalSize,
  loading = false,
  error,
  actions,
  description = "Folder selected — create a file or download a zip archive.",
}: FolderPreviewProps) {
  const [viewMode, setViewMode] = useState<"list" | "chart">("list");
  const [showAll, setShowAll] = useState(false);

  const MAX_VISIBLE = 10;
  const visible = folderChildren
    ? showAll
      ? folderChildren
      : folderChildren.slice(0, MAX_VISIBLE)
    : [];
  const hiddenCount = folderChildren ? Math.max(0, folderChildren.length - MAX_VISIBLE) : 0;
  const total = totalSize ?? folderChildren?.reduce((a, c) => a + (c.size ?? 0), 0) ?? 0;
  const chartSegments = buildChartSegments(folderChildren, totalSize);

  return (
    <div className="workspace__preview-info">
      <div className="workspace__preview-name workspace__preview-name--wrap">
        <Icon name="folder-opened" size={16} className="workspace__folder-icon" />
        {node.name}
      </div>

      {actions && <div className="workspace__folder-actions">{actions}</div>}

      <div className="workspace__preview-path">{node.path}</div>
      <div className="workspace__folder-desc">{description}</div>

      {loading && (
        <div className="workspace__preview-meta workspace__preview-meta--loading">Loading…</div>
      )}
      {error && (
        <div className="workspace__preview-meta workspace__preview-meta--error">{error}</div>
      )}
      {!loading && !error && folderChildren !== null && (
        <>
          <div className="workspace__folder-toolbar">
            {total > 0 && (
              <div className="workspace__folder-total">Total: {formatBytes(total)}</div>
            )}
            <div className="workspace__folder-view-toggle" role="tablist" aria-label="Folder preview view">
              <button
                type="button"
                className={`workspace__folder-view-btn${viewMode === "list" ? " workspace__folder-view-btn--active" : ""}`}
                onClick={() => setViewMode("list")}
              >
                <Icon name="list-tree" size={14} /> List
              </button>
              <button
                type="button"
                className={`workspace__folder-view-btn${viewMode === "chart" ? " workspace__folder-view-btn--active" : ""}`}
                onClick={() => setViewMode("chart")}
              >
                <Icon name="pie-chart" size={14} /> Chart
              </button>
            </div>
          </div>

          {viewMode === "list" ? (
            <div className="workspace__folder-breakdown">
              {visible.map((child, i) => {
                const pct = total > 0 && child.size !== null
                  ? ((child.size / total) * 100).toFixed(0)
                  : null;
                const color = DOT_COLORS[i % DOT_COLORS.length];
                return (
                  <div key={child.path} className="workspace__folder-breakdown-item">
                    <svg className="workspace__folder-breakdown-dot" viewBox="0 0 8 8" aria-hidden="true">
                      <circle cx="4" cy="4" r="4" fill={color} />
                    </svg>
                    <span className="workspace__folder-breakdown-name" title={child.name}>
                      {child.type === "dir" ? "📁 " : ""}{child.name}
                    </span>
                    <span className="workspace__folder-breakdown-size">
                      {child.size !== null ? formatBytes(child.size) : "—"}
                    </span>
                    {pct !== null && (
                      <span className="workspace__folder-breakdown-pct">{pct}%</span>
                    )}
                  </div>
                );
              })}
              {!showAll && hiddenCount > 0 && (
                <button
                  type="button"
                  className="workspace__folder-breakdown-more"
                  onClick={() => setShowAll(true)}
                >
                  and {hiddenCount} more…
                </button>
              )}
              {folderChildren.length === 0 && (
                <div className="workspace__preview-meta">Empty folder</div>
              )}
            </div>
          ) : (
            <div className="workspace__folder-chart-wrap">
              {sunburstRoot && total > 0 ? (
                <>
                  <SunburstChart root={sunburstRoot} totalSize={total} />
                  {chartSegments.length > 0 && (
                    <div className="workspace__folder-chart-legend">
                      {chartSegments.map((segment) => (
                        <div key={segment.label} className="workspace__folder-chart-legend-item">
                          <svg className="workspace__folder-breakdown-dot" viewBox="0 0 8 8" aria-hidden="true">
                            <circle cx="4" cy="4" r="4" fill={segment.color} />
                          </svg>
                          <span className="workspace__folder-breakdown-name" title={segment.label}>{segment.label}</span>
                          <span className="workspace__folder-breakdown-size">{formatBytes(segment.size)}</span>
                          <span className="workspace__folder-breakdown-pct">{segment.pct.toFixed(0)}%</span>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <div className="workspace__preview-meta">Nothing sizeable to chart</div>
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
}
