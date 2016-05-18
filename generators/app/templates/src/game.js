/**
 * The default entry point
 */
import Boot from './states/boot'
import Preload from './states/preload'
import Intro from './states/intro'
import MainMenu from './states/mainmenu'
import Level from './states/level'

 var game = new Phaser.Game(480, 720, Phaser.AUTO)
 game.state.add('Boot', Boot, true)
 game.state.add('Preload', Preload)
 game.state.add('Intro', Intro)
 game.state.add('MainMenu', MainMenu)
 game.state.add('Level', Level)
