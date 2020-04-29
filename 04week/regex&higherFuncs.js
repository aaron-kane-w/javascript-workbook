// PreWork

// Regular Expression (RegEx)
// You can use RegEx to quickly and efficiently find keywords or characters that you would otherwise have to type out manually.
// It finds patterns in a string

// Escape Character = \

// ***YouTube: https://www.youtube.com/watch?time_continue=1072&v=rPNGB0ZLvdw&feature=emb_logo

// construct a regex to 'match' the character a
let reg1 = /a/

// .test() to determine T/F
console.log(reg1.test('mace')) //true
console.log(reg1.test('bell')) //false
console.log(reg1.test('aaaa')) //true


console.log(reg1.test('A')) //false 
// regex is case sensitive

// to have regex search capitalization too the add i to the end of the varaible
let reg2 = /a/i
console.log(reg2.test('A')) //true

console.log('----------')

// regex with a min of 2 a's or A's
let reg3 = /a{2}/i
console.log(reg3.test('Airplane')) //false
console.log(reg3.test('Aaron')) //true
console.log(reg3.test('Aaaaron')) //true

console.log('----------')

//regex with 1 character between a & c
let reg4 = /a.c/i
console.log(reg4.test('atc')) //true
console.log(reg4.test('a2c')) //true
console.log(reg4.test('at2c')) //false

console.log('----------')

//regex with 1 or more character between a & c
let reg5 = /a.+c/i
console.log(reg5.test('at2fhuec')) //true

// regex to match specific letters
let reg6 = /[k,a,e]/i
console.log(reg6.test('kick')) //true
console.log(reg6.test('apple')) //true
console.log(reg6.test('onyx')) //false

console.log('----------')

// regex to match any letter
let reg7 = /[a-z]/i
console.log(reg7.test('Emilio')) //true

// regex to match any letter & any number
let reg8 = /[a-z0-9]/i
console.log(reg8.test('Emilio1932')) //true

// easier way to write all Alpha Numeric (upper & lowercase) use the lowercase \w
let reg9 = /\w/
console.log(reg9.test('Emilio1932')) //true

// Uppercase \W returns true for NON alpha numerics
let reg10 = /\W/
console.log(reg10.test('Emilio1932')) //false
console.log(reg10.test('?/!.,<>')) //true

// Match any digits with \d instead of [0-9]
let reg11 = /\d/
console.log(reg11.test('12345')) //true

// Match any non digits use \D
let reg12 = /\D/
console.log(reg12.test('Apple?')) //true

console.log('----------')

// Match any white space use \s
let reg13 = /\s/
console.log(reg13.test(' dog!')) //true
console.log(reg13.test('dog!')) //false

// Match any non white space use \S
let reg14 = /\S/
console.log(reg14.test('dog!')) //false

console.log('----------')

// Match date such as 08-14-1987
let reg15 = /\d\d-\d\d-\d\d\d\d/
console.log(reg15.test('08-14-1987')) //true
console.log(reg15.test(08-14-1987)) //false (must be string)

// Word must start with specific letter ^
let reg16 = /^t/i
console.log(reg16.test('the')) //true
console.log(reg16.test('Titan')) //true
console.log(reg16.test('hot')) //false 

console.log('----------')

// Word must end with specific letter $
let reg17 = /t$/i
console.log(reg17.test('the')) //false
console.log(reg17.test('Titan')) //false
console.log(reg17.test('hot')) //true

console.log('----------')

// Start & End with specific letter with only ONE character in between .
let reg18 = /^t.t$/i
console.log(reg18.test('tot')) //true
console.log(reg18.test('Toot')) //false

// Start & End with specific letter with potentially infinite character in between .+
let reg19 = /^t.+h$/i
console.log(reg19.test('teeth')) //true
console.log(reg19.test('Tooth')) //true


// Change a sentence from 'I am great to 'We are great
// /I am (?=great)/ = search for I am before great
let str = 'I am great'.replace(/I am (?=great)/, 'We are ')

console.log(str)

console.log(' ')


// ****YouTube: https://www.youtube.com/watch?v=sa-TUpSx1JA

