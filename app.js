
var letterUsed = document.getElementById('letterUsed');
var wordPrompt = document.getElementById('wordPrompt');
var userMessage = document.getElementById('userMessage');
var userInput = document.getElementById('userInput');
// var userInput2 = userInput.value;
// console.log(userInput2);
console.log(userInput);

var countGuess = document.getElementById('guessesLeft');
 

// get random word from words.js
var randomWord = Math.floor(Math.random() * words.length)
var getWord = words[randomWord];
//breaks up word into array of strings per character
var letterSlice = [];
var input = getWord.split('');
letterSlice.push(input);

//guesses display 
var remainingGuess = 12;
countGuess.innerHTML = remainingGuess;

// puts '-' as length of random word
var wordBlanks = '';
for(var j = 0; j < getWord.length; j++) {
    wordBlanks += '-';
}

wordPrompt.innerHTML = wordBlanks ;

var guessed = [];

function checkGuess() {
    var guess = document.getElementById('userInput').value;
    guessed.push(guess);
    console.log(guess);
    console.log(guessed);
}


// user message
if(3>2){ 
    userMessage.textContent = 'You win 3>2';
}
else {
    userMessage.textContent = 'Loss';
}

function submit() {

}

function resetGame() {
    userInput.textContent = '';
    countGuess = 12;
    userMessage.textContent = '';
    
}




// var currentWord = document.getElementById('currentWord');
// var lettersUsed = document.getElementById('lettersGuessed');
// var countGuess = document.getElementById('guessesLeft');
// var gameMessage = document.getElementById('userMessage');
// var displayMessage = document.getElementById('displayMessage');


// var wordList = ['bananas', 'grapes', 'pie', 'brownies'];
// var lettersGuessed = [];
// var selectedWord = [];

// var pick = Math.floor(Math.random() * wordList.length);
// var wordChoice = wordList[pick].toLowerCase();
// console.log(wordChoice);

// function pickAWord() {
//     countGuess.innerHTML = remainingGuess;
//     var position = wordList.indexOf(wordList[pick]);
//     wordList.splice(position, 1);
//     for(var i = 0; i < wordChoice.length; i++) {
//         selectedWord.push('-');
//     }
//     currentWord.innerHTML = selectedWord;
// }

// function checkUserInput(userInput) {
//     for (var j = 0; j < wordChoice.length; j++) {
//         if (wordChoice[j] === userInput) {
//             selectedWord.splice(j, 1, userInput);
//         }
//     }
//     currentWord.innerHTML = selectedWord;
//     if (selectedWord.join('') === wordChoice) {
//         gameMessage.innerHTML = 'You win!';
//     }
// }


// // document.onkeyup = function (event) {
// //     gameMessage.innerHTML = '';
// //     var userChoice = ((String.fromCharCode(event.keyCode))).toLowerCase();
// //     if (lettersGuessed.indexOf(userChoice) === -1) {
// //         lettersGuessed.push(userChoice);
// //         lettersUsed.innerHTML = lettersGuessed;
// //         checkUserInput(userChoice);
// //         if (remainingGuess > 0 && selectedWord.join('') !== wordChoice && lettersGuessed.length !== 0) {
// //             remainingGuess--;
// //         }
// //         countGuess.innerHTML = remainingGuess;
// //         if (remainingGuess === 0 && selectedWord.join('') !== wordChoice) {
// //             gameMessage.innerHTML = 'You Lose!';
// //         }
// //     } else {
// //         displayMessage.innerHTML = 'Duplicate letter, choose another.';
// //     }
// // }
