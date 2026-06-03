import { FencedBlock } from "../Chat/FencedBlock";
import { applyAnnotations } from "./annotations";
import type { ContentAnnotation } from "./annotation-types";
import {
  getLanguageLabel,
  highlightCodeToHtml,
  legacyParsers,
  usesLegacyParser,
} from "./code-highlighting";

interface CodeRendererProps {
  source: string;
  lang?: string;
  annotations?: ContentAnnotation[];
  onCopy?: () => void;
}

function renderCodeBody(source: string, highlightedHtml: string) {
  const lineCount = Math.max(1, source.split("\n").length);

  return (
    <div className="code-card__content">
      <div className="code-card__line-numbers" aria-hidden="true">
        {Array.from({ length: lineCount }, (_, index) => (
          <span key={index}>{index + 1}</span>
        ))}
      </div>
      <pre className="code-card__pre">
        <code dangerouslySetInnerHTML={{ __html: highlightedHtml }} />
      </pre>
    </div>
  );
}

export function CodeRenderer({ source, lang, annotations, onCopy }: CodeRendererProps) {
  const label = getLanguageLabel(lang);

  if (usesLegacyParser(lang)) {
    legacyParsers.state.value;
  }

  let highlightedHtml = highlightCodeToHtml(source, lang);

  if (annotations?.length) {
    highlightedHtml = applyAnnotations(highlightedHtml, annotations);
  }

  return (
    <FencedBlock label={label} variant="code" onCopy={onCopy}>
      {renderCodeBody(source, highlightedHtml)}
    </FencedBlock>
  );
}
