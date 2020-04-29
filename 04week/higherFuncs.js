// PreWork

// Some of the most commonly used array methods are higher-order-functions, or functions that take another function as one of their parameters. 
// These functions are useful because they make your code more concise and easier to understand. Three of them are: 
// 1.) Array.prototype.forEach
// 2.) Array.prototype.map
// 3.) Array.prototype.filter


// * .forEach() - method that takes a callback function as its only parameter and iterates through all values in an array & uses the callback function, () => {}, to do something with the values
// for(let i =0; i < arr.length; i++){//do something} is essentially the funcationality of a forEach loop in long-hand

const colors1 = ['orange', 'red', 'blue']

colors1.forEach((color) => {
  console.log(`Favorite color is ${color}`)
})
// Favorite color is orange
// Favorite color is red
// Favorite color is blue


// .map() - method used to create a new array that is in someway, a transformation of an existing array. Similar to a forEach loop, it takes a callback function, () => {}, as it's only parameter and passes every value/element through it. In the new array returned by the map method, each new value is assigned to be equal to whatever the callback function returns when passed the original value. 

const colors2 = ['yellow', 'green', 'purple']

const tieDyes = colors2.map((color) => {
  console.log(`tieDyed-${color}`)
})
// tieDyed-yellow
// tieDyed-green
// tieDyed-purple


// .filter() - method that iterates through an array and returns only values that follow a specified rule. The filter method is passed a callback function, () => {}, as its only parameter. The filter method returns a new array by passing each value in the original array into the callback function. If the callback function returns true or any truthy value, that value is included in the new array, but if the callback function returns false or any falsy value, that value is not included in the new array. If all of the values passed into the callback function return a falsy value, then the filter method returns an empty array: []

const colors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple']

const sixOrMore = colors.filter((color) => {
  return color.length > 5
})

console.log(sixOrMore)
// ['orange', 'yellow', 'purple']

console.log('')
console.log('****************')


// ***YouTube: Brad Traversy
const companies = [
  {name: 'Company One', category: 'Finance', start: 1981, end: 2003},
  {name: 'Company Two', category: 'Retail', start: 1992, end: 2008},
  {name: 'Company Three', category: 'Auto', start: 1999, end: 2007},
  {name: 'Company Four', category: 'Retail', start: 1989, end: 2010},
  {name: 'Company Five', category: 'Technology', start: 2009, end: 2014},
  {name: 'Company Six', category: 'Finance', start: 1987, end: 2010},
  {name: 'Company Seven', category: 'Auto', start: 1986, end: 1996},
  {name: 'Company Eight', category: 'Technology', start: 2011, end: 2016},
  {name: 'Company Nine', category: 'Retail', start: 1981, end: 1989},
]

