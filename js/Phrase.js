/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {
    constructor(phrase) {
        this.phrase = phrase;
        // .toLowerCase();     
    };

/**
* Display phrase on game board
*/
    addPhraseToDisplay(){
        const phrase = game.activePhrase.phrase; 
        const placeholder = document.querySelector('#phrase ul'); 
        // Splits the phrase into an array of each character
        const lettersInPhrase = phrase.split("");
        let letterBox;

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
    
/**
* Checks if passed letter is in phrase
* and param (string) letter - Letter to check
*/
    checkLetter(letter){
        /*`checkLetter()`: Checks to see if the letter selected by the player 
        matches a letter in the phrase.*/
        const phraseLetters = game.activePhrase.phrase.split('');

        // validates the phrase letters include in the new Array of letters
        if( phraseLetters.includes(letter) ){
            
            return true;
        } else {
          
            return false;
        }      
    };
    
/**
* Displays passed letter on screen after a match is found
* and param (string) letter - Letter to display
*/ 
    showMatchedLetter(letter){
        const letterBoxes = document.querySelectorAll('.letter');
        
        for(let i = 0; i < letterBoxes.length; i++){
            
            if(letterBoxes[i].innerHTML === letter){
                letterBoxes[i].classList.remove('hide');
                letterBoxes[i].classList.add('show');        
            }              
        };   
    };

 };
