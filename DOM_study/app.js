const h1 = document.getElementById('main-title')

h1.textContent = 'Some new Title!'
h1.style.color = 'white'
h1.style.backgroundColor = 'black'

const li = document.querySelector('li:last-of-type')
li.textContent = li.textContent + '(changed!)'

const body = document.body

const listItemElements = document.getElementsByTagName('li')

for(const listItemEl of listItemElements) {
  console.dir(listItemEl)
}