const ages = [33, 12, 29, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

// 1.) forEach - better/more elegant way to iterate through than a regular for loop

// Regular for loop
for (let i=0; i<companies.length; i++){
  console.log(companies[i].name)
}

// forEach - cleaner with no need for i iterators
companies.forEach((company) => {
  console.log(company.name)
})

console.log('.filter ----------')


// 2.) filter - defines a variable & takes in a function. Returns a new array by passing each value in the original array into the callback function. If the callback function returns true or any truthy value, that value is included in the new array

// 2.a.) print ages 21 & over

// Regular for loop: 
let canDrink = []
for (let i=0; i<ages.length; i++) {
  if (ages[i] >= 21) {
    canDrink.push(ages[i])
  }
}
console.log(canDrink)

// Filter Loop: 
// notice I dont have to create an empty array variable. the .filter() auto creates one and puts any value that returns true or truthy
const legalDrinker = ages.filter((age) => {
  if (age >= 21){
    return true
  }
})
console.log(legalDrinker)

// EVEN CLEANER way to write this filter since filter is automatically checking for truth you don't need to say it. And since only 1 parameter you don't need parathesis around 'age' parameter
const legalDrinkers = ages.filter(age => age >= 21)
console.log(legalDrinkers)

console.log('----------')


// 2.b.) Filter out companies that are Retail

const retailCompany = companies.filter ((company) => {
  if (company.category === 'Retail') {
    return true
  }
})
console.log(retailCompany)

// Cleaner version
const retailCompanies = companies.filter(company => company.category === 'Retail')
console.log(retailCompanies)

console.log('----------')

// 2.c.) Get companies that started in the 80s

const startedIn80s = companies.filter((year) => {
  if (year.start >= 1980 && year.start < 1990) {
    return true
  }
})
console.log(startedIn80s)

// Cleaner version
const foundedIn80s = companies.filter(year => (year.start >= 1980 && year.start < 1990))
console.log(foundedIn80s)

console.log('----------')

// 2.d.) Get companies that have existed for 10 or more years. Remember End Year - Start Year because end is the bigger number 

const decadeClub = companies.filter(years => (years.end - years.start >= 10))

console.log(decadeClub)


console.log('.map ----------')
// 3.) map - creates an array

// 3.a.) Create an array of company names

// Slow way get just the objects in the array
const getNames1 = (arr) => {
  let newArray = []
  for (let i=0; i<arr.length; i++){
    newArray.push(arr[i].name)
  }
  return newArray
}
console.log(getNames1(companies))

// the map way
const getNames2 = companies.map(job => job.name)
console.log(getNames2)

console.log('----------')

// 3.b.) Create an array with start and end date
const startEnd1 = companies.map((job) => {
  return `${job.name} [${job.start} - ${job.end}]`
})
console.log(startEnd1)

// cleaner version
const startEnd2 = companies.map(job => `${job.name} [${job.start} - ${job.end}]`)
console.log(startEnd2)


console.log('----------')

// 3.c.) From the ages array use .map for Math problems

// For Loop - long way
const agesSqrt1 = (arr) => {
  let newArray = []
  for (let i=0; i<arr.length; i++){
    newArray.push(Math.sqrt(arr[i]))
  }
  return newArray
}
console.log(agesSqrt1(ages))

// Map - more efficient way
const agesSquare = ages.map(age => Math.sqrt(age))
console.log(agesSquare)

console.log('----------')

// Map - take ages array & get square root then multiply by 2 in the same variable
const ageMap = ages
  .map(age => Math.sqrt(age))
  .map(age => age * 2)

console.log(ageMap)


console.log('sort----------')
// 4.) sort method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending

// 4.a.) Sort companies by start date: earliest to latest 
const sortedCompanies = companies.sort((c1, c2) => {
  if (c1.start > c2.start) {  //comparing two values
    return 1  //1 will move the company up one
  } else {
    return -1 //-1 will move the companye down one
  }
})
console.log(sortedCompanies)

// cleaner version
const sortCompanies = companies.sort((a, b) => a.start > b.start ? 1 : -1)
console.log(sortCompanies)

console.log('----------')

// 4.b.) Sort ages

// youngest to oldest
const ascendingAges = ages.sort((a, b) => a - b)
console.log(ascendingAges)

// oldest to youngest
const descendingAges = ages.sort((a, b) => b - a)
console.log(descendingAges)


console.log('reduce----------')

// 5.) reduce method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// 5.a.) Take ages array and add them up

// regular for loop - long way
const addUpAges1 = (arr) => {
  let total = 0
  for (let i =0; i<arr.length; i++) {
    total += arr[i]
  }
  return total
}
console.log(addUpAges1(ages))

// reduce way
const addUpAges2 = ages.reduce((total, age) => {
  return total + age
}, 0); //0 represents the start parameter of 'total'

console.log(addUpAges2)

// reduce super clean way
const addUpAges3 = ages.reduce((total, age) => 
  total + age, 0)

console.log(addUpAges3)

console.log('----------')
// 5.b. Get total years of all companies (add up the amount of time all comanies have been open)

// regular for loop
const allYears1 = (arr) => {
  let total = 0
  for (let i=0; i<arr.length; i++) {
    total += arr[i].end - arr[i].start
  }
  return total
}
console.log(allYears1(companies))

// reduce
const allYears2 = companies.reduce((total, time) =>
  total + (time.end - time.start), 0)

console.log(allYears2)


console.log('Combine Methods ----------')

// 6) Combine Methods
const theirAges = [33, 12, 29, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const combined = theirAges
  .map(age => age * 2) //all ages x2
  .filter(age => age >= 40) //return agesx2 40 & up
  .sort((a1, a2) => a1 > a2 ? 1 : -1) //lowest to highest
  .reduce((total, age) => total + age, 0) //add up all values
console.log(combined)

console.log('')
console.log('****************')


// ***CodePen
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

//1.  Modify the code below so that it console.logs each day of the week
days.forEach(day => console.log(day))


//2. The code below returns an array full of nulls.  Why?  Fix the code so that each value in the daysToCode array ends with "I will practice Javascript."
const daysToCode = days.map(day => {
  let codingDay = `${day} I will practice JavaScript.`
   //your code below this line
  return codingDay
})

console.log('days to code :', daysToCode)


//3. Maybe you only want to know what days you have a programming class which meets Tuesday and Thursday.  Complete the code below to create a new array with only the days that start with T.  Hint: search the web to learn how to use String.protoype.charAt()

const daysWithClass = days.filter(day => day.charAt(0) === 'T')

console.log('days with class:', daysWithClass)


//4. Try on your own to use the filter method to create an array of only the days starting with the letter S, then use the the map method to create a new Array that looks like this:
//["Hooray!  It's the weekend!  I love Saturdays!", "Hooray!  It's the weekend!  I love Sundays!"]
//and then use the forEach method to console.log this:  
//"Hooray!  It's the weekend!  I love Saturdays!  Let's party."
//"Hooray!  It's the weekend!  I love Sundays!  Let's party."

const weekend = days
  .filter(day => day.indexOf('S') === 0)
  .map(day => `Horray! It's the weekend! I love ${day}s!`)

weekend.forEach(day => console.log(`${day} Let's party.`))


console.log('')
console.log('****************')

// ***Practice It

// 1.) forEach - build a function that returns the sentence: "The color we're on right now is: orange" 

const theColors = ['orange', 'red', 'blue', 'yellow', 'green', 'purple']

theColors.forEach(color => console.log(`The color we're on right now is: ${color}`))


// 2.) map - build a function that return the sentence: `The user's name is: ${name}`

const theUsers = ['Olivia', 'Victoria', 'Paulina', 'Yolanda', 'Georgina', 'Bill']

const theseUsers = theUsers.map(user => `The user's name is: ${user}`)

console.log(theseUsers)


// 3.) filter - build a function that only returns words that are less than 4 letters in length

const theWords = ['peaceful', 'red', 'ants', 'lovely', 'bud', 'witness', 'purple', 'clouds']

const tinyWords = theWords.filter(word => 
  word.length < 4)

console.log(tinyWords)


console.log('')
console.log('****************')

// ***See It: MPJ YouTube
// Higher Order Functions

const animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'},
]

// 1.) filter - returns true/truthy items

// regular for loop for dog names
const doggos1 = (arr) => {
  let newArr = []
  for (let i=0; i<arr.length; i++) {
    if (arr[i].species === 'dog') {
      newArr.push(arr[i].name)
    }
  }
  return newArr
}
console.log(doggos1(animals))

// filter for dogs then forEach for their names
const doggos2 = animals.filter(pet => 
  pet.species === 'dog')

doggos2.forEach(dog => console.log(dog.name) )

console.log('-------------')

// 2. map - creates an array, just like filter. However, filter removes items while Map keeps the array length the sam but transforms the items

// array of all animal names

// regular loop 
const animalNames1 = (arr) => {
  let newArr = []
  for (let i=0; i<arr.length; i++) {
    newArr.push(arr[i].name)
  }
  return newArr
}
console.log('for:', animalNames1(animals))

// For Of Loop
const animalNames3 = (arr) => {
  let newArr = []
  for (let pet of arr) {
    newArr.push(pet.name)
  }
  return newArr
}
console.log('for of:', animalNames3(animals))

// Map Method
const animalNames2 = animals.map(pet => pet.name)

console.log('map:', animalNames2)


console.log('-------------')

// 3.a.) reduce - this is the multi-tool of list transformations. Because it can be used to express ANY list transformation (filter, find, map, etc...)
// If you can't find a higher function that does a very specific task then you can default to reduce

// Example: return total amount
const orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]

// regular loop 
const amounts1 = (arr) => {
  let sum = 0
  for (let i=0; i<arr.length; i++) {
    sum += arr[i].amount
  }
  return sum
}
console.log('for:', amounts1(orders))

// reduce way - requires an Object (this example it's 'sum' and it's value begins at 0) - this makes it different from the other functions we've been using
// like the other functions it will take in an iterator, but it goes AFTER the object (this example it's the x)

const amounts2 = orders.reduce((sum, x) => 
  sum + x.amount, 0)

console.log('reduce:', amounts2)

