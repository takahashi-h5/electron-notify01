const { app, BrowserWindow, ipcMain } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: __dirname + '/confrage.ico',
    center: true,
    resizable: true,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true
    }
  })
  win.loadFile('index.html')
}
app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
