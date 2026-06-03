import type { ComponentChildren } from "preact";
import { useState } from "preact/hooks";

interface CollapsibleSectionProps {
  label: ComponentChildren;
  defaultOpen?: boolean;
  children?: ComponentChildren;
}

export function CollapsibleSection({ label, defaultOpen = false, children }: CollapsibleSectionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <section>
      <button type="button" className="chat__collapsible-toggle" onClick={() => setOpen((value) => !value)}>
        <span className={`chat__collapsible-chevron ${open ? "chat__collapsible-chevron--open" : ""}`}>▶</span>
        <span>{label}</span>
      </button>

      <div className={`chat__collapsible-body ${open ? "chat__collapsible-body--open" : "chat__collapsible-body--closed"}`}>
        <div>{children}</div>
      </div>
    </section>
  );
}
