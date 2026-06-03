import { useCopyVerify } from "../hooks";
import { Icon, M365Logo } from "../Icon";
import { copyToClipboard } from "../utils";

export interface DeviceFlowCardProps {
  provider?: string;
  code: string;
  url: string;
  status: "pending" | "completed" | "failed";
  error?: string;
  onCancel: () => void;
}

export function DeviceFlowCard({ provider = "github", code, url, status, error, onCancel }: DeviceFlowCardProps) {
  const { verifiedId, markVerified } = useCopyVerify(1200);

  const onCopy = async () => {
    const copied = await copyToClipboard(code);
    if (copied) {
      markVerified("copy");
    }
  };

  const isM365 = provider === "m365";
  const providerName = isM365 ? "Microsoft 365" : "GitHub";

  return (
    <div className="device-flow-overlay" role="presentation">
      <div className="device-flow-card" role="dialog" aria-modal="true" aria-label={`Complete ${providerName} sign in`}>
        <div className="device-flow-card__icon">
          {isM365 ? <M365Logo size={32} /> : <Icon name="github" size={32} />}
        </div>
        <h2 className="device-flow-card__title">Sign in with {providerName}</h2>
        <p className="device-flow-card__description">Enter this code to authorize your device:</p>

        <div className="device-flow-card__code-row">
          <code className="device-flow-card__code">{code}</code>
          <button type="button" className="device-flow-card__copy-button" onClick={onCopy}>
            {verifiedId === "copy" ? "Copied" : "Copy"}
          </button>
        </div>

        <a href={url} target="_blank" rel="noreferrer noopener" className="device-flow-card__url">
          {url}
        </a>

        <div className={`device-flow-card__status is-${status}`}>
          {status === "pending" && (
            <>
              <span className="device-flow-card__spinner" aria-hidden="true">
                <span />
                <span />
                <span />
              </span>
              <span>Waiting for authorization...</span>
            </>
          )}
          {status === "completed" && (
            <>
              <span className="device-flow-card__status-icon" aria-hidden="true">✓</span>
              <span>Signed in!</span>
            </>
          )}
          {status === "failed" && (
            <>
              <span className="device-flow-card__status-icon" aria-hidden="true">✕</span>
              <span>{error || "Authorization failed."}</span>
            </>
          )}
        </div>

        <button type="button" className="device-flow-card__cancel-button" onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
}
