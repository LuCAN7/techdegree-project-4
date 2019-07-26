/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// const startBtn = document.querySelector('.start');
// const keyRows = document.querySelector('.keyrow');
// startBtn.addEventListener('click', () =>{});
// keyRows.addEventListener('click', () =>{});


const game = new Game();
// const phrase = new Phrase();


const logPhrase = (phrase) => {
    console.log(`Phrase - phrase: `, phrase.phrase);
};
// game.getRandomPhrase();
// console.log(game.getRandomPhrase());

logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());
logPhrase(game.getRandomPhrase());


 