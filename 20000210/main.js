const { app, BrowserWindow } = require('electron')
const { ipcMain } = require('electron')

function ventanaPrincipal(){

  const ventana = new BrowserWindow({
    width: 500,
    height: 300,
    webPreferences: ({
      nodeIntegration: true
    })
  })

  ventana.loadFile('./formulario.html')
}

app.whenReady().then(ventanaPrincipal)

ipcMain.on('error-formualrio', function(event, args){
  console.log(event)
  console.log(args)
})

