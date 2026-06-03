import type { ComponentChildren } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { Icon } from "../Icon";
import { CollapsibleSection } from "./CollapsibleSection";
import type { ToolStatus } from "./types";

interface StreamingIndicatorProps {
  toolStatuses?: ToolStatus[];
  streamingContent?: string;
  reasoningContent?: string;
  renderContent?: (content: string) => ComponentChildren;
}

export function StreamingIndicator({
  toolStatuses = [],
  streamingContent,
  reasoningContent,
  renderContent,
}: StreamingIndicatorProps) {
  const hasStreamingContent = Boolean(streamingContent && streamingContent.trim());
  const hasTools = toolStatuses.length > 0;
  const anyRunning = toolStatuses.some((tool) => tool.running);
  const reasoningRef = useRef<HTMLDivElement>(null);

  const content = hasStreamingContent && streamingContent
    ? (renderContent ? renderContent(streamingContent) : streamingContent)
    : null;

  // Auto-scroll reasoning to bottom (tail -f)
  useEffect(() => {
    if (reasoningRef.current) {
      reasoningRef.current.scrollTop = reasoningRef.current.scrollHeight;
    }
  }, [reasoningContent]);

  return (
    <div className="chat__message chat__message--agent chat__streaming-indicator" aria-live="polite" aria-label="Assistant is typing">
      <div className="chat__avatar-circle chat__avatar-circle--agent" aria-hidden="true">
        <Icon name="robot" size={16} />
      </div>

      <div className="chat__content-wrap">
        {/* Streaming text at the top — grows naturally */}
        {hasStreamingContent ? <div className="chat__content chat__content--streaming">{content}</div> : null}

        {/* Tools section below text */}
        {hasTools ? (
          <div className="chat__streaming-sections">
            <CollapsibleSection
              label={anyRunning ? `Running tools (${toolStatuses.filter((t) => !t.running).length + 1} of ${toolStatuses.length})...` : `Used ${toolStatuses.length} tools`}
              defaultOpen
            >
              <div className="chat__tool-output">
                {(anyRunning ? toolStatuses.slice(-3) : toolStatuses).map((tool, index) => (
                  <div key={tool.id || `${tool.description}-${index}`} className="chat__tool-status-line">
                    <span>
                      {tool.running ? <Icon name="settings" size={14} className="chat__tool-icon--spinning" /> : <Icon name="wrench" size={14} />}
                    </span>
                    <span className={tool.running ? "chat__tool-status--running" : ""}>{tool.description}</span>
                  </div>
                ))}
              </div>
            </CollapsibleSection>
          </div>
        ) : null}

        {/* Reasoning below tools */}
        {reasoningContent ? (
          <div className="chat__streaming-sections">
            <CollapsibleSection label="Reasoning" defaultOpen={false}>
              <div className="chat__reasoning-content" ref={reasoningRef}>
                {renderContent ? renderContent(reasoningContent) : reasoningContent}
              </div>
            </CollapsibleSection>
          </div>
        ) : null}

        {/* Dots at the very bottom */}
        <div className="chat__streaming-footer">
          <span className="chat__jumping-dots" aria-label="Processing">
            <span className="chat__dot" />
            <span className="chat__dot" />
            <span className="chat__dot" />
          </span>
        </div>
      </div>
    </div>
  );
}
