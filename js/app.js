/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */


let game; 
let phrase;
const startButton = document.querySelector('#btn__reset');
startButton.addEventListener('click', () => {
    phrase = new Phrase();
    game = new Game();
    game.startGame();
    // console.log(`Active Phrase - phrase: ${game.activePhrase}`);
    // phrase.showMatchedLetter();
    game.handleInteraction();  
  
});

