'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(guess, solution) {
  // your code here
  let guessArray = guess.split('')
  let solutionArray = solution.split('')

  let exactMatch = 0
  let partialMatch = 0
  let targetIndex = []

  for (let i=0; i<4; i++) {
    if (solutionArray[i] === guessArray[i]) {
      exactMatch ++
      solutionArray[i] = null
      console.log(solutionArray)
    }
  }

  for (let i=0; i<4; i++) {
    targetIndex.push(guessArray.indexOf(solutionArray[i]))
    if (targetIndex[i] > -1) {
      partialMatch ++
      console.log(partialMatch)
      solutionArray[i] = null
      console.log(solutionArray)
    }
  }

  return `${exactMatch} - ${partialMatch}`
  
}

function mastermind(guess) {
  let solution = 'abcd'; // Comment this out to generate a random solution
  // your code here

  if (guess === solution) {
    return 'You guessed it!'
  } else {
    generateHint(guess, solution)
  } 
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint('abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint('aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
