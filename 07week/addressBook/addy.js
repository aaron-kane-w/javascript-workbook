window.onload = function() {
  getPosts()
}
const mainDiv = document.getElementById('contacts')
const url = 'https://randomuser.me/api/?results=20'

function createNode(elem) {
  // Create the type of element you pass in the parameters
  return document.createElement(elem)
}

function append(parent, child) {
  // Append the second parameter(element) to the first one
  return parent.appendChild(child)
}

function remove(parent, child) {
  // remove the second parameter(element) from the first one
  return parent.removeChild(child)
}

function getPosts() {
  fetch(url)
  .then((response) => response.json()) 
  //posts represents the array of objects
  .then((posts) => { 
    let data = posts.results

    return data.forEach(function(x) {
      let div = createNode('div')
      let p = createNode('p')
      let ul = createNode('ul')

      let img = createNode('img')
      img.src = `${x.picture.large}`

      let email = createNode('li')
      email.innerHTML = `${x.email}`

      let age = createNode('li')
      age.innerHTML = `Age: ${x.dob.age}`
      
      let button = createNode('button')
      button.innerText = 'more info'
      button.addEventListener('click', function() { 
        if (button.innerText === 'more info') {
          append(ul, img)
          append(ul, email)
          append(ul, age)
          append(p, ul)
          button.innerText = 'less info'
          button.style.background = 'red'
        } else if (button.innerText === 'less info') {
          remove(ul, img)
          remove(ul, email)
          remove(ul, age)
          button.innerText = 'more info'
          button.style.background = 'green'
        }      
      })

      p.innerHTML = `${x.name.first} ${x.name.last}: ${x.phone}`

      append(div, p)
      append(div, button)
      append(mainDiv, div)     
    })
  })
}