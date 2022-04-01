let hands = ["rock", "paper", "scissor"]

// Create a function that returns a random item from the array

function getRandomHands() {
    let randomHands = Math.floor(Math.random() * 3)
    return hands[randomHands]

}

console.log(getRandomHands())