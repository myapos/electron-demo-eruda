// import { app, BrowserWindow } from "electron";

// const createWindow = () => {
//   const win = new BrowserWindow({
//     width: 800,
//     height: 600,
//   });

//   win.loadFile("index.html");
//   win.webContents.openDevTools();
// };

// app.whenReady().then(() => {
//   createWindow();
// });

import { app, BrowserWindow } from "electron";
import path from "path";

let mainWindow: BrowserWindow | null;

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  if (process.env.NODE_ENV === "development") {
    // Load Vite dev server URL for hot reload
    mainWindow.loadURL("http://localhost:3000");
    mainWindow.webContents.openDevTools();
  } else {
    // Load the production build
    mainWindow.loadFile(path.join(__dirname, "../../dist/renderer/index.html"));
  }
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
