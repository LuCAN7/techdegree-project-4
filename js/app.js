/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game; 
const startButton = document.querySelector('#btn__reset');
const qwertyKeys = document.querySelector('#qwerty');

// Listen for start button click to instantiate the game Object
startButton.addEventListener('click', () => {
    // Instantiate a new Game Object
    game = new Game();
    game.startGame();        
  
});
            
// listen to key clicks and invoke handleInteraction() method
qwertyKeys.addEventListener('click', (e) => {
    let key = e.target;
    if(key.className === 'key'){
        game.handleInteraction(key);  
    }
        
}); 
