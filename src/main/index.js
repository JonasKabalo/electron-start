const {
  app,
  BrowserWindow,
} = require('electron');
// import { resolve } from 'path';
import logger from './logger';
import createMainWindow from './windows/index';
// import isDev from 'electron-is-dev';

if (require('electron-squirrel-startup')) {
  app.quit();
}
let windowManager;

app.on('ready', () => {
  logger.info('App ready. Beginning session and window management...');
  createMainWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    windowManager.openMainWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and import them here.
