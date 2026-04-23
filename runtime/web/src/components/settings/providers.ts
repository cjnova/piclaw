// @ts-nocheck
import { html } from '../../vendor/preact-htm.js';

export function ProvidersSection() {
    return html`
        <div class="settings-section">
            <h3>Providers</h3>
            <p class="settings-hint">AI model providers are configured via the OOBE flow or the <code>/login</code> command.</p>
            <p class="settings-hint">Supported: <strong>Anthropic</strong>, <strong>OpenAI</strong>, <strong>Google</strong>, <strong>Azure OpenAI</strong>, <strong>OpenRouter</strong>, <strong>Ollama</strong>, <strong>OpenCode</strong>.</p>
            <p class="settings-hint">Use <code>/login</code> to add a provider or <code>/logout</code> to remove one.</p>
        </div>
    `;
}
