import { expect, test } from 'bun:test';

import { resolveAddonInstallSpec } from '../../src/channels/web/handlers/addons.js';

test('resolveAddonInstallSpec prefers explicit catalog install spec', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-code-validator',
    version: '0.1.0',
    install: {
      kind: 'npm',
      spec: 'piclaw-addon-code-validator@0.1.0',
      piSource: 'npm:piclaw-addon-code-validator@0.1.0',
    },
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-code-validator@0.1.0',
    piSource: 'npm:piclaw-addon-code-validator@0.1.0',
  });
});

test('resolveAddonInstallSpec falls back to npm package@version', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-eml-viewer',
    version: '1.2.3',
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-eml-viewer@1.2.3',
    piSource: 'npm:piclaw-addon-eml-viewer@1.2.3',
  });
});

test('resolveAddonInstallSpec falls back to bare npm package name when version is missing', () => {
  expect(resolveAddonInstallSpec({
    name: 'piclaw-addon-dev-tools',
  })).toEqual({
    kind: 'npm',
    spec: 'piclaw-addon-dev-tools',
    piSource: 'npm:piclaw-addon-dev-tools',
  });
});
