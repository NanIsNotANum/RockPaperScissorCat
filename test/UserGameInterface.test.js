
describe('UserGameInterface initiation', function () {
    let userGameInterface = UserGameInterface();

    it('should have property methods', function () {
        assert.property(userGameInterface, 'userPickGesture');
        assert.property(userGameInterface, 'userClickBattle');
        assert.property(userGameInterface, 'userClickNewRound');
        assert.property(userGameInterface, 'userBackToNormalLevel');
        assert.property(userGameInterface, 'userSelectGameMode');
        assert.property(userGameInterface, 'userUnlockAdvancedLevel');
        assert.property(userGameInterface, 'userRequestSelectGameModeAgain');
    });
})

describe('UserGameInterface methods tests', function () {
    let userGameInterface = UserGameInterface();
    it('GameController.userUnlockAdvancedLevel should ', function () {
        userGameInterface.userUnlockAdvancedLevel();
     
    })

    

})
