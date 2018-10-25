

var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');


var guessesLeft = document.getElementById('guessLeft');
 

var totalGuesses = 10;

if()
    for(var i = 0; i < totalGuesses; i) {
        totalGuesses = totalGuesses - 1;
        console.log(totalGuesses);

    }
}

var randomWord = Math.floor(Math.random() * words.length)

var getWord = words[randomWord];


console.log(getWord);

var wordBlanks = '';


for(var j = 0; j < getWord.length; j++) {
        wordBlanks += '-';
}
console.log(wordBlanks);
