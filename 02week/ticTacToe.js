'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}
// should return true, if the player won on any row
function horizontalWin() {
  // Your code here
  if (board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X') {
    return true;
  }
  if (board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X') {
    return true;
  }
  if (board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X') {
    return true;
  }
  // if (board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O') {
  //   return true;
  // }
  // if (board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O') {
  //   return true;
  // }
  // if (board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O') {
  //   return true;
  // }
}

// should return true, if the player won on any column
function verticalWin() {
  if (board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') {
    return true;
  }
  if (board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') {
    return true;
  }
  if (board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X') {
    return true;
  }
  // if (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O') {
  //   return true;
  // }
  // if (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O') {
  //   return true;
  // }
  // if (board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O') {
  //   return true;
  // }
}
// should return true, if the player won on any diagnally
function diagonalWin() {
  if (board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') {
    return true;
  }
  if (board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') {
    return true;
  }
  // if (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O') {
  //   return true;
  // }
  // if (board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O') {
  //   return true;
  // }
}

// should return true, if the player won
// if any of the top 3 functions return true, this method should return true
function checkForWin() {
  // Your code here
  if (horizontalWin() === true || verticalWin() === true || diagonalWin()) {
    return true;
  }
}

function ticTacToe(row, column) {
  // Your code here


  // brain of the game that plays the game
  // 1) Player 1: set the value of the box selected 'X'
  // 2) check if they won 
    // If they won ('congrats...')
  // 3) switch out the variable for the other player
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
