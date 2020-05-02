'use strict'

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let secret = ''
let secretArr = []
let board = []
let pastGuesses = []
let turns = 0
let foundLetter = false


function newBoard() {
  board = secretArr.map(elem => '_')
}


function playerGuess(guess) {
  secretArr.forEach((elem, index) => {
    if (elem === guess) {
      board[index] = guess
      foundLetter = true
    } 
  })

  pastGuesses.push(guess)
  checkForWin()
  console.log(`secretArr is ${secretArr}`)
  console.log(`board is ${board}`)
  return board
}

function checkForWin() {
  if(turns >= 6){
    console.log(`----------------`)
    console.log(`You Lose.`)
    console.log(`The secret word was ${secret.toString()}.`)
    console.log(`----------------`)
    askForSecretWord()
    pastGuesses = [];
  } else if (secretArr.toString() === board.toString()) {
    console.log(`----------------`)
    console.log(`You Win!!!`);
    console.log(`The secret word was ${secret.toString()}.`)
    console.log(`----------------`)
    askForSecretWord()
    pastGuesses = []
  } else {
    console.log(`You guessed ${pastGuesses}`)
    if( foundLetter === false ){
      turns++
    } else if (foundLetter === true) {
      foundLetter = false
    }
  }
}


// //TESTS
function askForSecretWord() {
  rl.question('Give me a secret word?: ', (word) => {
    secret = word
    secretArr = secret.split('')
    newBoard()
    getPrompt()
  })
}

function getPrompt() {
  rl.question('letter guess: ', (guess) => {
    console.log(playerGuess(guess))
    getPrompt()
  })
}


// always returns ask the user for another input
askForSecretWord()