
describe('GameController initiation', function () {
    let gameData = {
        player1: null,
        player2: null,
        currentBattleStatus: null,
        gameMode: null,
        gameLevel: "normal",
    };
    let gameController = GameController(gameData);

    it('should have property methods', function () {
        assert.property(gameController, 'playerPickGesture');
        assert.property(gameController, 'battle');
        assert.property(gameController, 'initGame');
        assert.property(gameController, 'newRound');
        assert.property(gameController, 'unlockAdvancedLevel');
    });

    it('should not have direct property of gameData', function () {
        assert.notProperty(gameController, 'gameData');
    });
})

describe('GameController methods tests', function () {
    let gameData = {
        player1: null,
        player2: null,
        currentBattleStatus: null,
        gameMode: null,
        gameLevel: "normal",
    };
    let gameController = GameController(gameData);


    it('GameController.initGame should create two players for gameData, with computerVSComputer monde creates both CatBot players', function () {

        gameController.initGame("computerVSComputer")
        assert.notEqual(gameData.player1, null);
        assert.notEqual(gameData.player2, null);
        assert.equal(gameData.player1.playerType, "computer");
        assert.equal(gameData.player2.playerType, "computer");
    })

    it('GameController.initGame should create two players for gameData, with humanVSComputer mode, player1 should be human type, and player2 be CatBot', function () {
        gameController.initGame("humanVSComputer")
        assert.notEqual(gameData.player1, null);
        assert.notEqual(gameData.player2, null);
        assert.equal(gameData.player1.playerType, "human");
        assert.equal(gameData.player2.playerType, "computer");
    })



    it('GameController.playerPickGesture should set the currentGesture for player1 (by default the human player) ', function () {
        gameController.playerPickGesture("rock")
        assert(gameData.player1.currentGesture, 'rock');
    })

    it('GameController.battle should judge rock-paper-scissor and set correct result to gameData and players properties, the the winner add 1 point to the score', function () {
        let player1Score = gameData.player1.score;
        let player2Score = gameData.player2.score;

        gameController.battle()
        assert.notEqual(gameData.player1.currentBattleStatus, null);
        assert.notEqual(gameData.player2.currentBattleStatus, null);
        assert.notEqual(gameData.currentBattleStatus, null);
        if (gameData.player2.currentGesture === "rock") {
            assert.equal(gameData.player2.currentBattleStatus, "TIE");
            assert.equal(gameData.player1.score, player1Score);
            assert.equal(gameData.player2.score, player2Score);
        }
        else if (gameData.player2.currentGesture === "scissor") {
            assert.equal(gameData.player2.currentBattleStatus, "LOSE");
            assert.equal(gameData.player1.score, player1Score + 1);
            assert.equal(gameData.player2.score, player2Score);
        }
        else {
            assert.equal(gameData.player2.currentBattleStatus, "WIN");
            assert.equal(gameData.player1.score, player1Score);
            assert.equal(gameData.player2.score, player2Score + 1);
        }

    })
    it('GameController.newRound should reset the currentGesture for both players, set their currentBattleStatus to READY, and set gameData.currentBattleStatus back to null', function () {
        gameController.newRound();
        assert.equal(gameData.player1.currentGesture, null);
        assert.equal(gameData.player2.currentGesture, null);
        assert.equal(gameData.player1.currentBattleStatus, 'READY');
        assert.equal(gameData.player2.currentBattleStatus, 'READY');
        assert.equal(gameData.currentBattleStatus, null);
    })
    it('GameController.unlockAdvancedLevel should set gameLevel to "advanced" for players and gameData', function () {
        gameController.unlockAdvancedLevel();
        assert.equal(gameData.player1.gameLevel, "advanced");
        assert.equal(gameData.player2.gameLevel, "advanced");
        assert.equal(gameData.gameLevel, "advanced");
    })

})
