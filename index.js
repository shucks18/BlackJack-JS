let player = {
    name: "player",
    chips: 145
}
let cards = [] // array - ordered list of item
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" +  player.chips


function getRandomCard() {
    // if the number is 1, return 11
    // if number is 11-13 return 10
    let randomNumber = Math.floor( Math.random()*13 + 1 ); 
    if (randomNumber > 10 ) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}
console.log(getRandomCard)

function startGame() {
    // first and second card should be generated here
    // cards and sum are also to be assigned here
    isAlive = true;
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards.push(firstCard, secondCard);
    sum = firstCard + secondCard;
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    // create a for loop that renders out all the cards instead of just two
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum:" + sum;
    if (sum < 21 ) {
        message = "Do you want to draw a new card";
    } else if ( sum === 21) {
        message = "Congrats!"
        hasBlackJack = true;
    } else {
        message = "you lose";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    // allow player to get new card if player IS alive and no blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard()
        sum += card;
        cards.push(card)
        renderGame()
    }
}
