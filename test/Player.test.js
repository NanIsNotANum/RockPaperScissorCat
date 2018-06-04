let assert = chai.assert;
describe('Player initiation', function () {
    let player = Player();
    it('should have properties with respective init valuer', function () {
        assert.notPropertyVal(player, 'name', null);
        assert.propertyVal(player, 'gameLevel', 'normal');
        assert.propertyVal(player, 'playerType', 'human');
        assert.propertyVal(player, 'score', 0);
        assert.propertyVal(player, 'currentGesture', null);
        assert.propertyVal(player, 'currentBattleStatus', "READY");

    });
  });


  describe('CatBot initiation and its method', function () {
    let catBot = CatBot();
    it('should have one special method called "catBotSetGesture" and other properties with respective init valuer', function () {
        assert.notPropertyVal(catBot, 'name', null);
        assert.property(catBot, 'catBotSetGesture');
        assert.propertyVal(catBot, 'gameLevel', 'normal');
        assert.propertyVal(catBot, 'playerType', 'computer');
        assert.propertyVal(catBot, 'score', 0);
        assert.propertyVal(catBot, 'currentGesture', null);
        assert.propertyVal(catBot, 'currentBattleStatus', "READY");

    });

    it('CatBot.catBotSetGesture can auto pick gesture within "rock, paper, and scissor" under normal gameLevel', function () {
        for(let i = 0; i<50; i++){
            catBot.catBotSetGesture();
            chai.expect(catBot.currentGesture).to.be.oneOf(["rock", "paper", "scissor"]);
        }
    });

    it('CatBot.catBotSetGesture can auto pick gesture within "rock, paper, scissor, lizard, and spock" under advanced gameLevel', function () {
        catBot.gameLevel = "advanced";    
        for(let i = 0; i<50; i++){
            catBot.catBotSetGesture();
            chai.expect(catBot.currentGesture).to.be.oneOf(["rock", "paper", "scissor", "lizard","spock"]);
        }
    });


  });

  
