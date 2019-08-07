/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        // .toLowerCase();     
    }

    addPhraseToDisplay(){
        let letterBox;

        const phrase = game.activePhrase.phrase;
        console.log(typeof phrase);

        // Splits the phrase into an array of each character
        const lettersInPhrase = phrase.split("");
        const placeholder = document.querySelector('#phrase ul'); 
        // Loop through each letter/item in the array of letter and add classes
        // Also appends to placehoder 'DIV'
        for(let i = 0; i < lettersInPhrase.length; i++){
            letterBox = document.createElement('li');
            letterBox.append(lettersInPhrase[i]);
            if( lettersInPhrase[i].includes(' ') ){
                letterBox.classList.remove('hide','letter');
                letterBox.classList.add('space');                
            } else {
                // Also uses template literals to add letter as a class
                letterBox.classList.add('hide','letter',`${lettersInPhrase[i]}`);
            }
            placeholder.appendChild(letterBox);
        };
              
    };

    checkLetter(letter){
        /*`checkLetter()`: Checks to see if the letter selected by the player 
        matches a letter in the phrase.*/
        const word = game.activePhrase.phrase.split(''); 
       console.log(word);
        if( word.includes(letter) ){
            console.log("RIGHT");
            this.showMatchedLetter(letter);
            return true;
        } else {
            console.log(letter);
            console.log('WRONG');
            return false;
        }      
    };
    
    showMatchedLetter(letter){
        const letterBoxes = document.querySelectorAll('.letter');
       
        console.log(letter);
        for(let i = 0; i < letterBoxes.length; i++){
            
            if(letterBoxes[i].innerHTML === letter){
                letterBoxes[i].classList.remove('hide');
                letterBoxes[i].classList.add('show'); 
                // guess++;                                                                
                // game.checkForWin(guess);
              
            }              
        }
     
    };

    

 };
