let player = {
    name: "Abdullah Bin Arshad",
    chips: 145
}
let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = []
let sum = 0
let hasBlackjack = false
let isAlive = false
let message = ""
message = "We're logging out"
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message")
let cardEl = document.getElementById("cards")
let playerel = document.getElementById("player-el")
playerel.innerText = player.name + ": $" + player.chips



function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber == 1) {
        return 11
    } else {
        return randomNumber
    }
}
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

function renderGame() {

    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: "
    for (let getCards = 0; getCards < cards.length; getCards++) {
        cardEl.textContent += cards[getCards] + " "
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Whooo! You've got Blackjack"
        hasBlackjack = true
    } else {
        message = "You are out of the game"
        isAlive = false
    }
    messageEl.innerText = message
}

function newCard() {
    if (isAlive === true && hasBlackjack === false) {
        let card = getRandomCard()
        sum += card
        cards.push(card)
        renderGame()
    }
}

