
const gestures = ["rock", "paper", "scissor", "lizard", "spock"]
const Player = (name) => {
    let data = {
        gameLevel: "normal",
        name: name || "Guest",
        playerType: "human",
        score: 0,
        currentGesture: null,
        currentBattleStatus: "READY"
    }
    return data
}
const CatBot = (catName) => {
    let data = {
        gameLevel: "normal",
        name: catName,
        playerType: "computer",
        score: 0,
        currentGesture: null,
        currentBattleStatus: "READY"
    }
    return Object.assign(
        data,
        catBotSetGesture(data)
    )
}

const catBotSetGesture = (data) => {
    return {
        catBotSetGesture: () => {
            let gestureNumber = (data.gameLevel === "advanced") ? 5 : 3;
            data.currentGesture = gestures[Math.floor(Math.random() * Math.floor(gestureNumber))]
        }
    }
}
