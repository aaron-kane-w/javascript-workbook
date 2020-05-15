// PreWork: 

// __proto__ vs prototype
  // _proto: a property on an object
  // prototype: a property on a function

// These two properties are used by the objects and functions we create so that we have built-in methods that follow each of our objects or functions around. This following around is called Delegation (often refererred as inheritance).

// Unlike most other languages, JavaScript’s object system is based on prototypes, not classes. 

  // Class Inheritance vs Prototypal Inheritance 

    // Class Inheritance: A class is like a blueprint — a description of the object to be created. Classes inherit from classes and create subclass relationships: hierarchical class taxonomixes.

    // Prototypal Inheritance: A prototype is a working object instance. Objects inherit directly from other objects.
    // Instances may be composed from many different source objects, allowing for easy selective inheritance and a flat [[Prototype]] delegation hierarchy. 
    // In other words, class taxonomies are not an automatic side-effect of prototypal OO: a critical distinction.
    // Inheritance is fundamentally a code reuse mechanism: A way for different kinds of objects to share code.

// MPJ YouTube Vid: Prototype & __proto__
console.log('-----Prototype & __proto__')
//1) 
//setPrototypeOf method sets the prototype (i.e., the internal [[Prototype]] property) of a specified object to another object or null.

// Basically this allows for us to DELEGATE objects to other objects (not creating instances like we do with Classes)

let cat = {breed: 'munchkin'}
let myCat = {name: 'Fluffykins'}

Object.setPrototypeOf(myCat, cat)

console.log(myCat) //{ name: 'Fluffykins' }
//doesn't show munchkin in the myCat object, but when you specifically call it, there it is! 

myCat.breed //munchkin

//You can call this object using __proto__
myCat.__proto__ // { breed: 'munchkin' }

// we can keep adding values to cat object and they will pass to myCat due to Object.setPrototypeOf(myCat, cat)
cat.tailLength = 12

myCat.__proto__ //{ breed: 'munchkin', tailLength: 12 }



//2)
// new - creates a new Object 
function Dog() {}

Dog.prototype.breed = 'Bulldog'

let myDoggie = new Dog()

myDoggie.breed //Bulldog
myDoggie.__proto__ //Dog { breed: 'Bulldog' }


//3) Even empty objects have a _proto_ 
let koala = {}
koala.__proto__ //{} - which is the Global prototype

koala.__proto__ == Object.prototype 



// MPJ: YouTube - Object.create
console.log('-----Object.create()')

// Object.create() - static method on the Object prototype that creates a new Object with the prototype set to a certain object

// A kitty can only make 1 sound
const kitty = {
  makeSound() {
    console.log('meow')
  }
}
kitty.makeSound() //meow

// A birdie can make a variety of sounds
const birdie = {
  makeSound() {
    console.log(this.sound)
  }
}

const tweetie = Object.create(birdie)
tweetie.sound = 'I saw a putty cat'
tweetie.makeSound() //I saw a putty cat

const angel = Object.create(birdie)
angel.sound = 'hellooooo'
angel.makeSound() ////I saw a putty cat

birdie.isPrototypeOf(angel) //true


// How to see Object.create()
// writing out the above the long way. Do NOT use this version as setPrototypeOf is a very long way & slows down JS

const hulk = {
  makeSound() {
    console.log(this.sound)
  }
}

function objectCreate(prototype){
  const obj = {} 
  Object.setPrototypeOf(obj, prototype) 
  return obj
}

const bruce = objectCreate(hulk)
bruce.sound = 'Smashhhhh'
bruce.makeSound() //Smashhhhh


// Classes and Objects
console.log('-----Classes & Objects')

//Classes are like templates
//We use a constructor function to define the properties of class
//We use the this keyword to set individual properties

class Human {
  constructor(name, height, weight, dob) {
    this.name = name
    this.height = height
    this.weight = weight
    this.dob = dob
  }

  greeting() {
    return `Hello my name is ${this.name}`
  }
}

//We can instantiate or copy a object from a class, aka make an 'INSTANCE' of the class

const sav = new Human('Sav', '5ft 8in', '130lbs', 'Nov 15, 1997')

sav.greeting() //Hello my name is Sav

// 

class Square {
  constructor(side) {
    this.side = side
  }
  area() {
    return this.side * this.side
  }
  areas(){
    return Math.pow(this.side, 2)
  }
  perimeter() {
    return 4*this.side
  }
}

const box = new Square(5)
box.area() //25
box.areas() //25
console.log(box.perimeter()) //20


// MPJ YouTube on Class & Extends 

class Mammal {
  constructor(sound) {
    this.sound = sound
  }
  talk() {
    return this.sound
  }
}

let fluffy = new Mammal('woof')
fluffy.talk() //woof

// Extension of an inherited class
// extends keyword creates a class as a CHILD of another class
// super calls the constructor of the inherited class 
// methods transfer over (Example you can use talk() without defining in new extended Pit class)

class Pit extends Mammal {
  constructor() {
    super('bark bark')
  }
}

let buster = new Pit()
buster.talk() // bark bark

//
class Humanz {
  constructor(name, age, weight){
    this.name = name;
    this.age = age;
    this.weight = weight;
  }
  greeting() {
    return "Hello " + this.name + "!";
  }
}

const pete = new Humanz('Pete', 28, '152lbs')

pete.greeting() //Hello Pete!

//extension of Humanz class
//super - since pulling from inherited class you dont need to rewrite 'this.name = name'
// also don't have to re-state any method inherited such as greeting

class Robot extends Humanz {
  constructor(model, name, age, weight){
    super(name, age, weight)
    this.model = model
  }
  missionStatement() {
    return `I am a ${this.model} ${this.name} sent back to kill John Connor`
  }
}

const arnold = new Robot('T800', 'Terminator', '10days', '500lbs')

arnold.greeting() //Hello Terminator!
arnold.missionStatement() //I am a T800 Terminator sent back to kill John Connor

