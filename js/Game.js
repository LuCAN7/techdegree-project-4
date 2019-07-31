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
        const phrase1 = new Phrase('all dogs go to heaven');
        const phrase2 = new Phrase('the few the proud the brave');
        const phrase3 = new Phrase('live and learn');
        const phrase4 = new Phrase('love hurts');
        const phrase5 = new Phrase('did i do that');
        
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
        const qwertyKeys = document.querySelectorAll('button.key');
            
        qwertyKeys.forEach( (clickedKey) => {
            clickedKey.addEventListener('click', (e) => {
                let letter = clickedKey.innerHTML;
                // letter is the String value Keyed-In
                console.log(letter);
                // Return String value of letter
                return letter;
            }); 
              
        });
        
    }
  
    // removeLife();
    // checkForWin();
    // gameOver();

};


