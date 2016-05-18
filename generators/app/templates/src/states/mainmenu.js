/**
 * Main menu
 * @class MainMenu
 * @extends Phaser.State
 */
export default class MainMenu extends Phaser.State {
  preload() {
    console.debug('preloading main menu');
  }

  create(game) {
    var title = this.add.sprite(game.width/2, game.height/2 - 50, 'game_title')
    title.anchor.set(0.5)

    var button = this.add.sprite(game.width/2, game.height/2 + 50, 'mainmenu_start_btn')
    button.inputEnabled = true
    button.anchor.set(0.5)
    button.events.onInputDown.addOnce(this.startLevel, this)
    game.add.tween(title).from({ y: title.y - 100, alpha: 0}, 750, Phaser.Easing.Bounce.Out, true)
    game.add.tween(button).from({ y: button.y + 100, alpha: 0 }, 750, Phaser.Easing.Bounce.Out, true, 100)
    console.debug('main menu loaded');
  }

  startLevel() {
    this.state.start('Level')
  }
}
