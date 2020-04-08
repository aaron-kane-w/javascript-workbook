// A) When the add button gets clicked
// 1. append the text to the button of the list
// 2. add new list item

let addButton = document.getElementById('add')

addButton.addEventListener('click', () => {
/* Add this
<li>
  <span>Item 1</span>
  <button class="delete">x</button>
</li>
*/
  // define the input & the value of the input
  let inputBox = document.getElementById('inputText')
  let todoText = inputBox.value

  // Once defined have the input box cleared
  inputBox.value = ''

  // create an li createElement 
  let li = document.createElement('li')

  // create a span element
  let span = document.createElement('span')

  // update the inner text of the span element
  span.innerText = todoText

  // create a delete button
  let deleteButton = document.createElement('button')
  deleteButton.innerText = 'x'
  deleteButton.classList.add('delete')

  // add the li to the button of the ul
  let ul = document.querySelector('ul')

  // Add li & its items to the ul
  ul.appendChild(li)
  li.appendChild(span)
  li.appendChild(deleteButton)

  // Add additional created functions so delete button & span line-through work
  setupSpanEvent(span)
  setupDeleteBtn(deleteButton)
})


// B) When the delete button gets clicked
// 1. Delete the parent li
const setupDeleteBtn = (deleteButton) => {
  deleteButton.addEventListener('click', () => {
    let parentLi = deleteButton.parentElement
    parentLi.remove()
  })
}

let allDelete = document.querySelectorAll('.delete')
for (let i = 0; i < allDelete.length; i++) {
  let deleteButton = allDelete[i]
  setupDeleteBtn(deleteButton)
}


// C) When the span is clicked
// 1. Class .done should be added to span
const setupSpanEvent = (span) => {
  span.addEventListener('click', () => {
    // .add would simple add the done class. But toggle will add or remove. 
    span.classList.toggle('done')
  })
}

let allSpans = document.querySelectorAll('span')
for (let i = 0; i < allSpans.length; i++) {
  // span variable allows us to go through every span otherwise allSpans would stop after the first span
  let span = allSpans[i]
  setupSpanEvent(span)
}
