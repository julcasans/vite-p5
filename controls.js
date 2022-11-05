import { Pane } from 'tweakpane/dist/tweakpane.js'

export class ControlPanel {
  constructor() {
    this.pane = new Pane()

    this.settingsFolder = this.pane.addFolder({
      title: 'Settings'
    })
    
    const btnSaveCanvas = this.pane.addButton({
      title: 'Save canvas'
    })
    
    btnSaveCanvas.on('click', () => {
      saveCanvas('canvas', 'jpg')
    })
  }

  setParams(params) {
    Object.keys(params).forEach(k => {
      this.settingsFolder.addInput(params, k)  
    })
    
    const btnExportSettings = this.settingsFolder.addButton({
      title: 'Export settings'
    })

    btnExportSettings.on('click', () => {
      const preset = this.pane.exportPreset()
      console.log(preset)
    })
  }
}