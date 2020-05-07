

window.onload = function() {

  getPosts()
  moreInfo()
}

function getPosts() {
  fetch('https://randomuser.me/api/?results=20')
  .then((response) => response.json()) 
  .then((posts) => { //posts represents the array of objects
    let results = posts.results
    let info = posts.info
    let output = '<h2>Contacts:</h2>'

    console.log('Results array', posts.results)
    console.log('Info array', posts.info)

    results.forEach(function(x) {
      output += `
      <div>
        <h4>${x.name.first} ${x.name.last}</h4>
        <p>${x.phone}</p>
        <button class="btn">More Info</button>
      </div>`
    })
    document.getElementById('contacts').innerHTML = output 
  })
}


function moreInfo() {
  
  
}


