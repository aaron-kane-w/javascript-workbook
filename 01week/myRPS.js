// *HTML Styles
const header = document.getElementById('title')
header.style.textAlign = 'center'
header.style.fontSize = '1.7rem'

const players = document.querySelectorAll('.player')
for (i = 0; i < players.length; i++) {
  players[i].style.display = 'flex'
  players[i].style.justifyContent = 'center'

  players[i].style.marginBottom = '0.5rem'
  players[i].style.fontSize = '1.5rem'
}

const btn = document.getElementById('btn')
btn.style.display = 'flex'
btn.style.justifyContent = 'center'

const button = document.querySelector('button')
button.style.padding = '0.75rem 1.25rem'
button.style.marginTop = '0.5rem'


// Results Display
const displayResults = document.createElement('p')
displayResults.style.fontSize = '2rem'
displayResults.style.textAlign = 'center'
displayResults.style.background = 'red'
displayResults.style.color = 'white'
document.body.appendChild(displayResults)


// Hand Type Displays
const p1 = document.getElementById('p1')
p1.style.color = 'red'
p1.style.fontSize = '2rem'
p1.style.textAlign = 'center'

const p2 = document.getElementById('p2')
p2.style.color = 'red'
p2.style.fontSize = '2rem'
p2.style.textAlign = 'center'
p2.style.justifyContent = 'center'

// *Create Player Variables
const player1 = Math.floor((Math.random() * 3) + 1)
const player2 = Math.floor((Math.random() * 3) + 1)


// *Define game hands
const handTypes = (x) => {
  if (x === 1) return 'ROCK'
  else if (x === 2) return 'PAPER'
  else if (x === 3) return 'SCISSORS'
}


// *Play Game Function
const playGame = (x, y) => {
  x = handTypes(player1)
  y = handTypes(player2)

  // Draw
  if (x === 'ROCK' && y === 'ROCK') {
    displayResults.innerText = 'DRAW'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'PAPER' && y === 'PAPER') {
    displayResults.innerText = 'DRAW'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'SCISSORS' && y === 'SCISSORS') {
    displayResults.innerText = 'DRAW'
    p1.innerText = x
    p2.innerText = y
  } 

  // Player 1 Wins
  if (x === 'ROCK' && y === 'SCISSORS') {
    displayResults.innerText = 'Player 1 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'PAPER' && y === 'ROCK') {
    displayResults.innerText = 'Player 1 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'SCISSORS' && y === 'PAPER') {
    displayResults.innerText = 'Player 1 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  }

  // Player 2 Wins
  if (x === 'ROCK' && y === 'PAPER') {
    displayResults.innerText = 'Player 2 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'PAPER' && y === 'SCISSORS') {
    displayResults.innerText = 'Player 2 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  } else if (x === 'SCISSORS' && y === 'ROCK') {
    displayResults.innerText = 'Player 2 WINS!!!'
    p1.innerText = x
    p2.innerText = y
  }

  button.textContent = 'Reset'
}

btn.addEventListener('click', playGame)


// Reset Game 
const resetGame = () => {
  if (button.textContent === 'Reset') {
    window.location.reload()
  }
}

btn.addEventListener('mousedown', resetGame)