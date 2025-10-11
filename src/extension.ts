import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand("search-on.search", async () => {
      await searchOn();
    })
  );
}

export function deactivate() {}

interface Platform {
  label: string;
  url: string;
}

async function searchOn() {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const selectedText = editor.document.getText(editor.selection);

    let platforms: Platform[] = [];

    platforms.push(...getSearchPlatforms());
    platforms.push(...getCustomPlatforms());

    platforms = sortPlatformsByLabel(platforms);

    const pick = await vscode.window.showQuickPick(platforms, {
      placeHolder: "Select a search platform",
    });
    if (pick) {
      const searchUrl = pick.url + encodeURIComponent(selectedText);
      vscode.env.openExternal(vscode.Uri.parse(searchUrl));
    }
  }
}

function getSearchPlatforms(): Platform[] {
  let platforms: Platform[] = [];

  const config = vscode.workspace.getConfiguration("searchOn");

  if (config.get<boolean>("google")) {
    platforms.push({
      label: "Google",
      url: "https://www.google.com/search?q=",
    });
  }

  if (config.get<boolean>("gitHub")) {
    platforms.push({ label: "GitHub", url: "https://github.com/search?q=" });
  }

  if (config.get<boolean>("MDN")) {
    platforms.push({
      label: "MDN",
      url: "https://developer.mozilla.org/en-US/search?q=",
    });
  }

  if (config.get<boolean>("reddit")) {
    platforms.push({
      label: "Reddit",
      url: "https://www.reddit.com/search?q=",
    });
  }

  if (config.get<boolean>("stackOverflow")) {
    platforms.push({
      label: "Stack Overflow",
      url: "https://stackoverflow.com/search?q=",
    });
  }

  if (config.get<boolean>("wikipedia")) {
    platforms.push({
      label: "Wikipedia",
      url: "https://de.wikipedia.org/w/index.php?search=",
    });
  }

  if (config.get<boolean>("youTube")) {
    platforms.push({
      label: "YouTube",
      url: "https://www.youtube.com/results?search_query=",
    });
  }

  if (config.get<boolean>("NPM")) {
    platforms.push({ label: "NPM", url: "https://www.npmjs.com/search?q=" });
  }

  if (config.get<boolean>("nuGet")) {
    platforms.push({ label: "NuGet", url: "https://www.nuget.org/packages?q=" });
  }

  if (config.get<boolean>("microsoftLearn")) {
    platforms.push({ label: "Microsoft Learn", url: "https://learn.microsoft.com/en-us/search/?terms=" });
  }

  if (config.get<boolean>("dockerHub")) {
    platforms.push({ label: "Docker Hub", url: "https://hub.docker.com/search?q=" });
  }

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
  const config = vscode.workspace.getConfiguration("searchOn");
  const customPlatforms: Platform[] =
    config.get<Platform[]>("customPlatforms") || [];
  return customPlatforms;
}
