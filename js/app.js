/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const phrase = new Phrase();

let game; 
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
    // console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    game.handleInteraction();
    // phrase.showMatchedLetter();
    
        
});


// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase);
// phrase.addPhraseToDisplay();

// console.log(game.getRandomPhrase());