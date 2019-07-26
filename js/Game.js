/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

 class Game {
     constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        // ['all dogs go to heaven','the few the proud the brave','live and learn','did i do that','love hurts'];
        this.activePhrase = null;
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
        
        // const randomItem = this.phrases.map((item)=> {
        //     return item.phrase;
        // })
        // const phrase = randomItem[Math.floor(Math.random() * randomItem.length)];
        // console.log(JSON.stringify(this.phrases));
        const phrase = this.phrases[Math.floor(Math.random() * this.phrases.length)];       
        return phrase;
       
    }
    
    // startGame();
    // handleInteraction();
    // removeLife();
    // checkForWin();
    // gameOver();

};


// //  console.log(game.phrases);
//         //  console.log(this.phrases);
//         let randomPhrase = Math.floor(Math.random() * 5) + 1;
//         // if( randomPhrase = )
//         let pp = game.phrases.filter((phrase) => {
//             return phrase.phrase;
//         });
       
//         console.log(pp)
        
//         for (let i = 0; i < 5; i++) {
//             // const element = array[i];
            
//             console.log(`Phrase ${i} - phrase: ${game.phrases[i].phrase}`);
            
//         }
     
//         // game.phrases.forEach((phrase, index) => {
//         //     console.log(`Phrase ${index} - phrase: ${phrase.phrase}`);
//         // });
//         // return phrase;
    
