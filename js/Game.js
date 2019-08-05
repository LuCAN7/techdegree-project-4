/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        // ['all dogs go to heaven','the few the proud the brave','live and learn','did i do that','love hurts'];
        this.activePhrase = this.getRandomPhrase();
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
        return phrase.phrase;
       
    }
    
    startGame(){
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.getRandomPhrase();
        // const phrase = new Phrase();
        phrase.addPhraseToDisplay();
        // return phrase.phrase;
    };

    handleInteraction(){
        const qwertyKeys = document.querySelectorAll('#qwerty');
        // const qwertyKeyz = document.querySelectorAll('.keyrow');
        console.log(qwertyKeys);
        // console.log(qwertyKeyz);
        qwertyKeys.forEach( (key) => {
            // console.log(clickedKey);
            key.addEventListener('click', (e) => {
                // letter is the String value Keyed-In
                
                phrase.checkLetter(e.target.innerHTML);
                // phrase.checkLetter(clickedKey.innerHTML);
                               
            }); 
          
        });
       
    }
  
    // checkForWin(guess){
    //     // phrase.showMatchedLetter()
    //     // guess;
    //     const letterBoxes = document.querySelectorAll('.letter');
    //     // console.log(letterBoxes.length);
    //     if(guess === letterBoxes.length){
    //         console.log("YOU WINNN!!!!");
    //         return true;
    //     } else {
    //         console.log("TRY AGAAAAIN!!!!");
    //         return false;

    //     }
    // };
    // removeLife();
    // gameOver();

};


