window.onload = function() {
  getPosts()
}

const mainDiv = document.getElementById('output')
const urlFilms = 'https://swapi.dev/api/films/'
const urlPeople = 'https://swapi.dev/api/people/'

function createNode(elem) {
  return document.createElement(elem)
}

function append(parent, child1) {
  return parent.appendChild(child1)
}

function remove(parent, child) {
  return parent.removeChild(child)
}

function getPosts() {
  fetch(urlFilms)
  .then(response => {
    if (!response.ok) {
      //ok will be false if there's an issue
      throw Error(responsse.statusText)
    } else {
      return response.json()
    }
  })
  .then(posts => {
    let data = posts.results

    return data.forEach(elem=> {
      let div = createNode('div')

      let title = createNode('h2')
      title.innerText = `Episode ${elem.episode_id} - ${elem.title}`

      let date = createNode('small')
      date.innerText = ` (${elem.release_date.slice(0,4)})`

      let ul = createNode('ul')
      ul.className ='show'

      let button = createNode('button')
      button.innerText = 'Main Characters'

      append(title, date)
      append(div, title)
      append(div, button)
      append(mainDiv, div)


      button.addEventListener('click', function() {
        // Thanks Yousif for your help on this piece of code and adding the if statement here! 

        if (button.innerText === 'Collapse') {
          ul.innerText = ''
          button.innerText = 'Main Characters'
        } else {
          append(div, ul)
          fetch(urlPeople)
          .then(response => {
            if (!response.ok) {
              throw Error(response.statusText)
            } else {
              return response.json()
            }
          })
          .then(posts => {
            let data = posts.results
            getCharacters(data, ul, button)                
          })
          .catch(error => console.log('Error =', error))
        }
      })     
    })
  })
  
  .catch(error => console.log('Error =', error))
}



function getCharacters(data, ul, button) {  
  return data.forEach(elem => {
    let li = createNode('li')
    li.innerText = `${elem.name}`
    button.innerText = 'Collapse' 
    append(ul, li)
  })
}

