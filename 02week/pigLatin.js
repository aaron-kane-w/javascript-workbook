'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const pigLatin = (word)  => {

  let str = word.toLowerCase().trim()

  const firstVowel = (str) => {
    for (let i = 0; i < str.length; i++){
      if ('aeiou'.indexOf(str[i]) !== -1){
        return i
      }
    }
  }
  // just for fun searched words that start with y
  const yFirst = (str) => {
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(0) === 'y') {
        return true
      }
    }
  }

  let firstPosition = firstVowel(str)

  if (firstPosition === 0){
    return str + 'yay'
  } else if (yFirst(str) === true) {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + '-ay'
  } else {
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay'
  }

}


const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}
