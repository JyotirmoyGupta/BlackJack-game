let player = {
    name: "Joe",
    chips: 200
}
let cards = []
let hasBlackJack = false;
let isAlive = false;
let sum = 0
let message = "";
let cardsEl = document.getElementById("cards-el")
let sumEl = document.querySelector("#sum-el")
let messageEl = document.getElementById("message-el")
let playerEl = document.getElementById("player-el")

playerEl.textContent = player.name + ": $" + player.chips

function startGame() {
    isAlive = true
    let firstCard = Math.floor(10*Math.random()+2)
    let secondCard = Math.floor(10*Math.random()+2)
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for(let card = 0; card < cards.length; card += 1) {
        cardsEl.textContent += cards[card] + " "
    }

    sumEl.textContent = "Sum: " + sum

    if(sum < 21) {
        message = "Do you want to draw a new card?"
    }
    else if(sum === 21) {
        hasBlackJack = true;
        message = "Woohoo! You have got BlackJack!"
    }
    else {
        isAlive = false;
        message = "You are out of the game!"
    }
    messageEl.textContent = message
}

function newCard() {

    if(isAlive && !hasBlackJack) {
        console.log("Drawing a new card from the deck!")
        let newCard = Math.floor(10*Math.random()+2);
        cards.push(newCard)
        sum += newCard
        renderGame()
    }
}