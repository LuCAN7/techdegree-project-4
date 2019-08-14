/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

/**
* Creates phrases for use in game
* and return {array} An array of phrases that could be used in the game
*/
    createPhrases() {
        // Instantiate new Phrase Object for each phrase
        const phrase1 = new Phrase('better late than never');
        const phrase2 = new Phrase('coffee code repeat');
        const phrase3 = new Phrase('you live and learn');
        const phrase4 = new Phrase('all or nothing');
        const phrase5 = new Phrase('oops did i do that');        
        
        return [phrase1, phrase2, phrase3, phrase4, phrase5];
    }

/**
* Selects random phrase from phrases property
* and return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() { 
        // Select a random phrase Object    
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];       
        
        return phrase;
    }
    
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame(){
        const overlay = document.querySelector('#overlay');

        // Remove/ Hide the Start Game overlay;
        overlay.style.display = 'none';
        // ****IMPORTANT LESSON*****//
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
                
        return phrase;
    };

/**
* Handles game interactions by selecting 
* listening to screen kyw clicks and checks for win or remove a life
*/
    handleInteraction(){
        const qwertyKeys = document.querySelectorAll('.key');
            
        qwertyKeys.forEach( (key) => {
            // listen to key clicks and check if it is apart of the activePhrase
            key.addEventListener('click', (e) => {
                // letter is the String value Keyed-In
                let letter = e.target.innerHTML;
                this.activePhrase.checkLetter(letter);
                e.target.setAttribute('disabled', '');                
                // Shows the matchedd letter with activePhrase
                if(this.activePhrase.checkLetter(letter)){
                    e.target.classList.add('chosen');  
                    // Display the correct letter 
                    this.activePhrase.showMatchedLetter(letter);    
                    this.checkForWin();              
                } else {                    
                    e.target.classList.add('wrong');
                    this.removeLife();
                }
                               
            }); 
        });  
       
    }

/**
* Checks for winning move
* and return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin(){        
        const correctBoxes = document.querySelectorAll('.show');
        const letterBoxes = document.querySelectorAll('.letter');
        
        // if the length of the diplayed letters with 'show' class match the length of displayed letters
        if( correctBoxes.length === letterBoxes.length ){
            this.gameOver()

            return true;            
        } else {
                   
            return false;
        }         
    };

/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife(){
        const hearts = document.querySelectorAll('li.tries img');
        
        // increment when checkedletter method is incorrect
        this.missed++;
        // Loop through Hearts images and display lostHeart
        for (let i = 0; i < hearts.length; i++) {
            if( this.missed === 1 ){
                hearts[0].src = 'images/lostHeart.png';
            } else if( this.missed === 2 ){
                hearts[1].src = 'images/lostHeart.png';
            } else if( this.missed === 3 ){
                hearts[2].src = 'images/lostHeart.png';
            } else if( this.missed === 4 ){
                hearts[3].src = 'images/lostHeart.png';
            } else if( this.missed === 5 ){
                hearts[4].src = 'images/lostHeart.png';
                this.gameOver();
            }
        } 
    };

/**
* Displays game over message
* and param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(){
        const overlay = document.querySelector('#overlay');
        const message = document.getElementById('game-over-message');

        // Calls resetGame method to reset game (display and phrase)
        this.resetGame();
         // If game is won in 5 misses add 'win' class and change display message.
        if (this.missed <= 4){ 
            overlay.classList.add('win');
            message.innerText = "YOU WIN! Very Good!";
            overlay.style.display = 'block';
        }
        // If game is lost in 5 misses add 'lose' class and change display message
        if (this.missed === 5){ 
            overlay.classList.add('lose');
            message.innerText = "YOU LOSE! Better Luck Next Time!";
            overlay.style.display = 'block';
        } 
      
    };

/**
* Resets game with new hearts
* and removes all classes added in the game
*/
    resetGame(){
        const placeholderLi = document.querySelectorAll('.letter');
        const qwertyKeys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('li.tries img');

        overlay.classList.remove('start', 'win', 'lose');      
        // Loops through each "LI" and removes all the phrase letters
        placeholderLi.forEach((li) => {
            li.parentNode.removeChild(li);
        });
        // Loops through each "qwertyKeys" and removes all classes
        qwertyKeys.forEach((key) => {
            key.classList.remove('chosen', 'wrong');             
            key.removeAttribute('disabled');
        }); 
       // Loops through each "" and removes all the phrase letters
        hearts.forEach((heart) => {
            heart.src = '/images/liveHeart.png';
        });
  
    }
 
};
