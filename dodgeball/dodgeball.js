const arrOfPeople = [
  {
    name: "Drew Nolan",
    age: 28,
    skillSet: "yogi",
    placeBorn: "San Luis, CA"
  },
  {
    name: "Charles Young",
    age: 25,
    skillSet: "welder",
    placeBorn: "Omaha, NB"
  },
  {
    name: "Judy Twilight",
    age: 35,
    skillSet: "fisher",
    placeBorn: "Louisville, KY"
  },
  {
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "farmer",
    placeBorn: "Pawnee, TX"
  },
  {
    name: "John Willouby",
    age: 28,
    skillSet: "artist",
    placeBorn: "Manhattan, NY"
  },
  {
    name: "Stan Honest",
    age: 20,
    skillSet: "strongman",
    placeBorn: "Clevland, OH"
  },
  {
    name: "Mia Watu",
    age: 19,
    skillSet: "acrobatic",
    placeBorn: "Los Angeles, CA"
  },
  {
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
  constructor(name, age, skillSet) {
    this.name = name
    this.age = age
    this.skillSet = skillSet
    this.placeBorn = this.placeBorn
  }
  addToArrayOfPeople() {
    arrOfPeople.push(this)
  }
}
class Teammate extends Player {
  constructor (name, age, skillSet, placeBorn, team) {
    super (name, age, skillSet, placeBorn)
    this.team = team
  }
  joinTeam() {
    if (this.team === 'blue') {
      blueTeam.push(this.name)
    } else if (this.team === 'red') {
      redTeam.push(this.name)
    }
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

      //added person object to List Of Players array
      listOfPlayers.push(person) 
    })

    // Show elements on DOM under List Of People column
    li.appendChild(makePlayerBtn)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (person) => {
  // Creating/defining list elements for Dodgeball Players column
  const playersList = document.getElementById('players')
  const li = document.createElement('li')
  li.innerHTML = `${person.name} ${person.age}`

  // Blue Button
  const blueBtn = document.createElement('button')
  blueBtn.innerHTML = 'blue'
  blueBtn.classList.add('blue')
  blueBtn.addEventListener('click', function() {
    removeSortedPlayer(li, blueBtn, redBtn)
    joinBlueTeam(person)
  })

  // Red Button
  const redBtn = document.createElement('button')
  redBtn.innerHTML = 'red'
  redBtn.classList.add('red')

  redBtn.addEventListener('click', function() {
    removeSortedPlayer(li, blueBtn, redBtn)
    joinRedTeam(person)
  })

  // Show elements on DOM under Dodgeball Players column
  playersList.append(li, blueBtn, redBtn)
}

// Adding Player to Blue Team
const joinBlueTeam = (person) => {
  const blueList = document.getElementById('blueList')
  const li = document.createElement('li')
  li.innerHTML = `${person.name}`
  blueList.append(li)

  //added to blueTeam array
  blueTeam.push(person.name) 
}

// Adding Player to Red Team
const joinRedTeam = (person) => {
  const redList = document.getElementById('redList')
  const li = document.createElement('li')
  li.innerHTML = `${person.name}`
  redList.append(li)

  //added to redTeam array
  redTeam.push(person.name) 
}


// Removing Items for List of People column
const removePersonFromListOfPeople = (makePlayerBtn) => {
  const parentLi = makePlayerBtn.parentElement
  parentLi.remove()
}

// Removing Items for Dodgeball Players column
const removeSortedPlayer = (li, blueBtn, redBtn) => {
  blueBtn.remove()
  redBtn.remove()
  li.remove()
}