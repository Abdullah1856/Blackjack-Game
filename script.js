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



/* Arrays */

/*
let details = [
    "Front-End Developer",
    "Wordpress Developer",
    "Jr. Shopify",
    "HTML5 / CSS3 / Boostrap",
    "Github",
    "Photoshop"
]

console.log(details[0]);
console.log(details[2]);
console.log(details[5]);


let mySelf = ["Abdullah Bin Arshad", 20, true]
console.log(mySelf[0]);
console.log(mySelf[1]);
console.log(mySelf[2]);



let messages = ["Hello, you good", "Yeah I am good", "And what about you"]
let newMessage = "Same here!"
messages.push(newMessage)
console.log(messages);
messages.pop()
console.log(messages);
var removed = messages.splice(-1);
console.log(messages);
*/

/* Counts
for ( let count = 10; count < 21; count += 1 ) {
    console.log(count);
}

*/


/* Counts 
for ( let i = 10; i < 101; i += 10 ) {
    console.log(i);
 }  
 */

/* loop length method 
let messaging = ["Hello", "Hi", "What's up?", "Dead hotness here!", "Ahhhhahha"]
for (let count = 0 ; count < messaging.length; count += 1 ) {
   console.log(messaging[count]);
}
*/

/*
let crd = [1, 2, 3]
for (let crdDisplay = 0; crdDisplay < crd.length; crdDisplay ++ ) {
    console.log(crd[crdDisplay]);
}
*/

/*

let message = ["Hi", "Bye", "Ahhhahah"]

let messageEl = document.getElementById("message-el")

for ( let messaging = 0; messaging < message.length; messaging ++ ){
    messageEl.textContent += message[messaging] + " "
}

*/

/* Returns */
/*
let player1Time = 102
let player2Time = 107

function raceTime() {
    return player1Time + player2Time
}

let totalTime = raceTime()
console.log(totalTime);
*/

/*


/*
let randomNumber = Math.floor( Math.random() * 6 ) + 1
console.log(randomNumber)
*/

/*

function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1
}

let randomNumbers = rollDice()
console.log(randomNumbers);

*/

/*
function rollDice() {
    return Math.floor( Math.random() * 6 ) + 1
}

let dice = rollDice()
console.log(dice);
*/

let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message = ""
message = "We're logging out"
let sumEl = document.getElementById("sum")
let messageEl = document.getElementById("message")
let cardEl = document.getElementById("cards")



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
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
}

