/**
 * Preloads all assets here
 * @class Preload
 * @extends Phaser.State
 */

export default class Preload extends Phaser.State {
  preload(game) {
    var config = game.cache.getJSON('assets-config')
    if ('object' === typeof config) {
      if (config.images instanceof Array) {
        this.loadImages(config.images)
      }
    }
  }

  loadImages(images) {
    images.forEach((r) => this.load.image(r[0], r[1]))
  }

  create(game) {
    game.state.start('Intro')
  }
}
