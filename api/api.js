// Local Storage
localStorage.setItem("storedclass", "This page is for CIT 261");
document.getElementById("class").innerHTML = localStorage.getItem("storedclass");

 // Colors app 
  var form = document.querySelector('form')
  var ul = document.querySelector('ul')
  var button = document.querySelector('button')
  var input = document.getElementById('item')
  let itemsArray = []
  let items

if (localStorage.getItem('items')) {
  items = JSON.parse(localStorage.getItem('items'))
} else {
  items = []
}

localStorage.setItem('items', JSON.stringify(itemsArray))
const data = JSON.parse(localStorage.getItem('items'))

  const liMaker = text => {
    const li = document.createElement('li')
    li.textContent = text
    ul.appendChild(li)
  }

  form.addEventListener('submit', function(e) {
    e.preventDefault()
  
    itemsArray.push(input.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    liMaker(input.value)
    input.value = ''
  })

  data.forEach(item => {
    liMaker(item)
  })

  button.addEventListener('click', function() {
    localStorage.clear()
    while (ul.firstChild) {
      ul.removeChild(ul.firstChild)
    }
  })