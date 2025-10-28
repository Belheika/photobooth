const { app, BrowserWindow, ipcMain } = require('electron');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 600,
    height: 600,
    frame: false,
    transparent: false,
    webPreferences: {
      sandbox: false,
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWindow.loadFile('src/index.html');

  const devtools = new BrowserWindow();
  mainWindow.webContents.setDevToolsWebContents(devtools.webContents);
  mainWindow.webContents.openDevTools({ mode: 'detach' });
}
/*
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('minimize-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) window.minimize();
});

ipcMain.on('close-window', () => {
  const window = BrowserWindow.getFocusedWindow();
  if (window) window.close();
});
*/

app.whenReady().then(createWindow);