// Escape Character = \
/*
.     Any character except new line
\.    periods
\d    Digit (0-9)
\D    Not a Digit 
\w    Word Character (a-z, A-Z, 0-9)
\W    Not a Word Character
\s    Whitespace (space, tab, newline)
\S    Not Whitespace 

\b    Word Boundary: ex) \bHi or Hi\b or \bHi\b
\B    Not a Word Boundary
^     Beginning of a String
$     End of a String

[]    Matches Characters in brackets
[^ ]  Matches Characters NOT in bracket
|     Either or
()    Group

QUANTIFIERS
*     0 or More
+     1 or More
?     0 or 1
{3}   Exact number (ex 3)
{1,5} Range (Min, Max)
*/

// 1) Match phone numbers regardless of what type of separator the number is using

let phNum1 = '800-478-4610'
let phNum2 = '900.541.3375'
let phNum3 = '555*345*7844'

// remeber . stands for any character
let reg20 = /\d\d\d.\d\d\d.\d\d\d\d/
reg20.test(phNum1) //true
reg20.test(phNum2) //true
reg20.test(phNum3) //true

// Match only 800 OR 900 numbers
let reg21 = /[89]00.\d\d\d.\d\d\d\d/
reg21.test(phNum1) //true
reg21.test(phNum2) //true
reg21.test(phNum3) //false

// Match using the exact number option {}
let reg22 = /\d{3}.\d{3}.\d{4}/
reg22.test(phNum1) //true

console.log('----------')

// 2) match all words that end in at but do NOT start with b
let ats = ['cat', 'mat', 'pat', 'bat']
let reg23 = /[^b]at/

const atsReg = ats.forEach(x => console.log(x, reg23.test(x)))
/* Returns
cat true
mat true
pat true
bat false
*/
console.log('----------')

// 3) Search for teachers that start with Mr
let teachers = [
  'Mr. Schafer',
  'Mr Smith',
  'Ms Davis',
  'Mrs. Robinson',
  'Mr. T'
]
let reg24 = /Mr\.?\s/
// .? = 0 or 1 period so it will match both Mr. & Mr
// s = whitespace otherwise Mrs would be included
const mister = teachers.forEach(name => console.log(`${name} is a man: ${reg24.test(name)}`))
/* Returns
Mr. Schafer is a man: true
Mr Smith is a man: true
Ms Davis is a man: false
Mrs. Robinson is a man: false
Mr. T is a man: true
*/

// 3a) Search for the Mr teachers full name
let reg25 = /Mr\.?\s[A-Z]\w*/
// Mr = looks specifically for these beginning characters
// .? = looks for 0-1 periods
// s = whitespace
// [A-Z] = looks for any Capital letter next
// w* = looks for 0 or more word characters


//3b) Seach for ALL teachers by full name
let reg26 = /M(r|s|rs)\.?\s[A-Z]\w*/
// M(r|s|rs) = () group, and | stands for either or. So this is saying look for things that start with M and are either followd by r OR s OR rs


// 4) Emails
let emails = [
  'CoreyMSchafer@gmail.com',
  'corey.schafer@university.edu',
  'corey-321-schafer@my-work.net'
]

// Match just CoreyMSchafer@gmail.com'
let reg27 = /[a-zA-z]+@[a-zA-Z]+\.com/
// [a-zA-Z]+ = Matches one or more Characters in brackets

// Match CoreyMSchafer@gmail.com & corey.schafer@university.edu
let reg28 = /[a-zA-z.]+@[a-zA-Z]+\.(com|edu)/
// [a-zA-z.]+ = Matches or or more Characters in the bracket & . is included in that match
// (com|edu) = group of characters with either or |

// Match CoreyMSchafer@gmail.com,corey.schafer@university.edu & corey-321-schafer@my-work.net
let reg29 = /[a-zA-Z0-9.-]+@[a-zA-Z-]+\.(com|edu|net)/
// [a-zA-Z0-9.-]+ = Matches or or more Alpha & Numeric haracters in the bracket including . & - 

// 5) Websites
let websites = [
  'https://www.google.com',
  'http://coreyms.com',
  'https://youtube.com',
  'https://www.google.com',
]

