/**
 * Bicep syntax highlighting mode for CodeMirror StreamLanguage.
 * Reference: Azure/bicep hljs grammar.
 */

const KEYWORDS = new Set([
  "targetScope", "resource", "module", "param", "var", "output", "for", "in",
  "if", "existing", "import", "as", "type", "metadata", "assert", "using",
  "test", "with", "func", "spread", "true", "false", "null",
]);

const TYPES = new Set([
  "string", "int", "bool", "object", "array",
]);

const BUILTINS = new Set([
  "resourceGroup", "subscription", "tenant", "managementGroup",
  "concat", "uniqueString", "format", "toLower", "toUpper",
  "contains", "length", "empty", "first", "last", "split", "join",
  "replace", "trim", "startsWith", "endsWith", "indexOf",
  "base64", "uri", "uriComponent", "dataUri",
  "environment", "reference", "listKeys", "list",
  "json", "union", "intersection",
  "range", "take", "skip", "min", "max", "padLeft",
  "guid", "dateTimeAdd", "utcNow",
  "loadTextContent", "loadFileAsBase64", "loadJsonContent",
  "sys", "az",
]);

interface StreamLike {
  eatSpace(): boolean;
  match(pattern: string | RegExp): string | boolean | null;
  current(): string;
  next(): string | null;
  skipToEnd(): void;
}

export interface StreamState {
  inBlockComment: boolean;
  inMultilineString: boolean;
}

export const bicepMode = {
  startState(): StreamState {
    return { inBlockComment: false, inMultilineString: false };
  },

  token(stream: StreamLike, state: StreamState): string | null {
    if (state.inBlockComment) {
      if (stream.match(/.*?\*\//)) {
        state.inBlockComment = false;
      } else {
        stream.skipToEnd();
      }
      return "comment";
    }

    if (state.inMultilineString) {
      if (stream.match(/.*?'''/)) {
        state.inMultilineString = false;
      } else {
        stream.skipToEnd();
      }
      return "string";
    }

    if (stream.eatSpace()) return null;

    if (stream.match("//")) {
      stream.skipToEnd();
      return "comment";
    }

    if (stream.match("/*")) {
      state.inBlockComment = true;
      if (stream.match(/.*?\*\//)) {
        state.inBlockComment = false;
      } else {
        stream.skipToEnd();
      }
      return "comment";
    }

    if (stream.match(/@[a-zA-Z_]\w*/)) {
      return "meta";
    }

    if (stream.match("'''")) {
      state.inMultilineString = true;
      if (stream.match(/.*?'''/)) {
        state.inMultilineString = false;
      } else {
        stream.skipToEnd();
      }
      return "string";
    }

    if (stream.match(/'(?:[^'\\]|\\.)*'/)) {
      return "string";
    }

    if (stream.match(/\d+/)) {
      return "number";
    }

    if (stream.match(/[a-zA-Z_]\w*/)) {
      const word = stream.current();
      if (KEYWORDS.has(word)) return "keyword";
      if (TYPES.has(word)) return "typeName";
      if (BUILTINS.has(word)) return "variableName";
      return "variableName";
    }

    if (stream.match(/[=!<>]=?|&&|\|\||[+\-*/%?:!.]/)) {
      return "operator";
    }

    if (stream.match(/[{}()\[\],;]/)) {
      return "punctuation";
    }

    stream.next();
    return null;
  },
};
