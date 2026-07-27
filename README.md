# Copy Filename

Copy a file's basename from the editor tab or file explorer context menu.

## Usage

1. Right-click an editor tab **or** a file in the explorer
2. Choose **Copy Filename**
3. The basename is copied to the clipboard

Examples for `app.config.ts`:

| Setting | Clipboard |
| --- | --- |
| `copyFilename.includeExtension`: `true` (default) | `app.config.ts` |
| `copyFilename.includeExtension`: `false` | `app.config` |

## Settings

Open Settings and search for **Copy Filename**:

- **Copy Filename: Include Extension** — include the file extension when copying

## Install locally

```bash
npm install
npm run compile
npx vsce package
```

Then in Cursor/VS Code: **Extensions → … → Install from VSIX…** and pick the generated `.vsix`.
