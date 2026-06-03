import type { ComponentChildren } from "preact";
import { Icon } from "../Icon";
import { BubbleActions } from "./BubbleActions";
import type { BubbleActionDefinition, Message, MessageAction } from "./types";

interface MessageItemProps {
  message: Message;
  renderContent?: (content: string, message: Message) => ComponentChildren;
  renderAvatar?: (message: Message) => ComponentChildren;
  renderTimestamp?: (timestamp: number) => string | ComponentChildren;
  renderHeader?: (message: Message) => ComponentChildren;
  actions?: MessageAction[];
  onAction?: (messageId: string, actionId: string) => void;
  bubbleActions?: BubbleActionDefinition[] | ((message: Message) => BubbleActionDefinition[]);
  onBubbleAction?: (messageId: string, actionId: string) => void;
  onAvatarClick?: (message: Message, event: MouseEvent) => void;
}

function formatTimestamp(timestamp: number): string {
  return new Date(timestamp).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function MessageItem({
  message,
  renderContent,
  renderAvatar,
  renderTimestamp,
  renderHeader,
  actions = [],
  onAction,
  bubbleActions = [],
  onBubbleAction,
  onAvatarClick,
}: MessageItemProps) {
  const isUser = message.role === "user";
  const isAssistant = message.role === "assistant";
  const isSystem = message.role === "system";

  const messageClasses = [
    "chat__message",
    isUser ? "chat__message--user" : "",
    isAssistant ? "chat__message--agent" : "",
    isSystem ? "chat__message--system" : "",
    message.status === "sending" ? "chat__message--sending" : "",
    message.status === "error" ? "chat__message--error" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const content = renderContent ? renderContent(message.content, message) : message.content;
  const timestampContent = renderTimestamp ? renderTimestamp(message.timestamp) : formatTimestamp(message.timestamp);

  if (isSystem) {
    return (
      <article className={messageClasses}>
        <div className="chat__content">{content}</div>
        <time className="chat__timestamp" dateTime={new Date(message.timestamp).toISOString()}>
          {timestampContent}
        </time>
      </article>
    );
  }

  const avatar = renderAvatar ? renderAvatar(message) : isUser ? "U" : <Icon name="robot" size={16} />;
  const header = renderHeader ? renderHeader(message) : null;
  const resolvedBubbleActions = typeof bubbleActions === "function" ? bubbleActions(message) : bubbleActions;

  const roleClass = isUser ? "chat__avatar-circle--user" : "chat__avatar-circle--agent";
  const hasBubbleActions = resolvedBubbleActions.length > 0;

  return (
    <article className={messageClasses}>
      {onAvatarClick ? (
        <button
          type="button"
          className={`chat__avatar-circle ${roleClass}`}
          aria-label={`${isUser ? "User" : "Assistant"} avatar settings`}
          onClick={(e) => onAvatarClick(message, e as unknown as MouseEvent)}
        >
          {avatar}
        </button>
      ) : (
        <div className={`chat__avatar-circle ${roleClass}`} aria-hidden="true">
          {avatar}
        </div>
      )}

      <div className={`chat__content-wrap ${hasBubbleActions ? "chat__content-wrap--with-bubble-actions" : ""}`.trim()}>
        <BubbleActions messageId={message.id} actions={resolvedBubbleActions} onAction={onBubbleAction} />
        {header != null && header !== false ? <div className="chat__header">{header}</div> : null}
        <div className="chat__content">{content}</div>

        {message.attachments?.length ? (
          <div className="chat__attachments chat__attachments--message">
            {message.attachments.map((attachment) => (
              <div className="chat__attachment-pill" key={attachment.id}>
                <Icon name="attach" size={16} />
                <span>{attachment.name}</span>
              </div>
            ))}
          </div>
        ) : null}

        <div className="chat__meta-row">
          <time className="chat__timestamp" dateTime={new Date(message.timestamp).toISOString()}>
            {timestampContent}
          </time>

          {actions.length ? (
            <div className="chat__actions">
              {actions.map((action) => (
                <button
                  key={action.id}
                  type="button"
                  className="chat__icon-btn"
                  aria-label={action.label}
                  title={action.label}
                  onClick={() => onAction?.(message.id, action.id)}
                >
                  {action.icon ? <Icon name={action.icon} size={16} /> : action.label}
                </button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </article>
  );
}
