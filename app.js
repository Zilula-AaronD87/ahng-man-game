
var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');
var userInput = document.getElementById('userInput');
var userInput2 = userInput.value;
console.log(userInput2);

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

function resetGame() {
document.getElementById('myForm').reset();
}

if(3>2){ 
    userMessage.textContent = 'You win 3>2';
}
else {
    userMessage.textContent = 'Loss';
}
