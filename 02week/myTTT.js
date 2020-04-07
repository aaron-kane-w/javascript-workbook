// Used YouTube Series by Timothy James for guidance
// https://www.youtube.com/playlist?list=PLJnkyVAO-LM6IgtfN83wQ-dj5Oj1mNETN

const startGame = () => {
  document.turn = 'X'
  document.winner = null

  setMessage(`Player ${document.turn}'s Turn`)
}

const setMessage = (msg) => {
  document.getElementById('msg').textContent = msg
}


const nextMove = (box) => {
  if (document.winner !== null) {
    setMessage(`${document.winner} already won game`)
  } else if (box.textContent === '') {
    box.textContent = document.turn 
    switchTurn()
  } else {
    setMessage('This space is already used')
  }
}

const switchTurn = () => {
  if (checkForWin(document.turn)) {
    setMessage(`Congratulations! ${document.turn} won!`)
    document.winner = document.turn
    startOver()
  } else if (document.turn === 'X') {
    document.turn = 'O'
    setMessage(`Player ${document.turn}'s Turn`)
  } else {
    document.turn = 'X'
    setMessage(`Player ${document.turn}'s Turn`)
  }
}


const checkForWin = (move) => {
  let result = false
  if (checkRow(1, 2, 3, move) || 
      checkRow(4, 5, 6, move) || 
      checkRow(7, 8, 9, move) ||
      // coumns
      checkRow(1, 4, 7, move) || 
      checkRow(2, 5, 8, move) || 
      checkRow(3, 6, 9, move) ||
      // diagnol
      checkRow(1, 5, 9, move) || 
      checkRow(3, 5, 7, move)) {result = true} 
  return result
}


const checkRow = (a, b, c, move) => {
  let result = false

  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true
  }
  return result
}

const getBox = (number) => {
  return document.getElementById('s' + number).textContent
}

const startOver = () => {
  const footer = document.querySelector('footer')
  const newButton = document.createElement('button')
  newButton.textContent = 'Start Over'
  footer.appendChild(newButton)

  newButton.addEventListener('click', () => {
    window.location.reload()
  })
}
