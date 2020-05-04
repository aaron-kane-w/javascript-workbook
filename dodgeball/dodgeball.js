const arrOfPeople = [
  {
    id: 1,
    name: "Drew Hartsten",
    age: 28,
    skillSet: "skater",
    placeBorn: "San Luis, CA"
  },
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, NB"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, KY"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "farming",
    placeBorn: "Pawnee, TX"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "karate",
    placeBorn: "Manhattan, NY"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang",
    placeBorn: "Clevland, OH"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, CA"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "calistenics",
    placeBorn: "New Orleans, LA"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []



class Player {
  constructor(id, name, age, skillSet) {
    this.id = id
    this.name = name
    this.age = age
    this.skillSet = skillSet
  }
}
class Teammate extends Player {
  constructor (name, age, skillSet, team) {
    super (name, age, skillSet)
    this.team = team
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const makePlayerBtn = document.createElement("button")
    makePlayerBtn.innerHTML = "Make Player"
    makePlayerBtn.classList.add('makePlayer')

    // Make Player button functionality
    makePlayerBtn.addEventListener('click', function() {
      makePlayer(person)
      removePersonFromListOfPeople(makePlayerBtn)
      listOfPlayers.push(person) //added object to array
    } )

    li.appendChild(makePlayerBtn)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  console.log(`Clicked ${person.id} ${person.name}`)

  // Creating/defining list elements for Dodgeball Players column
  const playersList = document.getElementById('players')
  const li = document.createElement('li')
  li.innerHTML = `${person.name} ${person.age}`

  // Blue Button
  const blueBtn = document.createElement('button')
  blueBtn.innerHTML = 'blue'
  blueBtn.classList.add('blue')
  blueBtn.addEventListener('click', function() {
    console.log('blue clicked')
    // addToBlueTeam(person)
    removeSortedPlayer(li, blueBtn, redBtn)
    joinBlueTeam(person)
  })

  // Red Button
  const redBtn = document.createElement('button')
  redBtn.innerHTML = 'red'
  redBtn.classList.add('red')

  redBtn.addEventListener('click', function() {
    console.log('red clicked')
    removeSortedPlayer(li, blueBtn, redBtn)
    joinRedTeam(person)
  })

  // Appending
  playersList.append(li, blueBtn, redBtn)

}

// Adding Players to Teams
const joinBlueTeam = (person) => {
  const blueList = document.getElementById('blueList')
  const li = document.createElement('li')
  li.innerHTML = `${person.name}`
  blueList.append(li)
  blueTeam.push(person.name) //added to blueTeam array
}
const joinRedTeam = (person) => {
  const redList = document.getElementById('redList')
  const li = document.createElement('li')
  li.innerHTML = `${person.name}`
  redList.append(li)
  redTeam.push(person.name) //added to redTeam array
}


// Removing Item Functions
const removePersonFromListOfPeople = (makePlayerBtn) => {
  const parentLi = makePlayerBtn.parentElement
  parentLi.remove()
}

const removeSortedPlayer = (li, blueBtn, redBtn) => {
  blueBtn.remove()
  redBtn.remove()
  li.remove()
}
