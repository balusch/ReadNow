// main.js
const { app, BrowserWindow, Tray, Menu, globalShortcut } = require('electron')
const path = require('path')
const { default: Store } = require('electron-store')

const store = new Store()

let win
let tray

function createWindow() {
  const bounds = store.get('windowBounds') || { width: 1200, height: 800 }

  win = new BrowserWindow({
    width: bounds.width,
    height: bounds.height,
    x: bounds.x,
    y: bounds.y,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: true,
    },
    title: 'ReadNow',
    icon: path.join(__dirname, 'assets', 'icon.png')
  })

  win.loadURL('https://weread.qq.com/')

  win.on('close', () => {
    store.set('windowBounds', win.getBounds())
  })

  // Optional: when minimized, hide to tray instead of closing
  // win.on('minimize', (event) => {
  //   event.preventDefault()
  //   win.hide()
  // })
}

function createTray() {
  tray = new Tray(path.join(__dirname, 'assets', 'icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Show', click: () => win.show() },
    { label: 'Quit', click: () => app.quit() },
  ])
  tray.setToolTip('ReadNow')
  tray.setContextMenu(contextMenu)
}

function registerShortcuts() {
  globalShortcut.register('CommandOrControl+R', () => {
    if (win) win.reload()
  })
  globalShortcut.register('CommandOrControl+Shift+I', () => {
    if (win) win.webContents.openDevTools()
  })
  globalShortcut.register('Escape', () => {
    if (win) win.minimize()
  })
}

app.whenReady().then(() => {
  createWindow()
  createTray()
  registerShortcuts()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

