// PreWork
// Object-Oriented Programming allows us to type less, reuse more, standardize our data structures and pass objects to other objects.
// Remember DRY principle = Don't Repeat Yourself!

// 1) Create an Object using a traditional function
const myFunc = (num) => {
  return {id: num}
}

const obj = myFunc(12345)
console.log(obj) //{ id: 12345 }
console.log(obj.id) //12345 
console.log('----')


// 2) Create an Object using Class 
// Class creates a Template for an Object so you can create as many as you want
class Human1 {
  constructor (name, height) {
    this.myName = name //.this is key
    this.myHeight = height //.this is key
  }
}
const human1 = new Human1('Aaron', '67in')
const human2 = new Human1('Sav', '68in')
console.log(human1) 
// Human { 
  //  myName: 'Aaron', 
  //  myHeight: '67in' 
  // }
console.log('----')


// 2a) Class Object with a greeting function
class Humans {
  constructor (name, height) {
    this.myName = name
    this.myHeight = height
  }
  greeting() {
    return `Hi my name is ${this.myName}`
  }
}

const person1 = new Humans('Joe', '69in')
console.log(person1)
// Human { 
  //  myName: 'Joe', 
  //  myHeight: '69in' 
  // }
console.log(person1.greeting()) //Hi my name is, Joe
console.log('----')


// 2b) Allow objects function to work with external function
// All possible because of .this
const sayHelloFrom = (name) => `Hello from ${name}`

class Humanz {
  constructor(name, height) {
    this.myName = name
    this.myHeight = height
  }
  greeting() {
    return sayHelloFrom(this.myName)
  }
}
const humanz1 = new Humanz('Tiff', '65in')
console.log(humanz1.greeting()) //Hello from Tiff
console.log('----')

// 3) OOP for building a bicycle. Create the class so we can easily create bike objects for ourselves and friends

class Bicycle {
  constructor(frame, wheels, seat, brakes, handlebars, reflectors) {
    this.frame = frame
    this.wheels = wheels
    this.seat = seat
    this.brakes = brakes
    this.handlebars = handlebars
    this.reflectors = reflectors
  }
}

const myBike = new Bicycle('green mountain', 'all-terrain', null, 'dual discs', 'straight')
const kateBike = new Bicycle('blue road', 'road touring', 'small synthetic', 'dual discs', 'horned', 4)
console.log(myBike)
/* Bicycle {
  frame: 'green mountain',
  wheels: 'all-terrain',
  seat: null,    (note null) 
  brakes: 'dual discs',
  handlebars: 'straight',
  reflectors: undefined  (note undefined) 
} */
console.log(kateBike.seat) //small synthetic
console.log('')
console.log('---- Four Pillars of OOP')
console.log('1) Encapsulation, 2) Abstraction, 3) Inheritance and 4) Polymorphism')

// Four Pillars of OOP
// 1) Encapsulation - we group related variables & functions that operate on them into Objects. Reduces complexity & increasse resusability

// We first learned 'Procedural' coding where you write variables then you write functions and everything is standalone. 
let baseSalary = 30000
let overtime = 10
let rate = 20

function getWage(baseSalary, overtime, rate) {
  return baseSalary + (overtume * rate)
}

// OOP Encapsulation
let employee = {
  baseSalary: 30000,
  overtime: 10,
  rate: 20,
  getWage: function() { //notice no parameters needed as they're properties in the object
    return this.baseSalary + (this.overtime * this.rate)
  }
}
employee.getWage() //30200

// 2) Abstraction - hides certain details and only show the essential features of the object. Reduces complexity & isolates impact of chages

// 3) Inheritance - allows you to eliminate redundant code. All JavaScript objects inherit properties and methods from a prototype

// 4) Polymorphism - 'many forms': technique that allows you to get rid of long if/else & switch statements

console.log('')
console.log('---- MPJ YouTube: .bind() & .this')

// 1) function with the parameter
function talk1(sound) {
  console.log(sound)
}
talk1('Woof!')

