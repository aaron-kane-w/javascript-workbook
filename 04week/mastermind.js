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

function generateHint(guess) {
  // your code here
  let solutionArray = solution.split('')
  let guessArray = guess.split('')
  let correctLetterLocations = 0
  let correctLetters = 0
  let targetIndex = []

  guessArray.forEach((elem, index) => {
    if (elem === solutionArray[index]) {
      correctLetterLocations ++;
      solutionArray[index] = null;
    }
  })

  guessArray.forEach((elem, index) => {
    targetIndex.push(solutionArray.indexOf(elem))

    if (targetIndex[index] > -1) {
      correctLetters ++
    }
  })

  // Duplicate?
  let count = 0
  for (let i=0; i<solutionArray.length; i++) {
    for (let j=i+1; j<solutionArray.length; j++) {
      if (solutionArray[i] === solutionArray[j]){
        count ++
      }
    }
  }
  

  return `${correctLetterLocations}-${correctLetters}`
}

function mastermind(guess) {
  let solution = 'abcd'; // Comment this out to generate a random solution
  // your code here
  board.push(1)
  if (guess === solution) {
    return 'You guessed it!'
    console.log('You guessed it!')
  } else {
    board.length +1
    generateHint(guess)
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
