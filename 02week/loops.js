// Loops are a way to repeat, or iterate, over a JavaScript thing and perform a certain block of code over and over until the stop condition is met.

/* MOST common loops from most used to least

for/let - loops through a block of code a specific number of times

for/of - loops through the values of an iterable object like an Array.

for/in - loops through the properties of an object or indexes of an array.

while - loops through a block of code while a specified condition is true

do/while - also loops through a block of code while a specified condition is true */


// ***For-let Loops*** 
// repeats until specified condition evaluates to false
// for ([Initial Expression]; [Stop Condition]; [Increment Expression]) { Action Statement }

// print out numbers 1-10
const countUpToTen = () => {
  for (let i = 1; i <= 10; i++){
    console.log(i);
  }
}
countUpToTen()

// print every multiple of 3 up to 100
const multiOfThree = () => {
  let multiples = []
  for (let i = 1; i <= 100; i++){
    if (i % 3 === 0){
      multiples.push(i)
    }
  }
  return multiples
}
// returning array prints as a string by using .join() which is also adding commas and spaces
console.log(multiOfThree().join(', '))


// ***For/In Loop***
// used to iterate over Object which have key:value pairs
// returns the keys or indexes of the thing its iterating over

// the for/in loop will iterate over the person object (below) using the x variable as a placeholder for each of the keys in the object: firstName, lastName, then age. Its like saying, "for however many keys are in the object, use x to describe each one as we loop over the object.

// Object person run through loopOverObject function
const person = {
  firstName: "Peter", 
  lastName: "Wisser", 
  age:25
};

const loopOverObject = (obj) => {
  let text = "";
  // x is a place holder for Object values
  let x;

  for (x in obj) {
    // text adds object value + a space (for the next value which will follow in the loop)
    text += obj[x] + " ";
  }
  return text
}
// prints: Peter Wisser 25
loopOverObject(person)


// ***For/Of Loop***
// These loops work the same way as the For/In loop but instead of Objects, its used on Arrays.

const writers = ["Dickinson", "Steinbeck", "Huxley",]

const loopOverArray = (arr) => {
  let text = "I love to read ";
  let author;

  for (author of arr) {
    text += author + " and... ";
  }
  return text
}
// prints: I love to read Dickinson and... Steinbeck and... Huxley and...
loopOverArray(writers)


// ***Do/While Loops***
// loop repeats something until the condition is evaluated as false
// rare to use this loop with front-end
const celebrateBirthday = () => {
  let age = 0;

  do {
    // each time the loop runs add 1 to the age variable
    age += 1;
    console.log("Happy Birthday!! Today you are " + age + " year old!");
    // when are is equal or greater than 5 stop the action statement & break out of the loop
  } while (age < 5);
}
celebrateBirthday()


// ***While Loops***
// executes its Action Statement as long as a specified Condition evaluates to true
// rare to use this loop with front-end
const logGrade = () => {
  let grade = 0;

  while (grade < 70){
    grade += 10;
    console.log("You have a " + grade + " in this class and cannot move on to the next class until your grade is higher than a 70.");
  }
}
logGrade()


// ***Infinite Loop***
// A loop without a stop condition that will crash the browser or JS program you're in. AVOID AT ALL COST! 


// *PROJECT 1: 
const users = {
  232: 'renee',
  5656: 'mark',
  5546: 'devin',
  3353: 'grace',
  4894: 'michael',
  6644: 'becca'
}
// * Write a for/of loop that console logs each of the user names in the users object. 
// NOTE: Objects are not iterables which is necessary for a for/of loop

// 1st create a variable that turns Object users values into an array, which are iterable & can be used in a for/of loop
const objToArray = Object.values(users)

const forOfLoop = (arr) => {
  let names = ''
  let x

  for (x of arr) {
    names += x + ' '
  }
  return names
}
console.log(forOfLoop(objToArray))


// * Write a for/in loop that console logs each of the keys in the users object
// NOTE: For/In loops don't have the same dilemma as For/Ofs and can access the Object directly

const forInLoop = (obj) => {
  let theKeys = ''
  let x

  for (x in obj) {
    theKeys += obj[x] + ' '
  }
  return theKeys
}
console.log(forInLoop(users))


// // *PROJECT 2:
// 1.) Create an object with keys and values called "person" with the following data:
  // firstName: “Jane”
  // lastName: “Doe”
  // birthDate: “Jan 5, 1925”
  // gender: “female”

const persons = {
  firstName: 'Jane',
  lastName: 'Doe',
  birthDate: 'Jan 5, 1925',
  gender: 'female'
}

// 2.) Use a for…in loop to console.log each key.
const objKeys = (obj) => {
  let str = ''

  for (let keys in obj){
    str += keys + ' '
  }
  return str
}
console.log(objKeys(persons))

// 3.) Create an array of 5 objects that have the same structure as "person" with the same keys but with different values.
const people = [
  {
    firstName: 'Joe',
    lastName: 'Rogan',
    birthDate: 'Aug 11, 1967',
    gender: 'male'
  }, 
  {
    firstName: 'Dana',
    lastName: 'White',
    birthDate: 'Jul 28, 1969',
    gender: 'male'
  }, 
  {
    firstName: 'Michelle',
    lastName: 'Obama',
    birthDate: 'Jan 17, 1964',
    gender: 'female'
  }, 
  {
    firstName: 'Elon',
    lastName: 'Musk',
    birthDate: 'Jun 28, 1971',
    gender: 'male'
  }, 
  {
    firstName: 'Taylor',
    lastName: 'Swift',
    birthDate: 'Dec 13, 1989',
    gender: 'female'
  }
]

// 4.) Write a for/of loop inside a for/in loop that logs each of the values for all 5 persons

const objectVals = (array) => {
  for (let objects of array){
    for (let values in objects) {
      console.log(objects[values])
    }
  }
}
objectVals(people)


// 5.) Then use a for…of loop and if statement to console.log only the with the keys: firstName and birthDate.
const theirBday = (arr) => {
  for (let i=0; i < arr.length; i++){
    console.log(`${arr[i].firstName}'s birthday is ${arr[i].birthDate}`)
  }
}
theirBday(people)