// 2) function without the parameter
function talk2() {
  // console.log(this) - this alone will console the global scope
}

// 3) create an object of gandalf, then BIND it to a talk function
function talk3() {
  console.log(this.sound)
}
let gandalf = {
  sound: 'You shall not pass!!!'
}
let gandalfSoundBound = talk3.bind(gandalf)

//gandalfSoundBound() is a COPY of talk3() BOUND to gandalf's properties 
gandalfSoundBound() //You shall not pass!!!


// 4) Recreate #3 but define function first as a variable, then have this variable passed into the object as a value

let talk4 = function() {
  console.log(this.sound)
}

let boromir = {
  speak: talk4,
  sound: 'One does not simply walk into Mordor!'
}

// we can call the property on the boromir object which is a function
boromir.speak() //One does not simply walk into Mordor!


// *bind will make a copy of a function, BUT the .this is BOUND to a specific value
// 5) 
let talk5 = function() {
  console.log(this.sound)
}

let gollum = {
  sound: 'My precious'
}

smeagol = talk5.bind(gollum)
smeagol() //My precious


console.log('')
console.log('---- Practice OOP - Project 1')
// 1. Write a JavaScript program to list the properties of this student object
const student = {
  name : "David Rayy",
  sclass : "VI",
  rollno : 12 
}

const studentProps = (obj) => {
  let arr = []
  for (let props in obj) {
    arr.push(props)
  }
  return arr
}
console.log(studentProps(student))

// 2. Using the student object, delete the rollno property. Also print the object before or after deleting the property.
console.log(student)
delete student.rollno
console.log(student)

// 3. Write a JavaScript program to get the length of students object

const students = {
  name : "Sav Baraj",
  sclass : "VII",
  rollno : 19 
}

const objLength = (obj) => {
  let arr = []
  for (let props in obj) {
    arr.push(props)
  }
  return arr.length
}
console.log(objLength(students))  //3

// 4. Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books
var library = [ 
   {
    author: 'Bill Gates',
    title: 'The Road Ahead',
    readingStatus: true
   },
   {
    author: 'Steve Jobs',
    title: 'Walter Isaacson',
    readingStatus: true
   },
   {
    author: 'Suzanne Collins',
    title:  'Mockingjay: The Final Book of The Hunger Games', 
    readingStatus: false
   }
]
const bookStatus = library.map(x => {
  console.log(`${x.author}'s book ${x.title} is currently available: ${x.readingStatus}'`)
})

//5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.

// 5a) as an Object
const cylinder = {
  pie: 3.14,
  radius: 2,
  height: 10,
  volume: function() {
    return this.pie * (this.radius) * this.height
  }
} 

console.log(cylinder.volume())  //62.80

// 5b) As a Class then an Object
class Cylinders {
  constructor (pie, radius, height) {
    this.pie = 3.14
    this.radius = radius
    this.height = height
  }
  volume() {
    return this.pie * (this.radius) * this.height
  }
}

const myCylinder = new Cylinders('', 2, 10)

console.log(myCylinder.volume()) //62.80


// 6. Write a Bubble Ascending Sort algorithm in JavaScript.
let data = [6,4,0, 3,-2,1]
const dataSort = data.sort((a,b) => a-b)
console.log(dataSort) //[ -2, 0, 1, 3, 4, 6 ]


//7. Write a JavaScript program which returns a subset of a string. Go to the editor
// Sample Data: dog
// Expected Output: ["d", "do", "dog", "o", "og", "g"]

const subsetStr = (x) => {
  subset = []
  for (let i=0; i<x.length; i++) {
    for (let j=i+1; j<x.length+1; j++ ) {
      subset.push(x.slice(i,j))
    }
  }
  return subset
}
console.log(subsetStr('dog'))


// 8. Create a clock 
const time = () => {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  return `${hours}:${minutes}:${seconds}`
}
console.log(time())


