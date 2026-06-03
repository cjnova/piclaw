import { useEffect, useRef, useState } from "preact/hooks";
import type { ComponentChildren } from "preact";
import { MessageItem } from "./MessageItem";
import { Icon } from "../Icon";
import { StreamingIndicator } from "./StreamingIndicator";
import type { BubbleActionDefinition, Message, MessageAction, ToolStatus } from "./types";
import { useStickToBottom } from "./useStickToBottom";

interface MessageListProps {
  messages: Message[];
  streaming?: boolean;
  onScrollTop?: () => void;
  renderContent?: (content: string, message: Message) => ComponentChildren;
  renderAvatar?: (message: Message) => ComponentChildren;
  renderTimestamp?: (timestamp: number) => string | ComponentChildren;
  renderHeader?: (message: Message) => ComponentChildren;
  onAvatarClick?: (message: Message, event: MouseEvent) => void;
  messageActions?: MessageAction[];
  onMessageAction?: (messageId: string, actionId: string) => void;
  bubbleActions?: BubbleActionDefinition[] | ((message: Message) => BubbleActionDefinition[]);
  onBubbleAction?: (messageId: string, actionId: string) => void;
  scrollToMessage?: string;
  toolStatuses?: ToolStatus[];
  streamingContent?: string;
  reasoningContent?: string;
}

const TOP_THRESHOLD = 60;

function getMessageSelector(messageId: string): string {
  if (typeof CSS !== "undefined" && typeof CSS.escape === "function") {
    return `[data-message-id="${CSS.escape(messageId)}"]`;
  }
  // Fallback: escape all non-alphanumeric chars
  const escaped = messageId.replace(/[^a-zA-Z0-9-_]/g, "\\$&");
  return `[data-message-id="${escaped}"]`;
}

