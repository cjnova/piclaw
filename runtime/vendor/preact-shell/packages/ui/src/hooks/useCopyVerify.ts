import { useState, useRef, useCallback, useEffect } from "preact/hooks";

/**
 * Hook for copy-verify icon-swap pattern.
 * Returns verifiedId (currently verified action) and markVerified (trigger verification).
 */
export function useCopyVerify(delay = 3000) {
  const [verifiedId, setVerifiedId] = useState<string | null>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const markVerified = useCallback((id: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setVerifiedId(id);
    timerRef.current = setTimeout(() => setVerifiedId(null), delay);
  }, [delay]);

  useEffect(() => () => {
    if (timerRef.current) clearTimeout(timerRef.current);
  }, []);

  return { verifiedId, markVerified };
}
