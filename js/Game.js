'use strict'


const Game = () => {
    let gameData = {
        //gameStage: "select-game-mode-stage", // should only be select-game-mode-stage(by default), game-stage, adcan-game-stage

        //viewController is used to apply is the components in the game should be shown or hidden
        // by default the the player1 represents human user when user-vs-computer mode is applied, with computer-vs-computer mode, player1 is computer
        player1: null,
        player2: null,
        currentBattleStatus: null,
        // should be only user-vs-computer or computer-vs-computer
        gameMode: null,
        gameLevel:"normal",
    };
    return Object.assign(
        {},
        { gameController: GameController(gameData) },
        { viewController: ViewController(gameData) },

    )
}


