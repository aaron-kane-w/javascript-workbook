// Create Player Variables
const player1 = Math.floor((Math.random() * 3) + 1)
const player2 = Math.floor((Math.random() * 3) + 1)

  // console.log(`${player1} vs ${player2}`)


// Define game hands
const handTypes = (x) => {
  if (x === 1) return 'rock'
  else if (x === 2) return 'paper'
  else if (x === 3) return 'scissors'
}

  // console.log(`${handTypes(player1)} vs ${handTypes(player2)}`)


// Determine game outcome based on players' hands
const playGame = (x, y) => {
  // Draw
  if (x === 'rock' && y === 'rock') return `P1:${x} vs P2:${y} = Draw`
  else if (x === 'paper' && y === 'paper') return `P1:${x} vs P2:${y} = Draw`
  else if (x === 'scissors' && y === 'scissors') return `P1:${x} vs P2:${y} = Draw`

  // Player 1 Wins
  if (x === 'rock' && y === 'scissors') return `P1:${x} vs P2:${y} = Player 1 Wins`
  else if (x === 'paper' && y === 'rock') return `P1:${x} vs P2:${y} = Player 1 Wins`
  else if (x === 'scissors' && y === 'paper') return `P1:${x} vs P2:${y} = Player 1 Wins`

  // Player 2 Wins
  if (x === 'rock' && y === 'paper') return `P1:${x} vs P2:${y} = Player 2 Wins`
  else if (x === 'paper' && y === 'scissors') return `P1:${x} vs P2:${y} = Player 2 Wins`
  else if (x === 'scissors' && y === 'rock') return `P1:${x} vs P2:${y} = Player 2 Wins`
}

playGame(handTypes(player1), handTypes(player2))