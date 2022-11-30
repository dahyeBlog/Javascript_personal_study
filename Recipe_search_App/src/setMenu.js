const setMenu = (section) => {
  
  section.addEventListener('click', function (e) {

    // e.preventDefault();
    const id = e.target.parentElement.dataset.id;


    JSON.stringify(localStorage.setItem('menu', id));
  })
}

export default setMenu
