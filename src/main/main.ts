import { app, BrowserWindow, Menu } from "electron";
import path from "path";
import http from "http";

const isDev = process.env.NODE_ENV === "development";
let mainWindow: BrowserWindow | null;

function waitForViteWithInterval(url = "http://localhost:3000"): Promise<void> {
  return new Promise((resolve, reject) => {
    const maxAttempts = 100;
    let attempts = 0;

    const interval = setInterval(() => {
      const req = http.get(url, (res) => {
        if (res.statusCode === 200) {
          clearInterval(interval);
          resolve();
        }
      });

      req.on("error", () => {
        attempts++;
        if (attempts >= maxAttempts) {
          clearInterval(interval);
          reject(new Error("Vite dev server not responding after timeout."));
        }
      });

      req.end();
    }, 200);
  });
}

async function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    },
  });

  // mainWindow.webContents.openDevTools();
  if (isDev) {
    await waitForViteWithInterval();

    await mainWindow.loadURL("http://localhost:3000");
    return;
  }

  await mainWindow.loadFile(
    path.join(__dirname, "../../dist/renderer/index.html")
  );
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
  {
    label: "View",
    submenu: [
      {
        label: "Reload",
        accelerator: "CmdOrCtrl+R",
        click: (_, focusedWindow) => {
          if (focusedWindow) focusedWindow.reload();
        },
      },
    ],
  },
]);

Menu.setApplicationMenu(fileMenuOnly);
