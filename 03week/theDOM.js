// Week 3: Pre-Work: The DOM

// Create Elements
const div = document.createElement('div')
const btn = document.createElement('button')

// Put elements into DOM
document.body.appendChild(div)
document.body.appendChild(btn)

// Style & add text to button
btn.style.padding = '0.5rem 1rem'
btn.innerText = 'Start'

// Add event listener to button & function can be built right in
btn.addEventListener('click', () => {
  if (btn.innerText === 'Start'){
    btn.innerText = 'Stop'
  } else {
    btn.innerText = 'Start'
  }
})

/* list of some of the built-in methods on the DOM:
document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.scrollTo()
window.dump() */


// ***YouTube: JS & the DOM

// Lesson1

// Create an Object 
const object1 = {
  name: 'Aaron',
  // address is an object within an object
  address: {
    state: 'Florida'
  }
}
// Access Object Data
const myName = object1.name
console.log(myName)
// Change Object Data
object1.address.state = 'Texas'
console.log(object1.address.state)

// Lesson 2

// Create a paragraph tag
const para = document.createElement('p')
// Add text to paragraph
para.textContent = 'Text added to paragraph'
// Add text to body
document.body.appendChild(para)

// Lesson 3 - Event Listener

// Create DIV element
const div1 = document.createElement('div')

// Set height of element
div1.style.height = '5rem'
// Append element to Dom
document.body.appendChild(div1)
// Add event listener to element
div1.addEventListener('mousemove', (event) => {
  console.log(event)

  // Display X & Y cordinates of mousemove
  let x = event.clientX
  let y = event.clientY

  div1.textContent = `${x}: ${y}`
  // change the backgroud color based on coordinates
  div1.style.background = `rgb(${x}, ${y}, 100)`
})


// Lesson 4 - Put code from lesson 3 into functions
const fullScreen = (element) => {
  const newElement = document.createElement('element')
  newElement.style.height = '100vh'
  newElement.style.background = 'pink'
  document.body.appendChild(newElement)
  return newElement
}

function input(inputType, DOMElement, callback) {
  DOMElement.addEventListener(inputType, function(event) {
    let x = event.clientX
    let y = event.clientY
    // callback needed when using an addEventListener so that we can capture the data from the event listener 
    callback(DOMElement, x, y)
  })
}

function output(element, x, y) {
  element.textContent = `${x}: ${y}`
  element.style.background = `rgb(${x}, ${y}, 100)`
}

// run these new functions ***Not working... Copied video
// https://www.youtube.com/embed/hM9h1wN4rfU
input('mousemove', fullScreen('main'), output)


// ***CodePen
// https://codepen.io/hipperger/pen/GwEbea

function generate_table() {
  // get the reference for the body
  let body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  let tbl = document.createElement("table");
  let tblBody = document.createElement("tbody");

  // creating all cells (<3 means 3 rows will be created)
  for (let i = 0; i < 3; i++) {
    // creates a table row
    let row = document.createElement("tr");
    
    for (let j = 0; j < 3; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row     
      let cell = document.createElement("td");     
      let cellText = document.createTextNode("cell in row "+i+", column "+j);      
      cell.appendChild(cellText);      
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
}