// Class Work

// Return a function if a grade is passing or failing
const isPassing = (grade) => {
  if (grade >= 70) {
    return `Passed`
  } else {
    return `Failed`
  }
}
console.log(isPassing(83))

// Return a letter grade
const letterGrade = (grade) => {
  if (grade >= 90) return `A`
  else if (grade >= 81) return `B`
  else if (grade >= 71) return `C`
  else if (grade >= 61) return `D`
  else return `Fail`
}
console.log(letterGrade(99))

    // NOTE: running all IF statements forces JS to run through EVERY statement regardless of when the correct answer is found. However, ELSE IF statements, JS will stop (break out) once an answer is found. 


// PreWork

// create function that returns a template literal ``
const name = 'Jolly'
const age = 8

const thisGuy = (userName, userAge) => `${userName} is ${userAge} centuries old`

console.log(thisGuy(name, age))


// Empty (zero out the larger value): So if X is greater the Y, then X will become 0 or vice versa
const bucketX = 18
const bucketY = 20

const checkWater = (x, y) => {
  if (x > y) {
    x = 0
  } else {
    y = 0
  }
  return `The value of x is ${x}, and the value of y is ${y}`
}
console.log(checkWater(bucketX, bucketY))


// Truthy


// Run a function 'isTrue' through another function 'callIsValid'
const input1 = 'fuzzyPants'
const input2 = ''
  // '' = undefined = falsey

const isTrue = (x, y) => {
  if (x && y) return true
    // simple way to write a true statement (x && y)
}

const callIsValid = (z) => {
  if (z) {
    console.log('Let user in')
  } else {
    console.log('No, deny user')
  }
}
callIsValid(isTrue(input1, input2))
  // function 'callIsValid' is running the 'isTrue' function

// 
const hisName = 'Jason'
console.log(typeof hisName)
  // returns string

const nameStr = (x) => {
  console.log(typeof x)
    // returns string

  if (typeof x === String) {
    return `${x} is a string`
  } else {
    return `${x} is not a string`
  }
    
}
console.log(nameStr(hisName))
  // Odd it returns that Jason isn't a string when running (typeof x === String)
  // DO RESEARCH ON THIS


// Math
const random = Math.random() * 5
console.log(random)
  // returns random number w/ decimals 0-5
console.log(Math.floor(random))
  // returns random whole number 0-5
console.log(parseInt(random, 10))
  // also returns random whole number 0-5 using base 10


// Trim - removes extra white space
const jerry = ' Jerry  '
console.log(jerry.trim())
  // returns Jerry with no whitespace


// Array with a forEach using IF statement with an OR
const products = ['mushrooms', 'steak', 'potatoes', 'brocolli', 'salmon']

const meats = products.forEach( x => {
  if (x === 'steak' || x === 'salmon') {
    console.log(x)
  } else {
    console.log(x + '(v)')
  }
})


// Switch Statements - alternative to very long If/Else statements
const isColor = (x) => {

let color = x

switch(color) {
  case 'red':
    return `color is red`;
      break;
  case 'blue':
    return `color is blue`;
      break;
  case 'green':
    return `color is green`;
      break;
  default: 
    return `not a color`
      break;
}
}
console.log(isColor('blue'))

// Another switch statement

const what = (x) => {

let name = x

switch(name) {
  case 'Aaron':
    return `This fool here is ${name}`;
    break;
  case 'Pete':
    return `This fool here is ${name}`;
    break;
  case 'Jake':
    return `This fool here is ${name}`;
    break;
}
}
console.log(what('Aaron'))

// Another switch

const rpsGame = (hand1, hand2) => {

switch (hand1, hand2) {
  case 'rock', 'rock':
    return "Draw";
    break;
  case 'paper', 'paper':
    return "Draw";
    break;
  case 'scissors', 'scissors':
    return "Draw";
    break;
  default: 
    return `Answer unknown`
}
}
console.log(rpsGame('rock', 'rock'))


// Switch statements can sometimes be used to more concisely express conditional operations:
// A switch statement is used if you are only evaluating the value of one constant.
const numbers = [1, 2, 3, 4, 5];
const randomIndex = parseInt((Math.random() * 5), 10);
const randomNumber = numbers[randomIndex];

switch (randomNumber) {
  case 1:
    console.log(`The value at randomIndex ${randomIndex} is 1: ${randomNumber}`);
    break;
  case 2:
    console.log(`The value at randomIndex ${randomIndex} is 2: ${randomNumber}`);
    break;
  case 3:
    console.log(`The value at randomIndex ${randomIndex} is 3: ${randomNumber}`);
    break;
  default:
    // Statements executed when none of the cases match the switch expression
    console.log(`The value at randomIndex ${randomIndex} is 4 or more: ${randomNumber}`)
    break;
}


// Ternary Operator: ? / : can be used as a shorthand for if / else statements:

const randomNumbers = parseInt(Math.random() * 10, 10);

const isEvenOrOdd = (number) => {
  return number % 2 === 0 ? `even: ${number}` : `odd: ${number}`
}

isEvenOrOdd(randomNumbers)



// PRACTICE ASSIGNMENTS

// 1. sumOfTwoNums - write a function that returns the sum of two numbers if both arguments are numbers.
const sumOfTwoNums = (x, y) => {
  x = 2
  y = 7
  z = x + y
  return z
}
console.log(sumOfTwoNums())


// 2. bothTrue - write a function that returns 'both are true' if both arguments are true.
const bothTrue = (x, y) => {
  if (x === true && y === true) {
    return true
  } else return false
}
console.log(bothTrue(true, 4))


// 3. checkStrings - write a function that takes 3 parameters and if all 3 parameters are strings, return true
const areStrings = (x, y, z) => {
  x = 'Brad'
  y = 'Steve'
  z = true

  if (typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
    return `These are strings`
  } else {
    return `These are not all strings`
  }
}

console.log(areStrings())


// 4. evaluateMonth - write a switch statement that evaluates a variable month, and for each of the 12 months, returns the number of days in that month.

const daysInMonth = () => {
let month = new Date().getMonth()

  switch(month) {
    case 0: return `January has ${31} days`;
      break;
    case 1: return `February has ${28}/${29} days`;
      break;
    case 2: return `March has ${31} days`;
      break;
    case 3: return `April has ${30} days`;
      break;
    case 4: return `May has ${31} days`;
      break;
    case 5: return `June has ${30} days`;
      break;
    case 6: return `July has ${31} days`;
      break;
    case 7: return `August has ${31} days`;
      break;
    case 8: return `September has ${30} days`;
      break;
    case 9: return `October has ${31} days`;
      break;
    case 10: return `November has ${30} days`;
      break;
    case 11: return `December has ${31} days`;
      break;
  }
}
console.log(daysInMonth())



