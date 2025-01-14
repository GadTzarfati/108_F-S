const { contextBridge, ipcRenderer } = require("electron");

contextBridge.exposeInMainWorld("electron", {
  openPutty: (data) => ipcRenderer.send("open-putty", data),
});
