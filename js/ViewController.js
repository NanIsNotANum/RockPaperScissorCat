const catFaceResult = {
    "WIN": () => {
        //randomly pick winning face
        return Math.floor(Math.random() * 10) % 2 == 0 ? "asset/img/laugh.png" : "asset/img/sexy.png"
    },
    "LOSE": () => {
        //randomly pick losing face
        return Math.floor(Math.random() * 10) % 2 == 0 ? "asset/img/angry.png" : "asset/img/cry.png"
    },
    "TIE": () => {
        //randomly pick tie face
        return Math.floor(Math.random() * 10) % 2 == 0 ? "asset/img/comeon.png" : "asset/img/bored.png"
    },
    "READY": () => {
        //randomly pick ready face
        return Math.floor(Math.random() * 10) % 2 == 0 ? "asset/img/ready.png" : "asset/img/playWithMe.png"
    },
}
const renderFunc = {
    displayElem: (elems) => {
        if (Array.isArray(elems)) {
            elems.map((elem) => {
                elem.classList.remove('is-non-display');
            })
        } else {
            elems.classList.remove('is-non-display');
        }

    },
    undisplayElem: (elems) => {
        if (Array.isArray(elems)) {
            elems.map((elem) => {
                elem.classList.add('is-non-display');
            })
        } else {
            elems.classList.add('is-non-display');
        }
    },
    // Change element value
    changeElementValue: (elem, value) => {
        if (!!elem) {
            elem.innerHTML = value
        }
    },
    // Change image src for cat fact expression 
    changeImageSrc: (elem, value) => {
        if (!!elem) {
            elem.src = value
        }
    }
}