export function MessageList({
  messages,
  streaming = false,
  onScrollTop,
  renderContent,
  renderAvatar,
  renderTimestamp,
  renderHeader,
  onAvatarClick,
  messageActions,
  onMessageAction,
  bubbleActions,
  onBubbleAction,
  scrollToMessage,
  toolStatuses,
  streamingContent,
  reasoningContent,
}: MessageListProps) {
  const { scrollRef, contentRef, isAtBottom, scrollToBottom } = useStickToBottom({ initial: "instant" });
  const prevStreamingRef = useRef(streaming);
  const prevMessageCountRef = useRef(messages.length);
  const lastMessageVisibilityRafRef = useRef<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Keyboard scrolling: PgUp/PgDn/Ctrl+Home/Ctrl+End work regardless of focus
  useEffect(() => {
    const handleScrollKeys = (e: KeyboardEvent) => {
      const node = scrollRef.current;
      if (!node) return;

      const target = e.target as HTMLElement;
      const isTextInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable;

      // PgUp/PgDn — skip if target is a scrollable text input (long compose messages)
      if (e.key === "PageUp" && !isTextInput) {
        e.preventDefault();
        node.scrollBy({ top: -node.clientHeight * 0.8, behavior: "smooth" });
      } else if (e.key === "PageDown" && !isTextInput) {
        e.preventDefault();
        node.scrollBy({ top: node.clientHeight * 0.8, behavior: "smooth" });
      } else if (e.key === "Home" && e.ctrlKey) {
        e.preventDefault();
        node.scrollTo({ top: 0, behavior: "smooth" });
      } else if (e.key === "End" && e.ctrlKey) {
        e.preventDefault();
        node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
      } else if (!isTextInput) {
        // Home/End without Ctrl — only if NOT in a text input
        if (e.key === "Home") {
          e.preventDefault();
          node.scrollTo({ top: 0, behavior: "smooth" });
        } else if (e.key === "End") {
          e.preventDefault();
          node.scrollTo({ top: node.scrollHeight, behavior: "smooth" });
        }
      }
    };

    document.addEventListener("keydown", handleScrollKeys);
    return () => document.removeEventListener("keydown", handleScrollKeys);
  }, [scrollRef]);

  // When a new message is added (user sends), always scroll to bottom
  useEffect(() => {
    const prevCount = prevMessageCountRef.current;
    prevMessageCountRef.current = messages.length;

    if (messages.length > prevCount) {
      scrollToBottom();
    }
  }, [messages.length, scrollToBottom]);

  // Track whether the last message's start is above the visible area
  useEffect(() => {
    const node = scrollRef.current;
    if (!node || messages.length === 0) {
      setShowScrollTop(false);
      return;
    }

    const checkLastMessageVisibility = () => {
      lastMessageVisibilityRafRef.current = null;
      const lastMsg = messages[messages.length - 1];
      const target = node.querySelector<HTMLElement>(getMessageSelector(lastMsg.id));
      if (!target) {
        setShowScrollTop(false);
        return;
      }

      const containerRect = node.getBoundingClientRect();
      const targetRect = target.getBoundingClientRect();
      // Show button when the top of the last message is above the scroll container's top
      setShowScrollTop(targetRect.top < containerRect.top - 10);
    };

    const scheduleLastMessageVisibilityCheck = () => {
      if (lastMessageVisibilityRafRef.current !== null) {
        return;
      }

      lastMessageVisibilityRafRef.current = requestAnimationFrame(checkLastMessageVisibility);
    };

    node.addEventListener("scroll", scheduleLastMessageVisibilityCheck, { passive: true });
    scheduleLastMessageVisibilityCheck();

    return () => {
      node.removeEventListener("scroll", scheduleLastMessageVisibilityCheck);
      if (lastMessageVisibilityRafRef.current !== null) {
        cancelAnimationFrame(lastMessageVisibilityRafRef.current);
        lastMessageVisibilityRafRef.current = null;
      }
    };
  }, [scrollRef, messages]);

  const scrollToLastMessageStart = () => {
    if (!scrollRef.current || messages.length === 0) return;
    const lastMsg = messages[messages.length - 1];
    const target = scrollRef.current.querySelector<HTMLElement>(getMessageSelector(lastMsg.id));
    if (target) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      target.scrollIntoView({ behavior, block: "start" });
    }
  };
  // When streaming ends, scroll to the start of the last message
  useEffect(() => {
    const wasStreaming = prevStreamingRef.current;
    prevStreamingRef.current = streaming;

    if (wasStreaming && !streaming && messages.length > 0 && scrollRef.current) {
      const lastMessage = messages[messages.length - 1];
      const target = scrollRef.current.querySelector<HTMLElement>(getMessageSelector(lastMessage.id));

      if (target) {
        const rafId = requestAnimationFrame(() => {
          const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
          target.scrollIntoView({ behavior, block: "start" });
        });
        return () => cancelAnimationFrame(rafId);
      }
    }
  }, [streaming, messages, scrollRef]);

  useEffect(() => {
    if (!scrollToMessage || !scrollRef.current) {
      return;
    }

    const target = scrollRef.current.querySelector<HTMLElement>(getMessageSelector(scrollToMessage));

    if (target) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
      target.scrollIntoView({ behavior, block: "center" });
    }
  }, [scrollRef, scrollToMessage]);

  return (
    <div className="chat__message-list-wrap">
      <div
        className="chat__message-list"
        tabIndex={0}
        ref={(node) => {
          scrollRef.current = node;
        }}
        onScroll={() => {
          const node = scrollRef.current;

          if (!node || node.scrollTop > TOP_THRESHOLD) {
            return;
          }

          onScrollTop?.();
        }}
      >
        <div
          ref={(node) => {
            contentRef.current = node;
          }}
          className="chat__message-list__content"
        >
          {messages.length === 0 && !streaming ? <div className="chat__empty">No messages yet</div> : null}

          {messages.map((message) => (
            <div key={message.id} data-message-id={message.id}>
              <MessageItem
                message={message}
                renderContent={renderContent}
                renderAvatar={renderAvatar}
                renderTimestamp={renderTimestamp}
                renderHeader={renderHeader}
                onAvatarClick={onAvatarClick}
                actions={messageActions}
                onAction={onMessageAction}
                bubbleActions={bubbleActions}
                onBubbleAction={onBubbleAction}
              />
            </div>
          ))}

          {streaming ? (
            <StreamingIndicator
              toolStatuses={toolStatuses}
              streamingContent={streamingContent}
              reasoningContent={reasoningContent}
              renderContent={renderContent
                ? (content: string) => renderContent(content, { id: "__streaming", role: "assistant", content, timestamp: Date.now() })
                : undefined
              }
            />
          ) : null}
        </div>
      </div>

      <button
        type="button"
        className="chat__scroll-top"
        hidden={!showScrollTop}
        aria-label="Scroll to start of last message"
        onClick={scrollToLastMessageStart}
      >
        <Icon name="chevron-up" size={16} />
      </button>

      <button
        type="button"
        className="chat__scroll-bottom"
        hidden={isAtBottom}
        aria-label="Scroll to bottom"
        onClick={scrollToBottom}
      >
        <Icon name="chevron-down" size={16} />
      </button>
    </div>
  );
}