// 9. Calculate the area and perimeter of a circle
class Circle {
  pie = 3.14
  constructor (radius) {
    this.radius = radius
  }
  perimeter() {
    return 2 * this.pie * this.radius
  }
  area() {
    return this.pie * Math.pow(this.radius, 2)
  }
}
const circle1 = new Circle(5)

console.log(circle1.perimeter()) //31.4
console.log(circle1.area()) //78.5


// 10. Write a JavaScript program to sort library books by library ID in descending order

const theLibrary = [ 
  {
    title:  'The Road Ahead',
    author: 'Bill Gates',
    libraryID: 1254
  },
  {
    title: 'Walter Isaacson',
    author: 'Steve Jobs',
    libraryID: 4264
  },
  {
    title: 'Mockingjay: The Final Book of The Hunger Games',
    author: 'Suzanne Collins',
    libraryID: 3245
  }
]

const idSort = theLibrary.sort((a,b) => b.libraryID - a.libraryID)
console.log(idSort)
console.log('-------')


// 11. Retrieve all the key names of an Object
const libraryKeys = (arr) => {
  let newArr = []

  for (let items of arr) {
    newArr.push(Object.keys(items))
  }
  return newArr
}
console.log(libraryKeys(theLibrary)[0])
//[ 'title', 'author', 'libraryID' ]


// 12. Retrieve all the values of an Object's properites
const libraryValues = (arr) => {
  let newArr = []

  for (let items of arr) {
    newArr.push(Object.values(items))
  }
  return newArr
}
console.log(libraryValues(theLibrary))
/*
[
  [ 'Walter Isaacson', 'Steve Jobs', 4264 ],
  [ 'Mockingjay: The Final Book of The Hunger Games',
    'Suzanne Collins', 3245 ],
  [ 'The Road Ahead', 'Bill Gates', 1254 ]
]
*/


// 13. Write a JavaScript function to convert an object into a list of `[key, value]` pairs. 
const libraryKeysAndVals = (arr) => {
  let str = ''
  for (let items of arr) {
    for (let i=0; i<arr.length; i++) {
      str += `${Object.keys(items)[i]}: ${Object.values(items)[i]}\n`
    }
  }
  return str
}
console.log(libraryKeysAndVals(theLibrary))


console.log('')
console.log('---- Practice OOP - Project 2')
// Practice OOP - Project 2

class Human {
  constructor(name, height, weight, dob) {
    this.name = name
    this.height = height
    this.weight = weight
    this.dob = dob
  }
  greeting() {
    return `Hello ${this.name}!`
  }
}


class AcaStudent extends Human {
  constructor (codingLanguage, name, height, weight, dob) {
    super(name, height, weight, dob)
    this.codingLanguage = codingLanguage
  }
  greeting() {
    return `Hello my name is ${this.name}! I am learning how to code! `
  }
  language() {
    return `I'm learning ${this.codingLanguage}`
  }
}

const aaron = new AcaStudent('JavaScript', 'Aaron', '67in', '165lbs', 'Aug 14, 1987')

console.log(aaron)
/*
AcaStudent {
  name: 'Aaron',
  height: '67in',
  weight: '165lbs',
  dob: 'Aug 14, 1987',
  codingLanguage: 'JavaScript'
}
*/

console.log(aaron.greeting()) //Hello my name is Aaron! I am learning how to code! 

console.log(aaron.language()) //I'm learning JavaScript


console.log('')
console.log('---- MPJ YouTube & MDN: Closure')
// Closures - gives you access to an outer function’s scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

let me = 'Bruce Wayne'
const greetMe = () => {
  return `Hello ${me}`
}
greetMe() //Hello Bruce Wayne
// *notice greetMe doesnt need to pass in an arguement because the return statement is reading the me variable OUTSIDE it's function scope. Many languages can't do this, but JS can

function init() {
  var name = "Mozilla" // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    console.log(name) // displayName() uses variable declared in the parent function    
  }
  displayName()
}
init() //Mozilla