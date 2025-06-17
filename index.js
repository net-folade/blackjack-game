let cards = [] // Array to hold the cards
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
//let cardsEl = document.querySelector("#cards-el")
//let messageEl = document.querySelector("#message-el")
//let sumEl = document.querySelector("#sum-el")

// Player information
let player = {
    name: "Kingin",
    chips: 1
}
let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips


// function to get random card
function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1 // Generate a random number between 1 and 13
    if(randomNumber > 10 ) {
        return 10 // If the number is greater than 10, return 10 (face cards -- J, Q, K)
    } else if (randomNumber === 1) {
        return 11 // If the number is 1, return 11 (Ace)
    } else { 
        return randomNumber // Otherwise, return the number itself (2-10)
    }
}

// Function to start the game
function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard] // Array to hold the cards
    sum = firstCard + secondCard
    renderGame()

}

function renderGame() {
    // Initialize the game
    cardsEl.textContent = "Cards: " 
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    } 
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message="Do you want to draw a new card?"
    } else if (sum === 21) {
        message="Wohoo! You've got Blackjack!"
        hasBlackJack = true
    } else {
        message="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message

}

function newCard() {  
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        // 2. Add the new card to the sum variable
        sum += card
        cards.push(card) // Add the new card to the cards array
        // 3. Call startGame()
        renderGame()
    }

}
