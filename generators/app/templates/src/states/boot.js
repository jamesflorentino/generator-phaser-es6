/**
 * @author James Florentino
 *
 t* This is where the initial game setting is set. Use the `assets-config` path
 * to define the assets
 * @class Boot
 * @extends Phaser.State
 */
export default class Boot extends Phaser.State {
  init() {
    this.input.maxPointers = 1
    //this.stage.disableVisibilityChange = true

    if (this.game.device.desktop)
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.setMinMax(480, 260, 1024, 768)
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
    }
    else
    {
      this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
      this.scale.setMinMax(480, 260, 1024, 768)
      this.scale.pageAlignHorizontally = true
      this.scale.pageAlignVertically = true
      this.scale.forceOrientation(true, false)
    }
  }

  preload() {
    this.load.json('assets-config', './assets.json')
  }

  create() {
    this.state.start('Preload')
  }
}
