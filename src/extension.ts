import * as path from "node:path";
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext): void {
  const disposable = vscode.commands.registerCommand(
    "copyFilename.copy",
    async (uri?: vscode.Uri) => {
      const resource =
        uri ?? vscode.window.activeTextEditor?.document.uri;

      if (!resource) {
        vscode.window.showWarningMessage("No file available to copy filename from.");
        return;
      }

      const basename = path.basename(resource.fsPath || resource.path);
      if (!basename) {
        vscode.window.showWarningMessage("Could not determine filename.");
        return;
      }

      const includeExtension = vscode.workspace
        .getConfiguration("copyFilename")
        .get<boolean>("includeExtension", true);

      const filename = includeExtension
        ? basename
        : path.parse(basename).name;

      await vscode.env.clipboard.writeText(filename);
    },
  );

  context.subscriptions.push(disposable);
}

export function deactivate(): void {}
