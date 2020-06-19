const {
  app,
  BrowserWindow,
} = require('electron');
import { resolve } from 'path';

if (require('electron-squirrel-startup')) {
  app.quit();
}

const MAIN_URL = process.env.NODE_ENV === 'development' ?
  // eslint-disable-next-line no-undef
  MAIN_WINDOW_WEBPACK_ENTRY : `file:/${resolve(__dirname, './renderer/index.html')}`;

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.maximize();
  mainWindow.loadURL(MAIN_URL);
  mainWindow.webContents.openDevTools();
};

app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow;
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