const ViewController = (gameData) => {
    const gameElements = {
        modal: document.getElementById('myModal'),

        gameData: gameData,
        welcomeAndSelectGameModeDiv: document.getElementById('welcomeAndSelectGameModeDiv'),
        gameDiv: document.getElementById('gameDiv'),
        battleButtonAndResultDiv: document.getElementById('battleButtonAndResultDiv'),
        advancedGestureButtonDiv: document.getElementById('advancedGestureButtonDiv'),
        unlockAdvanceLevelButton: document.getElementById('unlockAdvanceLevelButton'),

        humanDiv: document.getElementById('humanDiv'),
        catBot1Div: document.getElementById('catBot1Div'),
        hintText: document.getElementById('hintText'),
        pickGestureHintText: document.getElementById('pickGestureHintText'),
        HowToUnlockAdvancedLevelHintText: document.getElementById('HowToUnlockAdvancedLevelHintText'),

        battleButton: document.getElementById('battleButton'),
        newRoundButton: document.getElementById('newRoundButton'),

        player2NameText: document.getElementById('player2NameText'),
        player2Image: document.getElementById('player2Image'),
        player2ScoreText: document.getElementById('player2ScoreText'),
        player2CurrentGestureText: document.getElementById('player2CurrentGestureText'),

        player1NameText: document.getElementById('player1NameText'),
        player1Image: document.getElementById('player1Image'),
        player1CurrentGestureText: document.getElementById('player1CurrentGestureText'),
        player1ScoreText: document.getElementById('player1ScoreText'),
    }
    return Object.assign(
        {},
        renderForAction(gameElements)
    )
}
const renderForAction = (gameElements) => {
    return {
        renderForAction: (action) => {
            switch (action) {
                case "selectGameMode":
                    renderFunc.undisplayElem(gameElements.welcomeAndSelectGameModeDiv);
                    renderFunc.displayElem(gameElements.gameDiv)
                    if (gameElements.gameData.gameMode === "humanVSComputer") {
                        renderFunc.displayElem([gameElements.humanDiv, gameElements.pickGestureHintText])
                        renderFunc.undisplayElem(gameElements.catBot1Div)
                    }
                    else {
                        renderFunc.undisplayElem([gameElements.humanDiv, gameElements.pickGestureHintText])
                        renderFunc.displayElem([gameElements.battleButton, gameElements.catBot1Div]);
                    }
                    renderFunc.changeElementValue(gameElements.player1ScoreText, `WON: ${gameElements.gameData.player1.score} times!`);
                    renderFunc.changeImageSrc(gameElements.player1Image, catFaceResult[gameElements.gameData.player1.currentBattleStatus]())

                    renderFunc.changeElementValue(gameElements.player1NameText, gameElements.gameData.player1.name);
                    renderFunc.changeElementValue(gameElements.player2NameText, gameElements.gameData.player2.name);

                    renderFunc.changeElementValue(gameElements.player2ScoreText, `WON: ${gameElements.gameData.player2.score} times!`);
                    renderFunc.changeElementValue(gameElements.player2ScoreText, `WON: ${gameElements.gameData.player2.score} times!`);
                    break;

                case "requestSelectGameModeAgain":
                    renderFunc.displayElem([gameElements.welcomeAndSelectGameModeDiv]);
                    renderFunc.undisplayElem([gameElements.gameDiv, gameElements.battleButton, gameElements.newRoundButton, gameElements.unlockAdvanceLevelButton, gameElements.advancedGestureButtonDiv])
                    renderFunc.changeElementValue(gameElements.player1CurrentGestureText, "");
                    renderFunc.changeElementValue(gameElements.player2CurrentGestureText, "");
                    break;

                case "pickGesture":
                    renderFunc.displayElem(gameElements.battleButton);
                    renderFunc.undisplayElem(gameElements.pickGestureHintText)
                    renderFunc.undisplayElem(gameElements.newRoundButton)
                    break;

                case "battle":
                    if (!!gameElements.gameData.player1.currentGesture || gameElements.gameData.gameMode === "computerVSComputer") {
                        renderFunc.changeElementValue(gameElements.player1ScoreText, `WON: ${gameElements.gameData.player1.score} times!`);
                        renderFunc.changeElementValue(gameElements.player1CurrentGestureText, `${gameElements.gameData.player1.name} picked ${gameElements.gameData.player1.currentGesture}`)
                        renderFunc.changeImageSrc(gameElements.player1Image, catFaceResult[gameElements.gameData.player1.currentBattleStatus]())

                        renderFunc.changeElementValue(gameElements.player2ScoreText, `WON: ${gameElements.gameData.player2.score} times!`);
                        renderFunc.changeElementValue(gameElements.player2CurrentGestureText, `${gameElements.gameData.player2.name} picked ${gameElements.gameData.player2.currentGesture}`)
                        renderFunc.changeImageSrc(gameElements.player2Image, catFaceResult[gameElements.gameData.player2.currentBattleStatus]())

                        renderFunc.changeElementValue(gameElements.hintText, gameElements.gameData.currentBattleStatus)
                        renderFunc.displayElem(gameElements.newRoundButton);
                        renderFunc.undisplayElem(gameElements.battleButton)
                        renderFunc.undisplayElem(gameElements.pickGestureHintText)
                        if (gameElements.gameData.gameMode === "humanVSComputer" && gameElements.gameData.player1.score > 4 && gameElements.gameData.gameLevel === "normal") {
                            renderFunc.displayElem(unlockAdvanceLevelButton)
                        }
                    }
                    break;

                case "newRound":
                    renderFunc.displayElem(gameElements.battleButton);
                    renderFunc.undisplayElem(gameElements.newRoundButton)
                    renderFunc.changeImageSrc(gameElements.player2Image, catFaceResult[gameElements.gameData.player2.currentBattleStatus]())
                    renderFunc.changeImageSrc(gameElements.player1Image, catFaceResult[gameElements.gameData.player1.currentBattleStatus]())
                    break;

                case "scoreEnoughForAdvancedLevel":
                    renderFunc.displayElem(gameElements.advancedGestureButtonDiv);
                    break;

                case "unlockAdvancedLevel":
                    renderFunc.displayElem(gameElements.advancedGestureButtonDiv);
                    renderFunc.undisplayElem([HowToUnlockAdvancedLevelHintText, unlockAdvanceLevelButton])
                    break;

                case "backToNormalLevel":
                    renderFunc.undisplayElem(gameElements.advancedGestureButtonDiv);
                    break;

                default:
                    break;
            }
        }
    }
}
