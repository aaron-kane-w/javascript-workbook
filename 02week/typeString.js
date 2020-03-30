// Pre-Work: Type String
// Strings have built-in methods we can use

// Strings & Template Literal
const characterName = 'Batman'
const villan = 'Joker'
console.log(`${characterName}'s rival is the ${villan}`)


// Methods are functions built into an Object. Therefore 'addNumbers' is a method within the object 'myObject'
const myObject = {
  id: 1693,
  name: "John Proctor",
  addNumbers: function(num1, num2) {
    return num1 + num2
  }
}
// dot notations allow us to access an object's properties (id, name, method)
console.log(myObject.id) 
console.log(myObject.name)
console.log(myObject.addNumbers(8, 12))

// String Methods 
  /* (few below)
  .length returns the number of characters in a string including spaces. Note: length doesn't require parenthesis.
  .indexOf() method returns the index of (the position of) the first occurrence of a specified text in a string.
  .lastIndexOf() method returns the index of the last occurrence of a specified text in a string.
  .search() method searches a string for a specified value and returns the position of the match.
  .split() changes a String to an Array - Useful for PigLatin
  .slice() takes in two parameters to extract and return a part of a string. Only need 1 parameter if you're keeping everything after slice
  .concat() ...(see docs)
  .substring() ...(see docs)
  .replace() ...(see docs)
  .charAt() ...(see docs)
  .trim() ...(see docs) */

const exString = 'Hello World'
console.log(exString.length)
console.log(exString.indexOf('W'))
console.log(exString.lastIndexOf('o'))
console.log(exString.search(' '))
console.log(exString.replace('Hello', 'Hola'))
console.log(exString.slice(0, 5))
console.log(exString.slice(6))
console.log(exString.split(' '))
  


// bracket notation [] - access index position
const myString = 'LOVE'
console.log(myString[2])

// because string positions are indexed, we can use loops
const loop = (x) => {
  for (i = 0; i < x.length; i++) {
    console.log(x[i])
  }
}
loop(myString)
  
// for loops
const wantList = [
  'couch',
  'oreos',
  'camera lens',
  'iPhone',
  'glock 19'
]

const shopping = (x) => {
  let list = []
  for (let i = 0; i < x.length; i++){
    console.log(`i is ${i} and that is a ${x[i]}`)
    list.push(`1x ${x[i]}`)
  }
  return list
}
console.log(shopping(wantList))
