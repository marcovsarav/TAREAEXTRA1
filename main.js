const {app, BrowserWindow} = require('electron')
const { truncate } = require('fs')

function createWindow(){
  const ventana = new BrowserWindow({
    width : 450,
    height : 350,
    webPreferences: {
      nodeIntegration: true
    }

  })
  ventana.loadFile('index.html')
}

app.whenReady().then(createWindow)