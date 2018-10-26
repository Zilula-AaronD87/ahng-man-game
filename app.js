
var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');
var userInput = document.getElementById('userInput');

var guessesLeft = document.getElementById('guessLeft');
 


var randomWord = Math.floor(Math.random() * words.length)

var getWord = words[randomWord];

var totalGuesses = 10;



var letterSlice = [];

var input = getWord.split('');

letterSlice.push(input);


console.log(letterSlice);

console.log(getWord);

var wordBlanks = '';


for(var j = 0; j < getWord.length; j++) {
        wordBlanks += '-';
}
console.log(wordBlanks);

wordPrompt.innerHTML = wordBlanks ;
