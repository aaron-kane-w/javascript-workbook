// Steps:
// 1.) User enters word into input box
// 2.) Click Translate button
  // a.) Words is translated to PigLatin
  // b.) Translated word appears in div id='translation'


const input = document.querySelector('input')
const button = document.querySelector('button')
const translateDiv = document.getElementById('translation')
let answer = document.createElement('span')

// PigLatin Function on MouseEvent

button.addEventListener('click', pigLatin = () => {
  if (input.value !== '') {
    let word = input.value.toLowerCase()
    let pigWord = ''

    const firstVowelPosition = (word) => {
      for (let i=0; i<word.length; i++) {
        if ('aeiou'.indexOf(word[i]) !== -1) {
          return i
        }
      }
    }

    let firstVowelIndex = firstVowelPosition(word)

    if (firstVowelIndex === 0) {
      pigWord = word + 'yay'
    } else {
      pigWord = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay'
    }

    answer.innerText = pigWord
    translateDiv.appendChild(answer)
  }
})

// PigLatin Function on Keyboard Events
input.addEventListener('keyup', pigLatin = (e) => {
  if (e.keyCode === 13 && input.value !== '') {

    let word = input.value.toLowerCase()
    let pigWord = ''

    const firstVowelPosition = (word) => {
      for (let i=0; i<word.length; i++) {
        if ('aeiou'.indexOf(word[i]) !== -1) {
          return i
        }
      }
    }

    let firstVowelIndex = firstVowelPosition(word)

    if (firstVowelIndex === 0) {
      pigWord = word + 'yay'
    } else {
      pigWord = word.slice(firstVowelIndex) + word.slice(0, firstVowelIndex) + 'ay'
    }

    answer.innerText = pigWord
    
  // clear answer if input box is cleared
  } else if (input.value === ''){
    answer.innerText = ''
  }

  translateDiv.appendChild(answer)
})


