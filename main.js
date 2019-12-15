const { app, BrowserWindow, Menu, ipcMain } = require('electron');

const OPEN_DEV_TOOLS_AT_STARTUP = true;

const Store = require('electron-store');
const store = new Store();

const { buildMenu } = require('./menu');

let mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,

    webPreferences: {
      nodeIntegration: true
    },

    icon: 'icon.png'
  });

  if (OPEN_DEV_TOOLS_AT_STARTUP) {
    mainWindow.openDevTools({ mode: 'detach' });
  }

  const menu = buildMenu(app, store, mainWindow);

  Menu.setApplicationMenu(menu);

  mainWindow.loadFile('public/index.html');

  mainWindow.webContents.once('dom-ready', () => {
    mainWindow.on('will-resize', (e, bounds) => {
      store.set('windowSize', JSON.stringify(bounds));
    });
  });

  mainWindow.on('closed', function () {
    mainWindow = null
  });
}

app.on('ready', createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

