// Get players
const players = document.querySelector(".players");
const playerOne = document.querySelector(".player-one");
const playerTwo = document.querySelector(".player-two");
const title = document.querySelector(".title h1");

console.log(playerOne, playerTwo, players, title);

// Set random scores
const randomPlayerOneScore = Math.floor((Math.random() * 6) + 1);
const randomPlayerTwoScore = Math.floor((Math.random() * 6) + 1);

console.log(randomPlayerOneScore, randomPlayerTwoScore);

// Create dices for Player One
    // Dice One
    const playerOneDiceOne = document.createElement("img");
    playerOneDiceOne.setAttribute("src", "./images/dice1.png");
    // Dice Two
    const playerOneDiceTwo = document.createElement("img");
    playerOneDiceTwo.setAttribute("src", "./images/dice2.png");
    // Dice Three
    const playerOneDiceThree = document.createElement("img");
    playerOneDiceThree.setAttribute("src", "./images/dice3.png");
    // Dice Four
    const playerOneDiceFour = document.createElement("img");
    playerOneDiceFour.setAttribute("src", "./images/dice4.png");
    // Dice Five
    const playerOneDiceFive = document.createElement("img");
    playerOneDiceFive.setAttribute("src", "./images/dice5.png");
    // Dice Six
    const playerOneDiceSix = document.createElement("img");
    playerOneDiceSix.setAttribute("src", "./images/dice6.png");

// Create dices for Player Two
    // Dice One
    const playerTwoDiceOne = document.createElement("img");
    playerTwoDiceOne.setAttribute("src", "./images/dice1.png");
    // Dice Two
    const playerTwoDiceTwo = document.createElement("img");
    playerTwoDiceTwo.setAttribute("src", "./images/dice2.png");
    // Dice Three
    const playerTwoDiceThree = document.createElement("img");
    playerTwoDiceThree.setAttribute("src", "./images/dice3.png");
    // Dice Four
    const playerTwoDiceFour = document.createElement("img");
    playerTwoDiceFour.setAttribute("src", "./images/dice4.png");
    // Dice Five
    const playerTwoDiceFive = document.createElement("img");
    playerTwoDiceFive.setAttribute("src", "./images/dice5.png");
    // Dice Six
    const playerTwoDiceSix = document.createElement("img");
    playerTwoDiceSix.setAttribute("src", "./images/dice6.png");

    const error = document.createElement("h2");
    error.innerText = "An error has been found, fix it!"

// Make a connection between the random score and the dices
    // For Player One
    if ( randomPlayerOneScore === 1 ) {
        playerOne.appendChild( playerOneDiceOne )
    } else if ( randomPlayerOneScore === 2 ) {
        playerOne.appendChild( playerOneDiceTwo )
    } else if ( randomPlayerOneScore === 3 ) {
        playerOne.appendChild( playerOneDiceThree )
    } else if ( randomPlayerOneScore === 4 ) {
        playerOne.appendChild( playerOneDiceFour )
    } else if ( randomPlayerOneScore === 5 ) {
        playerOne.appendChild( playerOneDiceFive )
    } else if ( randomPlayerOneScore === 6 ) {
        playerOne.appendChild( playerOneDiceSix )
    } else {
        playerOne.appendChild(error)
    }
    // For Player Two
    if ( randomPlayerTwoScore === 1 ) {
        playerTwo.appendChild( playerTwoDiceOne )
    } else if ( randomPlayerTwoScore === 2 ) {
        playerTwo.appendChild( playerTwoDiceTwo )
    } else if ( randomPlayerTwoScore === 3 ) {
        playerTwo.appendChild( playerTwoDiceThree )
    } else if ( randomPlayerTwoScore === 4 ) {
        playerTwo.appendChild( playerTwoDiceFour )
    } else if ( randomPlayerTwoScore === 5 ) {
        playerTwo.appendChild( playerTwoDiceFive )
    } else if ( randomPlayerTwoScore === 6 ) {
        playerTwo.appendChild( playerTwoDiceSix )
    } else {
        playerTwo.appendChild(error)
    }

// Announce the winner
function winner() {
    if ( randomPlayerOneScore === randomPlayerTwoScore ) {
        title.innerText = "Draw!"
        return "Draw!"
    } else if ( randomPlayerOneScore > randomPlayerTwoScore ) {
        title.innerText = "Salt Has To Drink One Beer!"
        return "Player One Has Won!"
    } else if ( randomPlayerOneScore < randomPlayerTwoScore ) {
        title.innerText = "Shadow Has To Drink One Beer!"
        return "Player Two Has Won"
    } else {
        title.innerText = "There's an error, fix it!"
        return "There's an error, fix it!"
    }
}

winner()
console.log(winner())
