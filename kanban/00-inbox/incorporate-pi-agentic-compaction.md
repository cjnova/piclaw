# Incorporate pi-agentic-compaction

## Analysis: pi-agentic-compaction vs pi built-in compaction

### How pi's built-in compaction works

1. **Trigger**: When `contextTokens > contextWindow - reserveTokens` (default reserve: 16,384 tokens)
2. **Cut point**: Walk backwards keeping ~20,000 recent tokens, cut there
3. **Serialize**: `serializeConversation()` flattens the entire history-to-be-discarded into text:
   - `[User]: ...`, `[Assistant]: ...`, `[Tool result]: ...` format
   - Tool results truncated to **2,000 chars** each
   - Thinking blocks included as `[Assistant thinking]: ...`
4. **Summarize**: Single `completeSimple()` call with the serialized text + structured prompt
5. **Output**: Structured markdown summary (Goal / Constraints / Progress / Key Decisions / Next Steps / Critical Context)
6. **Iterative**: On subsequent compactions, uses an UPDATE prompt that merges new info into the previous summary

### How pi-agentic-compaction works

1. **Hook**: `session_before_compact` — intercepts before built-in runs
2. **Virtual FS**: Dumps the **full JSON** of all LLM messages to `/conversation.json` in a `just-bash` sandbox
3. **Agent loop**: Spawns a summarizer agent with bash/jq tools that **explores** the conversation:
   - Counts messages, finds first user request, reads last 15 messages
   - Checks for user feedback/issues
   - Uses deterministic file-op detection (pairs tool calls with results)
4. **Multiple LLM calls**: Uses a fast/cheap model (Cerebras zai-glm-4.7 → Claude Haiku fallback)
5. **Concurrency**: Up to 6 tool calls in parallel
6. **Output**: Similar structured summary but with more focused sections

### Comparative effectiveness

| Dimension | Built-in | Agentic |
|-----------|----------|---------|
| **Input token cost** | Full serialized conversation (truncated tool results at 2k chars) in one shot | Only queried fragments enter context — much cheaper for long sessions |
| **Output quality (short sessions, <30k tokens)** | ✅ Good — model sees everything | ⚠️ May miss context between explored fragments |
| **Output quality (long sessions, 50k+ tokens)** | ⚠️ Model may miss middle details ("lost in the middle" effect) | ✅ Better — targeted queries find specific info |
| **Speed** | Single LLM call | Multiple calls, but with a fast model (Cerebras) can be comparable |
| **Cost** | High for long sessions (all input tokens billed) | Lower — only queried portions enter context |
| **Reliability** | Very reliable — one call | More failure modes — agent loop, just-bash, model availability |
| **Dependencies** | None (built-in) | `just-bash` (18.8 MB, 15 transitive deps including quickjs-emscripten, sql.js) |
| **File tracking** | Built-in `extractFileOperations` from session entries | Deterministic `detectFileOpsFromConversation` from LLM messages (more thorough) |
| **Iterative update** | ✅ Has UPDATE_SUMMARIZATION_PROMPT for merging with previous summary | ❌ No iterative update — always full re-summarization |

### Key benefits worth porting

1. **Deterministic file-op detection** — Pairs tool calls with their results to find actual modifications vs reads. The built-in version also does this but from session entries; the agentic version cross-references toolCallId → toolResult and filters no-ops ("Applied: 0"). This is a cleaner approach.

2. **Targeted exploration prompt** — The exploration strategy (count → first request → last N messages → file ops → user feedback) is a good structure even for single-pass summarization. Could improve the built-in prompt.

3. **User compaction note forwarding** — Extracts `/compact <note>` and uses it to guide summarization focus. The built-in already supports `customInstructions` but the agentic version's prompt engineering around it is better (explicit instruction to not treat it as the main goal).

4. **Session type detection** — Distinguishes code review/exploration (read-only) from implementation sessions. Prevents false "files modified" claims. This logic could be added to the built-in prompt.

### What's NOT worth porting

1. **The agent loop + virtual FS** — Adds `just-bash` (18.8 MB, quickjs-emscripten) as a dependency for marginal benefit at our typical session sizes. PiClaw sessions rarely exceed 50k tokens before compaction fires (reserve=16k, keep=20k means compaction fires well before hitting model limits).

2. **Multi-model fallback** — We already have model selection; adding Cerebras/Haiku-specific routing for compaction is over-engineering.

3. **Concurrent tool execution** — Only useful inside the agent loop which we're not porting.

### Recommended approach: Improve built-in prompts

Instead of porting the full extension, extract the **best ideas** into the built-in compaction:

1. **Improve the serialization**: The built-in truncates tool results to 2,000 chars. For long sessions, this is actually fine — the agentic version's advantage comes from *not sending everything*, but our sessions compact at moderate sizes anyway.

2. **Enhance the prompt** with:
   - Session type detection instruction ("If you only see read tool calls → this is exploration, not implementation")
   - Done vs In-Progress accuracy instruction ("Check last 10 user messages for complaints")
   - Exact names instruction ("Use EXACT variable/function names from the code")
   - No-op filtering instruction ("Don't count Applied: 0 as modifications")

3. **Add deterministic file-op detection** to the summary output (already partially done via `computeFileLists` in utils.js).

4. **Better `/compact <note>` handling** in the prompt (already supported via `customInstructions` parameter).

### Cost analysis

For a typical PiClaw compaction (~40k tokens of serialized conversation):

- **Built-in (single pass)**: ~40k input tokens + ~4k output tokens = ~44k tokens total
- **Agentic (exploration)**: ~5-8 tool calls × ~5k tokens each = ~25-40k input tokens + overhead from agent loop. With Cerebras (cheap/fast), cost is negligible but adds latency from multiple round-trips.

The savings are real but only significant for very long sessions (100k+ tokens). At our default compaction thresholds, the difference is minor.

### Decision

**Don't integrate the full extension.** Instead:
1. Port the prompt improvements to an upstream PR or a PiClaw extension that improves the `session_before_compact` hook with better prompts
2. Consider adding session-type detection and no-op filtering to the built-in summarization prompt
3. File an upstream issue suggesting the prompt improvements

### Status
- [x] Investigation complete
- [x] Cost/benefit analysis done
- [ ] Prompt improvements extracted and tested
- [ ] Upstream PR or local extension created
