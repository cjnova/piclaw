/**
 * Microsoft 365 logo — four colored squares.
 */
export function M365Logo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="1" y="1" width="8.5" height="8.5" fill="#f25022" />
      <rect x="10.5" y="1" width="8.5" height="8.5" fill="#7fba00" />
      <rect x="1" y="10.5" width="8.5" height="8.5" fill="#00a4ef" />
      <rect x="10.5" y="10.5" width="8.5" height="8.5" fill="#ffb900" />
    </svg>
  );
}
