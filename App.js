const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  
  const win = new BrowserWindow({
    width: width,
    height: height,
    transparent: true,
    frame: false,
    resizable: false,
  })

  win.loadFile('./src/home/index.html');
}

app.whenReady().then(() => {
  createWindow();
})

app.on('window-all-close', function() {
  if(process.platform !== 'darwin') app.quit();
});