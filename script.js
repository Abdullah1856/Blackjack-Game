/*
let num1 = 8
let num2 = 2
let sumTxt = "Sum: "
document.getElementById("no1").textContent = num1
document.getElementById("no2").textContent = num2

let result1 = document.getElementById("sum") 
function add () {
    let result = num1 + num2
    result1.textContent = "Sum: " + result
}

let result2 = document.getElementById("sum")
function subtract () {
    let result = num1 - num2
    result1.textContent = "Sum: " + result
}

let result3 = document.getElementById("sum")
function divide () {
    let result = num1 / num2
    result3.innerText = "Sum: " + result
}

let result4 = document.getElementById("sum")
function multiply () {
    let result = num1 * num2
    result4.textContent = "Sum: " + result
}
*/

let firstCard = 10
let secondCard = 1
let card = 10
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
message = "We're logging out"
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message")
let cardEl = document.getElementById("cards")

function startGame() {
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
    sumEl.textContent = "Sum: " + sum
    cardEl.textContent = "Cards: " + firstCard + " " + secondCard
}

function newCard() {
    sum += card
    startGame()
}

