const UserGameInterface = () => {
    let game = Game();

    return Object.assign(
        {},
        userPickGesture(game),
        userClickBattle(game),
        userClickNewRound(game),
        userBackToNormalLevel(game),
        userSelectGameMode(game),
        userUnlockAdvancedLevel(game),
        userRequestSelectGameModeAgain(game),
        showModal(game),
        closeModal(game),
        log(game)
    )
}

const log = (game) => {
    return {
        log: () => {
            console.log(game)
        }
    }
}
//user interaction functions
const userUnlockAdvancedLevel = (game) => {
    return {
        userUnlockAdvancedLevel: () => {
            game.gameController.unlockAdvancedLevel();
            game.viewController.renderForAction("unlockAdvancedLevel");
        }
    }
}
const userBackToNormalLevel = (game) => {
    return {
        userBackToNormalLevel: () => {
            game.gameController.backToNormalLevel();
            game.viewController.renderForAction("backToNormalLevel");
        }
    }
}
const userPickGesture = (game) => {
    return {
        userPickGesture: (gesture) => {
            game.gameController.playerPickGesture(gesture);
            game.viewController.renderForAction("pickGesture");
        }
    }

}
const userClickBattle = (game) => {
    return {
        userClickBattle: () => {
            game.gameController.battle();
            game.viewController.renderForAction("battle");
        }
    }
}
const userClickNewRound = (game) => {
    return {
        userClickNewRound: () => {
            game.gameController.newRound();
            game.viewController.renderForAction("newRound");
        }
    }
}
const userSelectGameMode = (game) => {

    return {
        userSelectGameMode: (inputGameMode) => {
            game.gameController.initGame(inputGameMode);
            game.viewController.renderForAction("selectGameMode");
        }
    }
}
const userRequestSelectGameModeAgain = (game) => {
    return {
        userRequestSelectGameModeAgain: () => {
            let confirmChangeMode = confirm("Changing mode will reset the record, are you sure you wanna do it?");
            if (confirmChangeMode === true) {
                game.viewController.renderForAction("requestSelectGameModeAgain");
            }
        }
    }
}
const showModal = (game) => {
    return {
        showModal: () => {
            game.viewController.renderForAction("showModal");
        }
    }
}
const closeModal = (game) => {
    return {
        closeModal: () => {
            game.viewController.renderForAction("closeModal");
        }
    }
}
