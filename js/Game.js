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
        const qwertyKeys = document.querySelectorAll('.keyrow');
        console.log(qwertyKeys);
        
        qwertyKeys.forEach( (key) => {
            // console.log(clickedKey);
            key.addEventListener('click', (e) => {
                
                // letter is the String value Keyed-In
                phrase.checkLetter(e.target.innerHTML);
                // phrase.checkLetter(clickedKey.innerHTML);
                this.checkForWin(this.removeLife());
                               
            }); 
          
        });
        
       
    }
  
    checkForWin(){
        
        const correctBoxes = document.querySelectorAll('.show');
        const letterBoxes = document.querySelectorAll('.letter');
               
        if(correctBoxes.length === letterBoxes.length){
            console.log("YOU WINNN!!!!");
            return true;
        } else {
            console.log("TRY AGAAAAIN!!!!");
            this.missed++;
            
            if(this.missed === 5){
                console.log("Game Over...");
                // This method is called if game is over
                // gameOver();
            }
            return false;

        }         
    };

    removeLife(){
        const hearts = document.querySelector('li.tries img');
        // let lost = '..\images\lostHeart.png';
        
        console.log(hearts);
        hearts.setAttribute('src', '/images/lostHeart.png');
    

       
    };

};


