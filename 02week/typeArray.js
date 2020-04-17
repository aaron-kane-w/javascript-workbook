// Pre-Work: Type Array
// all arrays are objects, but not all objects are arrays

// arrays are orgainzed as an index
const arrOfStrings = ['cat', 'dog', 'fish', 'rock', 'kid']
console.log(arrOfStrings[1])

// add to an array using .push()
arrOfStrings.push('dragon')
console.log(arrOfStrings)

// change an array value
arrOfStrings[0] = 'tiger'
console.log(arrOfStrings)

// arrays can hold primitive values, functions & even more arrays

// array of functions
const addTwo = (num1, num2) => num1 + num2
const subTwo = (num1, num2) => num1 - num2

const addAndSub = [addTwo(3, 4), subTwo(3, 4)]
console.log(addAndSub)

// array within array is called NESTING aka multi-dimensional array
const anotherArray = [
  ['red', 'white', 'blue'],
  ['green', 'white', 'orange'],
  ['yellow', 'purple', 'pink']
]
console.log(anotherArray[2])
// index into the array of an array
console.log(anotherArray[2][1])

// another nested aka multi-dimensional array
const numArr = [
  [4, 7, 9],
  [10, 45, 300],
  [88, 64, 37, 93]
]
console.log(numArr[1][2])
console.log(numArr[2][1])
console.log(numArr[0][0])


// Looping to get array sum
const myArr = [2, 12, 35, 77, 87, 101]

const reportSum = (x) => {
  let sum = 0

  for (let i = 0; i < x.length; i++) {   
    sum += x[i]
  }
  return sum
}
console.log(reportSum(myArr))

// Create  a loop to print out numbers 1-10
for (let i = 0; i <= 10; i++) {
  console.log(i)
}

// Create a for loop to print every multiple of 3 up to 100.
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}


// // ***ARRAY METHODS***
/* there are many and below are some & those with ()* are Mutating Methods 
.slice() - returns the index sections you've determine. This does NOT change the original array
.splice()*  - returns the index sections you've determine. Like slice EXECPT it changes the original array (MUTATING METHOD)
.toString() - returns a string representing the specified array and its elements
.concat() - merge two or more arrays into one array
.includes() - determines whether an array includes a certain value returning true/false
.pop()* - removes the last element from an array and returns that element. This method changes the length of the array.
.push()* - adds one or more elements to the end of an array and returns the new length of the array. Original array becomes mutated
.join() - returns a new string by concatenating all of the elements in an array
.length - does not use the () & returns the number of elements in that array
.indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
.shift()* - removes the first element from an array and returns that removed element. This method changes the length of the array.
.unshift()* - adds one or more elements to the beginning of an array and returns the new length of the array.
.every() -  tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
.flat() - creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. Example [1, 2, [3, 4]] returns [1, 2, 3, 4, 5]
.find() - returns the value of the first element in the provided array that satisfies the provided testing function
.reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first
.forEach() - executes a provided function once for each array element
*/

// .slice() - returns the index sections you've determine. This does NOT change the original array
let array1 = [1, 2, 3, 4, 5, 6, 7]

// returns the 4th index on [5-7]
console.log(array1.slice(4))
// starts at 4th index and ends before 6th index [3-6]
console.log(array1.slice(2, 6))


// .splice() - returns the index sections you've determine. Like slice EXECPT it changes the original array (MUTATING METHOD)
let array2 = ['a','b','c','d','e','f','g']

// returns 4th index on [e-f]
console.log(array2.splice(4))
// Mutating method: returns [a-d]
console.log(array2)


// .concat() - merge two or more arrays into one array
let arr3 = array1.concat(array2)
console.log(arr3)


// .pop() - removes the last element from an array and returns that element. This method changes the length of the array.

let arr4 = ['one', 'two', 'three', 'four', 'five']

// returns five 
console.log(arr4.pop())
// Mutated method: returns [one-four]
console.log(arr4)


// .push() - adds one or more elements to the end of an array and returns the new length of the array. Original array becomes mutated
const animals = ['ant', 'cat', 'dog']

// returns new length of array. Ex) 4
console.log(animals.push('duck'))
// mutated method: returns [ant-duck]
console.log(animals)


// .join - returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. 
const elements = ['Fire', 'Air', 'Water']
  
// returns string 'Fire,Air,Water'
console.log(elements.join())
  

// .indexOf() - returns the first index at which a given element can be found in the array, or -1 if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']

