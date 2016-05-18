/**
 * @author James Florentino
 * Intro animation for the game. Show the studio name, sponsors etc.
 * @class Intro
 * @extends Phaser.State
 */
export default class Intro extends Phaser.State {
  create(game) {
    var logo = this.add.sprite(game.width/2, game.height/2, 'studio_logo')
    logo.anchor.set(0.5)
    logo.alpha = 0
    game.add.tween(logo)
      .to({ alpha: 1 }, 500, 'Linear')
      .to({ alpha: 0 }, 500, 'Linear', false, 1000)
      .start()
      .onComplete.addOnce(this.loadMainMenu, this)
  }

  loadMainMenu() {
    this.state.start('MainMenu')
  }
}
