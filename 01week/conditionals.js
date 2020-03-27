// Class Work

//  write a function that takes in 3 variables &  check if they are all strings

const areStrings = (x, y, z) => {
  x = 'Brad'
  y = 'Steve'
  z = 'John'

  if (typeof x === 'string' && typeof y === 'string' && typeof z === 'string') {
    return `These are strings`
  } else {
    return `These are not strings`
  }
}

console.log(areStrings())


// Return a function if a grade is passing or failing
const isPassing = (grade) => {
  if (grade >= 70) {
    return `Passed`
  } else {
    return `Failed`
  }
}
console.log(isPassing(83))

// Letter grade
const letterGrade = (grade) => {
  if (grade >= 90) return `A`
  else if (grade >= 81) return `B`
  else if (grade >= 71) return `C`
  else if (grade >= 61) return `D`
  else return `Fail`
}
console.log(letterGrade(99))

    // NOTE: running all IF statements forces JS to run through EVERY statement regardless of when the correct answer is found. However, ELSE IF statements, JS will stop (break out) once an answer is found. 