// returns 1
console.log(beasts.indexOf('bison'))
// starts at index 2, retuns 4
console.log(beasts.indexOf('bison', 2))
// returns -1
console.log(beasts.indexOf('giraffe'))


// .shift()* - removes the first element from an array and returns that removed element. This method changes the length of the array.
const array3 = [1, 2, 3];

// returns 1
console.log(array3.shift())
// mutating method: retuns [2, 3]
console.log(array3)


// .unshift() - adds one or more elements to the beginning of an array and returns the new length of the array.
const arr5 = [1, 2, 3];

// returns 5
console.log(arr5.unshift(4, 5));
// Mutating Method: returns [4, 5, 1, 2, 3]
console.log(arr5);


// .every() -  tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
const arr6 = [11, 18, 25, 43]

const above10 = (x) => x > 10
const above20 = (x) => x > 20

// returns true
console.log (arr6.every(above10))
// returns false
console.log (arr6.every(above20))


// .find() - returns the value of the first element in the provided array that satisfies the provided testing function

const arr7 = [5, 12, 8, 130, 44, 12]

const searchFor = (x) => x > 13

// returns 130
console.log(arr7.find(searchFor))


// .reverse() - reverses an array in place. The first array element becomes the last, and the last array element becomes the first
const arr8 = ['earth', 'wind', 'fire']

// returns ['fire', 'wind', 'earth']
console.log(arr8.reverse())


// .forEach() - executes a provided function once for each array element
const arr9 = ['a', 'b', 'c']

// returns a b c 
arr9.forEach(x => console.log(x))


// ***CODEPEN Assignment***
//1. Below an array, arr1, is declared
const arr1 = ['a', 'b', 'c']
//fix the console.log below to display the first element of arr1 (the letter 'a')
console.log('1\)', arr1.slice(0, 1))

//2. use Array.push to add the letter 'd' to the end of the arr1, the console.log below should now show ['a','b','c','d']
arr1.push('d')
console.log('2\)', arr1)

//3. use Array.concat to add the letter 'e' to the end of arr and store it to a new array called arr2.  Array 1 should stay the same and array 2 should be ['a', 'b', 'c', 'd', 'e']
const arr2 = arr1.concat('e')
console.log('3\) Array 1:', arr1, ' Array2: ', arr2)

//4. Use the .length property of arr1 to change the value of arr1Length from 0, to the length of arr1 
const arr1Length = arr1.length
console.log('4\) ', arr1Length)

//5. Add the letter 'f' to arr2 and store the newLength in a constant called newLength (HINT: use Array.push), then use console.log() to display the value of newLength.  Array 2 should now be ['a', 'b', 'c', 'd', 'e', 'f']
arr2.push('f')
const newLength = arr2
console.log('5\) Array 2 New Length: ', newLength)

//6. Look up the Array.pop() method.  Use Array.pop() to remove the last letter of arr1 and store it in a constant named lastLetter, then use console.log to display the value of lastLetter
const lastLetter = arr1.pop()
console.log('6\) Array 1 Last Letter: ', lastLetter)

//7. Re-assign the third letter of arr1 from 'c' to 'e'.  arr1 should now be ['a', 'b', 'e']
arr1.splice(2, 1, 'e')
console.log('7\) Array 1: ', arr1)

//8.  A multidimensional array is declared below
const menu = [
  ['Pizza', 9.99],
  ['Breadsticks', 3.99],
  ['Pasta', 7.99],
  ['Calzone', 6.99]
]

//change the numbers below to display the word 'pasta'
console.log('8\)', menu[2][0])



// ***PreWork Array Practice***
//create an array called myName, have each item be a letter of your myName
const myName = ['a', 'a', 'r', 'o', 'n']

//store the length of the array to a variable nameLength
const nameLength = myName.length

//add a new item to the end of the myName array. The item should be a string.
myName.push('w')

// Remove the last item in myName array and store it's value to an array called deleted letter.
myName.pop()

// 
const sentenceArr = [
 ['h','e','l','l','o'],
 ['m','y'],
 ['n','a','m','e']
]

// store the last letter of the first array in sentenceArr to a variable called theLastLetter
const theLastLetter = sentenceArr[0].pop()

//change the 'n' in the last array to an 'N'
sentenceArr[2].splice(0, 1, 'N')

// use .push() to add to end of an array
sentenceArr.push(['i', 's'])

// use .shift() to add to the beginning of the index
sentenceArr.shift()

// use .pop() to remove the last item in the array
sentenceArr.pop()