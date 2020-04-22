// Homework

// 1. Use a do...while loop to console.log the numbers from 1 to 1000.
const oneThousand = () => {
  let x = 0
  let results = []

  do {
    x ++
    results.push(x)
  } while (x <= 1000) 

  return results
} 
console.log(oneThousand())


// 2. Create an object (an array with keys and values) called person with the following data:
/*
  firstName: "Jane"
  lastName: "Doe"
  birthDate: "Jan 5, 1925"
  gender: "female"
*/

const person = {
  firstName: "Jane",
  lastName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female"
}
person.birthDate.indexOf(',')
person.birthDate.slice(6)


// 3. Use a for...in loop and if statement to console.log the value associated with the key birthDate if the birth year is an odd number.
const oddBday = (obj) => {
  for (let items in obj) {
    let value = obj[items].indexOf(',')
    let year = obj[items].slice(value + 1) 

    if (year %2 !== 0) {
      return `Odd Year Birthday`
    } else {
      return `Even Year Birthday`
    }
  }
}
console.log(oddBday(person))


// 4. Create an arrayOfPersons that contains multiple objects. You can simply copy/paste the person object you made above multiple times. Feel free to change the values to reflect multiple people you might have in your database.

const arrayOfPersons = [
  {
    firstName: "Jane",
    lastName: "Doe",
    birthDate: "Jan 5, 1925",
    gender: "female"
  }, 
  {
    firstName: "Doug",
    lastName: "Smith",
    birthDate: "Aug 13, 1967",
    gender: "male"
  }, 
  {
    firstName: "Julie",
    lastName: "Reyes",
    birthDate: "Nov 22, 1991",
    gender: "female"   
  }
]
console.log(arrayOfPersons[0].birthDate.slice(-4))

// 5. Use .map() to map over the arrayOfPersons and console.log() their information.
const personsInfo = arrayOfPersons.map(elem => {
  let info = Object.values(elem)
  return info
})
console.log(personsInfo)


// 6. Use .filter() to filter the persons array and console.log only males in the array.
const personsIsMale = arrayOfPersons.filter(elem => {
  if (elem.gender === 'male') {
    return elem
  } else {
    //do nothing
  }
})
console.log(personsIsMale)


// 7. Use .filter() to filter the persons array and console.log only people that were born before Jan 1, 1990.
const bornBefore1990 = arrayOfPersons.filter(elem => {
  let date = elem.birthDate.slice(-4)
  if (date < 1990) {
    return elem
  } else {
    //do nothing
  }
})
console.log(bornBefore1990)