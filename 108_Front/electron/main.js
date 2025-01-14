import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { exec } from 'child_process';

// הגדרת __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'), // הוספת preload.js
    },
  });

  // טעינת index.html מתוך dist
  mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
}

// פונקציה לפתיחת PuTTY
ipcMain.on('open-putty', (event, data) => {
  const { ip, port } = data;
  const puttyPath = "C:\\Program Files\\PuTTY\\putty.exe"; 

  const command = `"${puttyPath}" -telnet ${ip} ${port}`;

  // הרצת הפקודה
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening PuTTY: ${error.message}`);
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log("PuTTY opened successfully.");
    console.log(`stdout: ${stdout}`);
  });
});

app.whenReady().then(createWindow);

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
