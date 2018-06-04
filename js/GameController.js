
const unlockNextLevelRequirementScore = 5;
const winTable = {
    "rock": ["scissor", "lizard"], //rock beats scissor and lizard, the following follows the same logic
    "paper": ["rock", "spock"],
    "scissor": ["paper", "lizard"],
    "lizard": ["paper", "spock"],
    "spock": ["scissor", "rock"]
}
const GameController = (gameData) => {
    return Object.assign(
        {},
        battle(gameData),
        initGame(gameData),
        unlockAdvancedLevel(gameData),
        backToNormalLevel(gameData),
        playerPickGesture(gameData),
        newRound(gameData),
    )
}

const initGame = (gameData) => {
    return {
        initGame: (inputGameMode) => {
            if (inputGameMode === "humanVSComputer") {
                gameData.player1 = Player(prompt("Who is playing with CatBot?"));
                gameData.player2 = CatBot("King Meow");
                gameData.currentBattleStatus = null;
                gameData.gameMode = "humanVSComputer";
                gameData.gameLevel = "normal";
            }
            else {
                gameData.player1 = CatBot("Lord");
                gameData.player2 = CatBot("Duke FurBall");
                gameData.currentBattleStatus = null;
                gameData.gameMode = "computerVSComputer";
                gameData.gameLevel = "normal";
            }
        }
    }
}
const battle = (gameData) => {
    return {
        battle: () => {
            //by default player2 is always CatBot computer, so only need to check if player1 needs to generate gesture by itself
            if (!gameData.player1.currentGesture && gameData.player1.playerType === "human") {
                alert("Please pick a gesture, than click to Battle")
            }
            else {
                if (gameData.player1.playerType === "computer") {
                    gameData.player1.catBotSetGesture();
                }
                gameData.player2.catBotSetGesture();

                let player1Gesture = gameData.player1.currentGesture;
                let player2Gesture = gameData.player2.currentGesture;

                if (player1Gesture === player2Gesture) {
                    gameData.player1.currentBattleStatus = "TIE";
                    gameData.player2.currentBattleStatus = "TIE";
                    gameData.currentBattleStatus = "TIE GAME";
                }
                else {
                    //case: Player1 beats player2
                    if (winTable[player1Gesture].indexOf(player2Gesture) !== -1) {
                        gameData.player1.score += 1;
                        gameData.player1.currentBattleStatus = "WIN";
                        gameData.player2.currentBattleStatus = "LOSE";

                        if (gameData.gameMode === "humanVSComputer") {
                            gameData.currentBattleStatus = "YOU WIN!"
                        }
                        else {
                            gameData.currentBattleStatus = `${gameData.player1.name}'s ${gameData.player1.currentGesture} beats ${gameData.player2.name}'s ${gameData.player2.currentGesture}`
                        }

                    }
                    //case: Player1 loses to player2
                    else {
                        gameData.player2.score += 1;
                        gameData.player2.currentBattleStatus = "WIN";
                        gameData.player1.currentBattleStatus = "LOSE";
                        if (gameData.gameMode === "humanVSComputer") {
                            gameData.currentBattleStatus = "YOU LOSE!"
                        }
                        else {
                            gameData.currentBattleStatus = `${gameData.player1.name}'s ${gameData.player1.currentGesture} loses to ${gameData.player2.name}'s ${gameData.player2.currentGesture}`;
                        }

                    }
                }
            }

        }
    }
}

const unlockAdvancedLevel = (gameData) => {
    return {
        unlockAdvancedLevel: () => {
            gameData.gameLevel = "advanced";
            gameData.player1.gameLevel = "advanced";
            gameData.player2.gameLevel = "advanced";
        }
    }
}
const backToNormalLevel = (gameData) => {
    return {
        backToNormalLevel: () => {
            gameData.gameLevel = "normal";
            gameData.player1.gameLevel = "normal";
            gameData.player2.gameLevel = "normal";
        }
    }
}
const newRound = (gameData) => {
    return {
        newRound: () => {
            gameData.player1.currentGesture = null;
            gameData.player2.currentGesture = null;
            gameData.player1.currentBattleStatus = "READY";
            gameData.player2.currentBattleStatus = "READY";
            gameData.currentBattleStatus = null
        }
    }
}
const playerPickGesture = (gameData) => {
    return {
        playerPickGesture: (gesture) => {
            gameData.player1.currentGesture = gesture
        }
    }

}



