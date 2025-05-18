import { app, BrowserWindow } from "electron";
import path from "path";
import { Menu } from "electron";

const isDev = process.env.NODE_ENV === "development";

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

  if (isDev) {
    mainWindow.loadURL("http://localhost:3000");
  } else {
    mainWindow.loadFile(path.join(__dirname, "../../dist/renderer/index.html"));
  }
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

const fileMenuOnly = Menu.buildFromTemplate([
  {
    label: "File",
    role: "fileMenu",
  },
]);

Menu.setApplicationMenu(fileMenuOnly);
