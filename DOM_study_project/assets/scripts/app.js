const addMovieModal = document.getElementById('add-modal')
// const addMovieModal = document.querySelector('#add-modal')
// const addMovieModal = document.body.children[1]

const backdrop = document.getElementById('backdrop')

const cancelAddMovieButton =  addMovieModal.querySelector('.btn--passive')
const confirmAddMovieButton =  addMovieModal.querySelector('.btn--success')

const userInputs = addMovieModal.querySelectorAll('input')
// const userInputs = addMovieModal.getElementsByTagName('input')


const startAddMovieButton = document.querySelector('header button')
// const startButton = document.querySelector('header').lastElementChild


const toggleBackdrop = () => {
  backdrop.classList.toggle('visible')

}


const toggleMovieModalHandler =() => {
  addMovieModal.classList.toggle('visible')
  toggleBackdrop()
}

const cancelAddMovieHandler = () => {
  toggleMovieModalHandler()
}

const addMovieHandler = () => {
  const titleValue = userInputs[0].value
  const imageUrlValue = userInputs[1].value
  const ratingValue = userInputs[2].value
  
  //입력값의 시작 및 끝에 있는 불필요한 공백을 제거함.
  if(titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
    alert('알맞은 값을 입력해주세요. (Rating 값을 1에서 5사이의 숫자로 입력해 주세요.)')
    return
  }
  
}

const backdropClickHandler = () => {
  toggleMovieModalHandler()

}


startAddMovieButton.addEventListener('click', toggleMovieModalHandler)
backdrop.addEventListener('click',backdropClickHandler)
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler)
confirmAddMovieButton.addEventListener('click', addMovieHandler)