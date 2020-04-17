// Type Object: group related pieces of data together in a way that makes our database easier to access and manipulate
// Object have keys, instead of indexes like Arrays, that reference each of the various values stored
// Unlike arrays, when we access values in an object, order does not matter
// The keys and values together are called key : value pairs
// KEYS must be Strings & each must be unique
// VALUES can be any data type

const exampleObject = {
  name: "Pete",
  age: 80,
  weight: "150 lbs",
  id: 6089,
};
// Dot-Notation: returns 6089
console.log(exampleObject.id) 
// Bracket Notation: returns 6089
console.log(exampleObject['id']) 

// To WRITE change of an existing key/value (can use dot or bracket notation) 
exampleObject.name = 'Aaron'
console.log(exampleObject.name)

// To WRITE a new key/value (can use dot or bracket notation) 
exampleObject['job'] = 'Developer'
console.log(exampleObject)


// ***Accessing Nested Data***
const users = {
  accessCodes: [49303, 493020, 904040, 900404],
  env: ["PA", "NY", "CT" , "VT"],
  filter: {id: 580, branch: "origin"},
  name: 'Keith',
  friends: [{name: 'Meghan', age: '27'}, {name: 'Zuke', age: '3'}]
}
// returns 'NY'
console.log(users.env[1]) 

// Access age property of Zuke
console.log(users.friends[1].age)


// ***Methods of Objects***
// Function within an Object = Method
const person = {
  talk: function (friend) {
    return "Hello, " + friend
  }
};
// returns 'Hello, Peter'
console.log(person.talk('Peter'))



// ***Major Object Methods***
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

// create a template object that holds the keys we'll need for each of our users. NOTE: This template structure is the basis of Object-Oriented Programming where we only have to build the template once so we can reuse it over an over again as our app and database grow:
const ourUserTemplate = {
  name: "",
  id: Number,
  password: "",
  email: "",
  phone: "",
  address: "",
  username: "",
  location: "",
  printName: function () {
    return `Hey, ${this.name}. We see you're in ${this.location}.`;
  }
}
// 1) .create() - Major Object Method
// create a new user with the Object.create() method and the template object passed into it.
const aaronKane = Object.create(ourUserTemplate)

// add a value to the name key of the new object & a value to the location key
aaronKane.name = "Aaron Kane"
aaronKane.location = "Austin, TX"

// log out the value
console.log(aaronKane.printName())

// 2) .entries() : Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
console.log(Object.entries(aaronKane))

// 3) .assign() : Copies the values of all enumerable own properties from one or more source objects to a target object.
console.log(Object.assign(aaronKane))

// 4) .keys() : Returns an array containing the names of all of the given object's own enumerable string properties.
console.log(Object.keys(aaronKane))

// 5) .is() : Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
console.log(Object.is(1, 1))


// ***Create a new Object***
// creates a brand new object. This variation requires the Extra step of 'new Object' vs the way we created the Object 'ourUserTemplate' above
const human = new Object

human.name = '',
human.age = Number,
human.weight = Number

// .create() allows me to make an object of an existing object template
const savB = Object.create(human)

savB.name = 'Sav'
savB.age = 22
savB.weight = 135

console.log(Object.entries(savB))


// ***CodePen Assignment
const user = {
  friends: ['Ron', 'Hermione', 'Neville', 'Draco'],
  quidditch: {team: 'Griffindor', position: 'Beater'},
  castSpell: () => console.log('Expecto Patronum')
}
// Add a name key to user with the value 'Harry'
user.name = 'Harry'
console.log(Object.entries(user))
// Change Draco to Luna in the list of friends
user.friends[3] = 'Luna'
console.log(user.friends)
// Change Harry's position from 'Beater' to 'Seeker'
user.quidditch.position = 'Seeker'
console.log(user.quidditch)
// Make Harry cast a spell by calling the cast spell method on the user object,  'Expecto Patronum' should be displayed to the console on the right
user.castSpell.call()


// Practice Work
// * Create an object called testUser. It should have an "id" of 3 and a key named "interests" that has an empty array as it's value.
const testUser = {
  id: 3,
  interests: []
}

// * Add a "name" key to the object with a value of 'Chris'
testUser.name = 'Chris'

// * Add 'hiking' to the interests array
testUser.interests.push('hiking')
console.log(testUser.interests)

// * Add 'eating' to interests array
testUser.interests.push('eating')
console.log(testUser.interests)

// * Add a method that console.logs a greeting, the person's name and what they like to do.
testUser.func = () => console.log(`Hey ${testUser.name}, you enjoy ${testUser.interests[0]} and ${testUser.interests[1]}`)
testUser.func.call()

// ***********************
// * Explain what the following code is doing:

const starChart = {
  locations: [50403, 3030303, 3939303, 303030],
  details: {
    name: 'default star chart',
    date: '03/10/1994',
    location: 'northern hemisphere',
  }
};

const details = starChart.details;
const detailKeys = Object.keys(details);

detailKeys.forEach((key, index)=> {
  console.log(key, details[key])
})

// ***********************

// * Use the code above to store the second item in the locations array to a variable called currentLocation
const currentLocation = details.location
console.log(currentLocation)

// * Use the code above to store the name of the start chart to a variable called name;
const name = details.name
console.log(name)
// * continue practicing by creating a new object called "dog" and give it as many key:value pairs as you can think a dog would have
const dog = {
  name: 'Max',
  breed: 'pit',
  age: '2yrs',
  color: 'chocolate',
  medical: 'up to date'
}