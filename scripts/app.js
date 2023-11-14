//Someone thinks of a word and we keep it secret from the other players.
//We will display a series of underscores depending on the length of the word.
//Each turn the player will guess 1 letter from the word.
//If guess is correct we will display the letter in the blank word.
//If incorrect we draw a piece of the hangman or tell the user they have x amount of guesses left.
//Add incorecct guess to a div.
//Start Button
//Replay Button

//We'll need an Id for
//Start button
//Replay button
//Secret Word
//Wrong Guesses
//Hangman
//Guess / Input

// Id Section

let startBtn = document.getElementyById("startBtn");
let restartBtn = document.getElementyById("restartBtn");

let secretWord = document.getElementById("secretWord");
let wrongGuesses = document.getElementById("wrongGuesses");
let hangMan = document.getElementById("hangMan");
let userInput = document.getElementById("userInput");

//Variables
//Random word will be for our API call
//Wrong guess will be the user's incorrect input
//Displayed word will be for their correct input
let randomWord = "";
let wrongGuess = "";
let displayedWord = [];

let guesses = 0;
let maxGuesses = 5;

startBtn.addEventListener('click', function(){
//We will call our API function
ApiCall();
})

function ApiCall(){
    //We initiate the fetch request from our random word api
    fetch('https://random-word-api.herokuapp.com/word')
        .then((response) => {
            //We're going to use .json() to parse the response into json data
            return response.json();
        })
}
