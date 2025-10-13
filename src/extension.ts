import * as vscode from 'vscode';
import { Platform, PlatformsWiteSetting } from './interfaces';
import { includedPlatforms } from './includedPlatforms';

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand('search-on.search', async () => {
      await searchOn();
    }),
    vscode.commands.registerCommand('search-on.openSettings', () => {
      openSettings();
    })
  );
}

export function deactivate() {}

async function searchOn() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    let selectedText = editor.document.getText(editor.selection);

    if (selectedText === '') {
      const input = await vscode.window.showInputBox({ prompt: 'Search for' });

      if (input && input.trim() !== '') {
        selectedText = input;
      } else {
        return;
      }
    }

    let platforms: Platform[] = [];

    platforms.push(...getSearchPlatforms());
    platforms.push(...getCustomPlatforms());

    platforms = sortPlatformsByLabel(platforms);

    const pick = await vscode.window.showQuickPick(platforms, {
      placeHolder: 'Select a search platform',
    });
    if (pick) {
      const searchUrl = pick.url + encodeURIComponent(selectedText);
      vscode.env.openExternal(vscode.Uri.parse(searchUrl));
    }
  }
}

function getSearchPlatforms(): Platform[] {
  let platforms: Platform[] = [];

  const config = vscode.workspace.getConfiguration('searchOn');

  includedPlatforms.forEach((platform) => {
    if (config.get<boolean>(platform.setting)) {
      platforms.push(platform);
    }
  });

  return platforms;
}

function sortPlatformsByLabel(platforms: Platform[]): Platform[] {
  return platforms.sort((a, b) => {
    const labelA = a.label.toLowerCase();
    const labelB = b.label.toLowerCase();

    if (labelA < labelB) {
      return -1;
    }
    if (labelA > labelB) {
      return 1;
    }
    return 0;
  });
}

function getCustomPlatforms(): Platform[] {
  const config = vscode.workspace.getConfiguration('searchOn');
  const customPlatforms: Platform[] =
    config.get<Platform[]>('customPlatforms') || [];
  return customPlatforms;
}

function openSettings() {
  const command = 'workbench.action.openSettings';
  const args = { json: true, query: '@ext:saxc.search-on' };

  vscode.commands.executeCommand(command, args);
}
