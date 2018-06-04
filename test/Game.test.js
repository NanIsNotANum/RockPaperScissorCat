
describe('Game initiation', function () {
    let game = Game();
    it('should have two properties: gameController and viewController', function () {
        assert.property(game, 'gameController');
        assert.property(game, 'viewController');
    });
  });

  