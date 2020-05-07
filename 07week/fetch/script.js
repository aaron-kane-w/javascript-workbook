'use strict'

console.log('Loading script.js file')

window.onload = function() {
  console.log('Window loaded')
}

// 
const fetchAsAVariable = () => {
  let x = fetch('https://jsonplaceholder.typicode.com/posts')

  console.log(x) //Promise {<pending>}
    //Promise is an object, by just doing a fetch we''re only getting the object. Use promises (.then) to get 'responses' within the object
    // This is like a box from Amazon. We want what's inside (hence promises)
}

// Asynchronous = you ask for something and you get a response right away, but the task might not be done yet. With the function below 'Getting fetch request' will appear in console BEFORE 'fetch is done
  // Asynchronous is not linear. Example a video game is constantly updating as you play. Otherwise we'd have to wait a very long time to start playing
const asynchronus = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function() {
      console.log('Fetch is done!')
    })
  console.log('Getting fetch request')
}


// 
const getData = () => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then(function(response) {
      console.log('Fetch is done! Response = ', response)
      return response.json()
    })
    .then(function(data) {
      console.log('Got my data', data)
      // this will show all the inner objects (aka the data)
      data.map(x => console.log(x.title))
      // this shows all the titles of the inner objects
      data.forEach(updateHtml)
    })
}
getData()

// Now let's update the DOM & add list items for the returned data. And add users data to the lists too

let updateHtml = function(post) {
  let postsUl = document.getElementById('posts')
  let postLi = document.createElement('li')
  postLi.innerText = post.title
  postsUl.appendChild(postLi)

  let userId = post.letuserId
  let userSpan = document.createElement('span')
  userSpan.innerText = ' - by ' + userId
  postLi.append(userSpan)

  // new fetch for users - doesn't work. Rewatch class around 90mins into lecture
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
      userSpan.innerText = ' - by '+ data.name
    })
}

