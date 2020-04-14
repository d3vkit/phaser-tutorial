import Phaser from 'phaser'

function Game() {
  let game = new Phaser.Game(800, 600, Phaser.AUTO, '');

  game.state.add('play', {
    preload: () => game.load.image('assets/allacrost_enemy_sprites/skeleton.png'),
    create: () => {
      const skeletonSprite = game.add.sprite(450, 290, 'skeleton')

      skeletonSprite.anchor.setTo(0.5, 0.5)
    },
    render: () => game.debug.text('Adventure Awaits!', 250, 290)
  });

  game.state.start('play')
}

export default Game
