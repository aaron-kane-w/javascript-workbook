'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//npm test 03week/towersOfHanoi.js

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(start, end) {
  // Your code here
  if (isLegal(start, end) === true) {
    let from = start.pop()
    end.push(from)
    checkForWin()
  } else {
    console.log('Illegal move')
  }
}

function isLegal(start, end) {
  // Your code here
  if (((start[start.length-1] < end[end.length-1]) || (end.length === 0)) && (start.length > 0)) {
    return true
  } else {
    return false
  }
}

function checkForWin() {
  // Your code here
  if (stacks.b.length === 4 || stacks.c.length === 4) {
    console.log('You won!')
    return true
  } else {
    return false
  }
}

function towersOfHanoi(startStack, endStack) {
  // Your code here
  let start = stacks[startStack]
  let end = stacks[endStack]
  
  if (checkForWin() === false) {
    movePiece(start, end)
  }
}

function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

}
