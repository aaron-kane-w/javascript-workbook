// PreWork
// Accessing data in complex data structures (nested objects and arrays) is one of the most important tasks in front end development and the first step in receiving data from the back-end and displaying it to the user. 

// JSON (JavaScript Object Notation) is a lightweight data-interchange format that uses conventions found in many languages

// JSON is built on two structures:
// 1. Objects - an unordered set of name/value pairs
// 2. Arrays - an ordered collection of values

// ***Array of Objects
const arrOfObjects = [
  {
    "_id": {"$oid": "5968dd23fc13ae04d9000001"},
    "product_name": "sildenafil citrate",
    "supplier": "Wisozk Inc",
    "quantity": 261,
    "unit_cost": "$10.47"
  }, 
  {
    "_id": {"$oid": "5968dd23fc13ae04d9000002"},
    "product_name": "Mountain Juniperus ashei",
    "supplier": "Keebler-Hilpert",
    "quantity": 292,
    "unit_cost": "$8.74"
  }, 
  {
    "_id": {"$oid": "5968dd23fc13ae04d9000003"},
    "product_name": "Dextromathorphan HBr",
    "supplier": "Schmitt-Weissnat",
    "quantity": 211,
    "unit_cost": "$20.53"
  }]

// 1.) Get the values of the Objects in the Array, and put them into a new array called container
// Use For OF with a For IN loop

const getObjValues = (arr) => {
  let container = []
  for (let objects of arr) {
    for (let values in objects) {
      container.push(objects[values])
    }
  }
  return container
}
console.log(getObjValues(arrOfObjects))


// *** Accessing a complex Object
const userObj = {
  likes: [
      {id: 1, name: 'basketball'},
      {id: 2, name: 'football'},
      {id: 3, name: 'cooking'},
  ],
  firstName: 'Tom',
  lastName: 'Riddle',
  posts: {
    1122018: 'today I ate pizza',
    2142018: 'happy valentines day',
    2152018: 'its 5 o’clock somewhere'
  }
}

// 2.a.) Display the user's most recent like { id: 1, name: 'basketball' }
// Use dot or bracket Notation
console.log(userObj.likes[0])

// 2.b.) Only display the string 'basketball'
// Use dot or bracket Notation
console.log(userObj.likes[0].name)

// 2.c.) .keys() object prototype method will get the keys of all the key-value pairs in the objects.
const objKeys = Object.keys(userObj.posts) 
console.log(objKeys)
// returns [ '1122018', '2142018', '2152018' ]

// 2.d.) .entries() object prototype method will get the values of all the key-value pairs in the object.
const objKeysAndValues = Object.entries(userObj.posts)
console.log(objKeysAndValues)
// returns [ [ '1122018', 'today I ate pizza' ], [ '2142018', 'happy valentines day' ], [ '2152018', 'its 5 o’clock somewhere' ] ]


// We can now used these returned arrays to loop through them. A forEach loop is the best option to use here. It has decreased scope, simplified syntax, and doesn’t have a possibility of an infinite loop.

// 2.e.) use a forEach loop on userObj.posts keys
objKeys.forEach((key) => {
  console.log(key)
})
// returns each date as strings

// 2.f.) use a forEach loop 
objKeys.forEach((key) => {
  console.log(`The key is ${key}, and the post is: ${userObj.posts[key]}`)
})
// returns each date and post as strings


// ***YouTube: Objects in JS
let youtubeVid = {
  title: 'Loops in JavaScript',
  videoLength: '15mins',
  videoDescription: 'this is video description'
}
// 3.a.) Access title
console.log(youtubeVid.title)
// 3.b.) Put keys in array
const keysInArr = Object.keys(youtubeVid)
// 3.c.) Print each key as a string
keysInArr.forEach((i) => {
  console.log(i)
})
// 3.d.) Print each key & value as a string
keysInArr.forEach((i) => {
  console.log(`The key is ${i} and the value is ${youtubeVid[i]}`)
})


// ***YouTube: JS Nested Loops with Arrays & Objects
// We can use nested loops to access all the elements inside multi-dimensional arrays or objects

// 4.a.) Use multiple loops to get at each value in this two dimensional array
let twoD = [
  [1, 2, 3, 4, 5, 6, 7], 
  [8, 10, 5, 7, 3, 22, 6, 42], 
  [123, 54, 12, 11, 9, 15]]

let rows = twoD.length // 3

for (let i=0; i<rows; i++) { //outer loop
  let items = twoD[i].length // 7 8 6

  for (let j=0; j<items; j++){ //inner loop
    console.log(twoD[i][j]) //returns all items
  }
}

// 4.b.) 
let bigHero = {characters: [
  {name: 'Hiro', voice: 'Ryan Potter'},
  {name: 'Baymax', voice: 'Scott Adsit'},
  {name: 'Go GO Tamago', voice: 'Jamie Chung'},
  {name: 'Fred', voice: 'T.J. Miller'},
]}

let chars = bigHero.characters //array & inner objects
let len = chars.length // 4

for (let i=0; i<len; i++){ //loops all 4 inner objects
  // console.log(chars[i]) //returns each method
  // console.log(chars[i].name) //returns all name keys as strings

  // For In loop to run through Objects (*useful when you don't know what's in Objects)
  for (let prop in chars[i]) {
    // returns each key & its value as strings
    console.log(prop, chars[i][prop])
  }
}


// ***YouTube: bind & this
// 5.a.) Why .this needs .bind 
let dog = {
  sound: 'woof',
  talk: function() {
    return this.sound
  }
}
console.log(dog.talk()) // 'woof'

// HOWEVER this does NOT print 'woof'
let badFunction = dog.talk
console.log(badFunction()) // undefined
// because .this doesn't make sense here. a better way to see this in action is written below 
let badFunctions = function() {
  console.log(this.sound)
} //.this has nothing to connect to here as it does not refer to where it was originally defined, it refers to the function on which it’s being called. 
  
  // However, we can bind .this with .bind()

// This WORKS! because of bind
let goodFunction = badFunction.bind(dog)
console.log(goodFunction()) // 'woof'


// 5.b.) Another example
let cat = {
  sound: 'meow',
  talk: function() {
    return this.sound
  }
}
// Button for the DOM
const newBtn = () => {
  let btn = document.getElementByID('redbtn')

  btn.addEventListener(
    'click',
    cat.talk.bind(cat)
  )
// cat.talk() wouldn't work because the .this would be looking at the DOM Window not the variable cat
}


// ***Practice It

const person = {
  firstName: "Kevin",
  lastName: "Colten",
  age: 29,
  eyeColor: "brown",
  talk: function () {
    return "Hello!";
  }
};

// 6.a.) Is .bind necessary to access Person's talk function?
console.log(person.talk()) //'Hello! 

let greeting = person.talk
console.log(greeting()) //'Hello!'
// No. .bind necessary as .this isn't used in the talk function 


//6.b.) Create a new object called cow
const cow = {
  sound: 'moo',
  talk: function() {
    return this.sound
  }
}
console.log(cow.talk()) //'moo'

// 6.c.) Recreate the scenario for making the dog bark

// with one variable
let cowSound = cow.talk.bind(cow)
console.log(cowSound()) //'moo'

// or alternative with two variables
let cowTalk = cow.talk
let cowNoise = cowTalk.bind(cow)
console.log(cowNoise()) //'moo'