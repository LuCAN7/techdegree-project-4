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
        const phrase = game.getRandomPhrase();
        // Splits the phrase into an array of each character
        const lettersInPhrase = phrase.split("");
        const placeholder = document.querySelector('#phrase ul'); 
        // Loop through each letter/item in the array of letter and add classes
        // Also appends to placehoder 'DIV'
        for(let i = 0; i < lettersInPhrase.length; i++){
            letterBox = document.createElement('li');
            letterBox.append(lettersInPhrase[i]);
            if( lettersInPhrase[i].includes(' ')){
                letterBox.classList.remove('hide','letter');
                letterBox.classList.add('space');                
            } else {
                // Also uses template literals to add letter as a class
                letterBox.classList.add('hide','letter',`${lettersInPhrase[i]}`);
            }
            placeholder.appendChild(letterBox);
        };
        
        // console.log('PHRASE:', phrase);
        // console.log('ARRAY:', lettersInPhrase);
        // console.log(letterBox);
        // console.log(placeholder);
        
    };

    checkLetter(letter){
        /*`checkLetter()`: Checks to see if the letter selected by the player 
        matches a letter in the phrase.*/
        const word = game.activePhrase.split(''); 
        console.log(letter); 
        if( word.includes(letter) ){
            console.log("GREAT");
            return letter;
            
        }      
                    
    };
    
    // showMatchedLetter(letter){
    //     // letter = this.checkLetter();
    //     // console.log(letter);
    //         letter.classList.remove('hide','letter');
    //         letter.classList.add('show');

    //     return letter;
    // };

 };
