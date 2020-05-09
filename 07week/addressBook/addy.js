

window.onload = function() {
  getPosts()
}

function getPosts() {
  fetch('https://randomuser.me/api/?results=20')
  .then((response) => response.json()) 
  .then((posts) => { //posts represents the array of objects
    generateContacs(posts.results)
  })
}

function generateContacs(json) {
  let output = '<h2>Contacts:</h2>'

  console.log('Results array', json)

  json.forEach(function(x) {
    output += `
    <div>
      <h4>${x.name.first} ${x.name.last}</h4>
      <p>${x.phone}</p>
      <button class="btn">More Info</button>
    </div>`
  })
  document.getElementById('contacts').innerHTML = output 
}



let btn = document.querySelectorAll('button').addEventListener('click', function() {
  console.log('button clicked')
})

