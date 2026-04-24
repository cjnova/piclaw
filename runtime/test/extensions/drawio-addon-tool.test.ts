import { afterEach, expect, test } from 'bun:test';
import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

import '../helpers.js';
import { importFresh, withTempWorkspaceEnv } from '../helpers.js';

afterEach(() => {
  delete (globalThis as any).__piclaw_registerRoute;
});

test('drawio addon tool creates missing files and opens the web pane via UI request', async () => {
  await withTempWorkspaceEnv('piclaw-drawio-addon-tool-', {}, async (workspace) => {
    const registeredTools = new Map<string, any>();
    let customOptions: any = null;

    (globalThis as any).__piclaw_registerRoute = () => 'created';

    const { default: registerDrawioAddon } = await importFresh('/workspace/piclaw-addons/addons/drawio-editor/index.ts');
    registerDrawioAddon({
      registerTool(tool: any) {
        registeredTools.set(tool.name, tool);
      },
    } as any);

    const tool = registeredTools.get('open_drawio_editor');
    expect(tool).toBeTruthy();

    const result = await tool.execute('tool-call-1', { path: 'diagrams/system.drawio' }, undefined, undefined, {
      hasUI: true,
      ui: {
        async custom(_factory: unknown, options: unknown) {
          customOptions = options;
          return { ok: true, opened: true, target: 'tab' };
        },
      },
    });

    const createdPath = join(workspace.workspace, 'diagrams', 'system.drawio');
    expect(existsSync(createdPath)).toBe(true);
    expect(readFileSync(createdPath, 'utf8')).toContain('<mxfile');
    expect(customOptions).toEqual(expect.objectContaining({
      action: 'open_workspace_file',
      path: 'diagrams/system.drawio',
      target: 'tab',
    }));
    expect(result).toEqual(expect.objectContaining({
      details: expect.objectContaining({
        ok: true,
        opened: true,
        path: 'diagrams/system.drawio',
        target: 'tab',
      }),
    }));
    expect(result.content[0].text).toContain('Opened diagrams/system.drawio in the Draw.io editor pane.');
  });
});
