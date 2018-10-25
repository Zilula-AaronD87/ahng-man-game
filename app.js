

var helloWorld = 'Hello World';

var something = helloWorld.split('');
console.log(something);


var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');


var guessesLeft = document.getElementById('guessLeft');
 



var randomWord = Math.floor(Math.random() * words.length)

var getWord = words[randomWord];

var totalGuesses = 10;


var letterSlice = [];

for(var k = 0; k < getWord.length; k++){

var input = getWord.split(' ');

letterSlice.push(input);

} 

console.log(letterSlice);

console.log(getWord);

var wordBlanks = '';


for(var j = 0; j < getWord.length; j++) {
        wordBlanks += '-';
}
console.log(wordBlanks);
