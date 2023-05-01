// This is the js file I wrote after I watched the solution video from App Brewery Bootcamp.
// This is not the same solution from App Brewery Bootcamp, in fact,  is pretty different from their solution.
// I just used their solution as inspiration to create this file.

// To make this script work, don't forget to uncomment the <img> and <script> tags from the index.html and comment the first <script> tag.

 // Create Random Scores for both players
 const randomScoreOne = Math.floor(Math.random() * 6 ) + 1;
 const randomScoreTwo = Math.floor(Math.random() * 6 ) + 1;

 console.log(randomScoreOne, randomScoreTwo);

 // Display the right image for the random score
     // For Player One
     const dicePlayerOne = document.querySelectorAll("img")[0];
     const srcAttributeOne = `./images/dice${randomScoreOne}.png`;
     dicePlayerOne.setAttribute("src", srcAttributeOne);
     // For Player Two
     const dicePlayerTwo = document.querySelectorAll("img")[1];
     const srcAttributeTwo = `./images/dice${randomScoreTwo}.png`;
     dicePlayerTwo.setAttribute("src", srcAttributeTwo);

 // The logic of the winner
 if ( randomScoreOne === randomScoreTwo ) {
     document.querySelector("h1").innerText = "🍺Draw!🍺"
 } else if ( randomScoreOne > randomScoreTwo ) {
     document.querySelector("h1").innerText = "🍺 Salt Wins A Beer"
 } else if ( randomScoreOne < randomScoreTwo ) {
     document.querySelector("h1").innerText = " Shadow Wins A Beer 🍺"
 } else { document.querySelector("h1").innerText = "There's an error, fix it!"}
