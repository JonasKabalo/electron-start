import { BrowserWindow } from 'electron';
import { resolve } from 'path';
import logger from '../logger';

const MAIN_URL = process.env.NODE_ENV === 'development' ?
MAIN_WINDOW_WEBPACK_ENTRY : `file:/${resolve(__dirname, './renderer/index.html')}`;

const launchWindow = () => {
  logger.info('Creating main window...');
  const mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
    },
  });

  mainWindow.maximize();
  mainWindow.loadURL(MAIN_URL);
  mainWindow.webContents.openDevTools();
};

export default launchWindow;
