/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }
 
    createPhrases() {
        const phrase1 = new Phrase('better late than never');
        const phrase2 = new Phrase('coffee code repeat');
        const phrase3 = new Phrase('you live and learn');
        const phrase4 = new Phrase('all or nothing');
        const phrase5 = new Phrase('oops did i do that');        
        return [phrase1, phrase2, phrase3, phrase4, phrase5];
    }

    getRandomPhrase() {     
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];       
        return phrase;
    }
    
    startGame(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        // ****IMPORTANT LESSON*****//
        this.activePhrase = this.getRandomPhrase();
        
        // const phrase = new Phrase();
        phrase.addPhraseToDisplay();
        return phrase;
    };

    handleInteraction(){
        const qwertyKeys = document.querySelectorAll('.key');
        // console.log(qwertyKeys);
        
        qwertyKeys.forEach( (key) => {
            // console.log(clickedKey);
            key.addEventListener('click', (e) => {
                // letter is the String value Keyed-In
                let letter = e.target.innerHTML;
                phrase.checkLetter(letter);
                e.target.setAttribute('disabled', '');
                // this.checkForWin();
                
                if(phrase.checkLetter(letter)){
                    e.target.classList.add('chosen');  
                    phrase.showMatchedLetter(letter);    
                    this.checkForWin();              
                } else {                    
                    // this.handleInteraction();
                    // this.gameOver();
                    e.target.classList.add('wrong');
                    this.removeLife();
                }
                               
            }); 
          
        });  
       
    }
  
    checkForWin(){
        
        const correctBoxes = document.querySelectorAll('.show');
        const letterBoxes = document.querySelectorAll('.letter');
               
        if( correctBoxes.length === letterBoxes.length ){
            console.log("YOU WIN!!!");
            // let gameWon = true;
            this.gameOver()
            return true;            
        } else {
            console.log("TRY AGAIN!!!");            
            return false;

        }         
    };

    removeLife(){
        const hearts = document.querySelectorAll('li.tries img');
       
        this.missed++;
        
        console.log(this.missed);
        for (let i = 0; i < hearts.length; i++) {
            if( this.missed === 1 ){
                hearts[0].src = '/images/lostHeart.png';
            } else if( this.missed === 2 ){
                hearts[1].src = '/images/lostHeart.png';
            } else if( this.missed === 3 ){
                hearts[2].src = '/images/lostHeart.png';
            } else if( this.missed === 4 ){
                hearts[3].src = '/images/lostHeart.png';
            } else if( this.missed === 5 ){
                hearts[4].src = '/images/lostHeart.png';
                this.gameOver();
            }
        } 
    };

    gameOver(){
        const overlay = document.querySelector('#overlay');
        const message = document.getElementById('game-over-message');
        
        overlay.style.display = 'block';
            
        if(this.missed === 5){
            overlay.classList.remove('start');
            overlay.classList.add('lose');
            message.innerText = "YOU LOSE! Better Luck Next Time!";
            
            this.resetGame();
        } 

        if(this.missed <= 4){ 
            overlay.classList.remove('start');
            overlay.classList.add('win');
            message.innerText = "YOU WIN! Very Good!";
            // location = window.location.reload(true);
            this.resetGame();
        }
    };

    resetGame(){
        // const placeholderUl = document.querySelector('ul');
        const placeholderLi = document.querySelectorAll('.letter');
        const qwertyKeys = document.querySelectorAll('.key');
        const hearts = document.querySelectorAll('li.tries img');

        // Loops through each "LI" and removes all the phrase letters
        placeholderLi.forEach((li) => {
            li.parentNode.removeChild(li);
        });
        // Loops through each "qwertyKeys" and removes all classes
        qwertyKeys.forEach((key) => {
            key.classList.remove('chosen');  
            key.classList.remove('wrong');  
            key.removeAttribute('disabled');
        }); 
       // Loops through each "" and removes all the phrase letters
        hearts.forEach((heart) => {
            heart.src = '/images/liveHeart.png';
        });
  
    }
 
};