// match all sites
let reg30 = /https?:\/\/(www\.)?(\w+)(\.\w+)/
// https? = s? is 0-1 matches (optional s)
// (www\.)? = all of this is optional
// \w+ = any word character with 1 or more characters

const trueSites = websites.forEach(x => console.log(`${x} returns ${reg30.test(x)}`))


console.log('')
console.log('***********High Order Funcs')

// 1) Regular For Loop
//create a for loop to print out every multiple of 3 up to 100. 

const multiplesOf3 = () => {
  let x = 100
  for (let i=0; i<x; i++) {
    if (i %3 === 0) {
      console.log(i)
    }
  }
}
multiplesOf3()


// 2) Do While Loop
let age = 16;
do {
  age += 1;
  console.log("You are " + age + " years old and cannot buy alcohol!");
} while (age < 20);


// 3) While Loop
let grade = 40;
while (grade < 60){
  grade += 10;
  console.log("You have a " + grade + " in this class and cannot move on to the next class until your grade is higher than a 70.");
}

// 4) .some(element, index, array)  
// tests whether at least one element in the array passes the test implemented by the provided function. It returns a Boolean value.
// this method on an empty array returns false for any condition!

// 4a) Is some value in the array bigger than 10
const biggerThan10 = (x) => { return x > 10 }

[2, 4, 6, 8, 9].some(biggerThan10) //false
// [2, 4, 6, 8, 12].some(biggerThan10) //true

//4b) Are any numbers larger than 100
let dollars = [1, 2, 5, 10, 20, 50, 100, 500]

const biggerThan100 = dollars.some(elem => elem > 100)
console.log(biggerThan100) //true

// 4b) Do keywords show in movie array
let movie = ['Star Wars', 'Star Trek', 'Jaws', 'Jurassic Park', 'Point Break', 'Liar Liar', 'Memento', 'Warriors', 'Ghost', 'Gran Torino', 'Casino Royal', 'Almost Famous', 'Remember The Titans']

let keyword1 = 'Star' //appears more than once

const test1 = movie.some(elem => elem.indexOf(keyword1) > -1)
console.log(test1) //true
// indexOf returns -1 if nothing matches, therefore anything biggers means there's a match

const test2 = movie.some(elem => elem.indexOf('Dante') > -1)
console.log(test2) //false


// 5) .every()
// method tests whether ALL elements in the array pass the test implemented by the provided function. It returns a Boolean value.
// Calling this method on an empty array will return true for any condition!

let cost1 = ['4.99', '7.87', '13.12', '10.95', '18']
const below20 = cost1.every(elem => elem < 20)
console.log(below20) //true


// 6) .reduce(prev, curr, index)
// method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

// add array numbers into one value

const classGrades = [82, 91, 86, 93, 95, 100, 76, 94]

const gradeSum = classGrades.reduce((prev, curr) => prev + curr)
console.log(gradeSum) //717

// 6b) Add numbers in a OBJ. 

const orders = [
  {amount: 250},
  {amount: 400},
  {amount: 100},
  {amount: 325}
]
// wrong way to do this
const totalOrderAmount1 = orders.reduce((prev, curr) => {
  return prev.amount + curr.amount
})
console.log(totalOrderAmount1) //NaN
// NOTE: since reduce is going through an Object the prev.amount initial starts by taking the Object of 250 but it's then converted to a number. So the next sequence of prev.amount doesn't know what to look for
// THEREFORE: when using reduce on objects we need to set an Initial Value which is optional. Kinda like setting an empty or 0 variable for a loop

const totalOrderAmount2 = orders.reduce((initialVal, x) => {
  return initialVal + x.amount
}, 0)
console.log(totalOrderAmount2) //1075
// instead of creating two variables like previous in current you simply set an Initial Variable (if you dont set it the default will be to take the first value of the array AKA how we used 'prev')
// So when I was using prev that represented the 1st value of the array
// But when I set initialValue to 0 THAT became it's own variable

// clearner way to write the above code
const totalOrderAmount3 = orders.reduce((sum, x) => sum + x.amount, 0)
console.log(totalOrderAmount3) //1075