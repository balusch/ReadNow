# 📚 ReadNow

ReadNow is a beautiful, minimal cross-platform reading app built with [Electron](https://www.electronjs.org/), wrapping the WeRead (微信读书) web experience into a native-like desktop application.

> 🧠 This project was created with the help of [ChatGPT](https://chat.openai.com), including development, packaging, icon design, and system integration.

![screenshot](assets/screenshot.png)

---

## ✨ Features

- 🪟 Remembers window size and position
- 🧭 Custom window title and app icon
- 🔒 Secure Electron sandbox environment
- 📦 Packaged for Linux (AppImage, DEB), macOS (.dmg, .zip)
- 🔄 System tray integration (minimize to tray)
- ⚡ Global keyboard shortcuts:
  - `Ctrl/Cmd + R`: Reload
  - `Ctrl/Cmd + Shift + I`: Open dev tools
  - `Esc`: Minimize window

---

## 🛠️ Development

```bash
# Clone repo
git clone https://github.com/yourusername/readnow.git
git lfs install && git lfs pull
cd readnow

# Install dependencies
npm install

# Run in development
npm start
```

---

## 🚀 Build

> Uses [`electron-builder`](https://www.electron.build/) for cross-platform packaging.

```bash
npm run build
```

### 🐧 Linux output

- `.AppImage`: portable, executable file
- `.deb`: installable package for Debian/Ubuntu/Arch-based systems

### 🍎 macOS (requires macOS host)

- `.dmg`: installable image
- `.zip`: raw bundle

---

## 🖼️ App Icon

App icon is located at:  

```shell
assets/icon.png
```

To integrate with desktop environments on Linux:

1. Copy `assets/readnow.desktop` to `~/.local/share/applications/`
2. Copy icon to `~/.local/share/icons/hicolor/512x512/apps/readnow.png`
3. Run:

   ```shell
   gtk-update-icon-cache ~/.local/share/icons/hicolor
   ```

---

## 📁 File Structure

```shell
readnow/
├── assets/
│   └── icon.png
├── main.js
├── package.json
└── README.md
```

---

## 💡 License

[ISC](./LICENSE)

---

## 👤 Author

Created by [Jianyong Chen](https://chenjianyong.com)  
Email: baluschch@gmail.com  
