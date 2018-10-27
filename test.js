
var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');
var userInput = document.getElementById('userInput');
var countGuess = document.getElementById('guessesLeft');

var remainingGuess = 12;
countGuess.innerHTML = remainingGuess;

//console log user input
console.log('testing user input var', userInput.value);


// get random word from words.js
var randomWord = Math.floor(Math.random() * words.length);
var getWord = words[randomWord];

console.log('random word', getWord);
//breaks up word into array of strings per character
var input = getWord.split('');

// puts '-' as length of random word
var wordBlanks = [];
for(var j = 0; j < getWord.length; j++) {
    wordBlanks[j] = '-';
}

console.log('blank string', wordBlanks);

console.log('word array', input);
//wordBlanks[1]= wordBlanks;

var joinedBlanks = wordBlanks.join('');

//console log join blanks
console.log('joined blanks to be replaced', joinedBlanks);

var guessed = [];
function checkGuess() {
    //var guess = document.getElementById('userInput').value;
    //guessed.push(guess);
    //console.log('text box input', userInput.value);
    //console log user input
    console.log('testing user input var', userInput.value);

    for(var i = 0; i < getWord.length; i++){

        if(input[i] === userInput.value) {
            wordBlanks[i] = userInput.value;
            guessed.push(userInput);
	
        }
        else {
            remainingGuess = remainingGuess - 1;
        }    

    }console.log('updated array', wordBlanks);
}

console.log('final result', wordBlanks);