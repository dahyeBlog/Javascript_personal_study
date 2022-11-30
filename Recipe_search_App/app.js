import presentMenuList from './src/presentMenuList.js'
import './src/searchForm.js'
// import get from './src/getElement.js'
// import paginate from './paginate.js'
// import fetchMenus from './src/fetchMenus.js'

// import displayMenus from './src/displayMenus.js'
// import displayButtons from './src/displayButtons.js'
// import setMenu from './src/setMenu.js'


// const btnContainer = get('.btn-container')


const URL = 'https://openapi.foodsafetykorea.go.kr/api/38c4f1900bdb41dbbf55/COOKRCP01/json/1/100';

// let pages = []
// let index = 0

// const setupUI = () => {
//   displayMenus(pages[index])
//   displayButtons(btnContainer, pages, index)
  
// }

// const init = async () => {
//   const lists = await fetchMenus(URL)
//   const recipeLists = lists.COOKRCP01.row;
//   pages = paginate(recipeLists) 

//   cl
//   setupUI()
// }

// btnContainer.addEventListener('click', function(e) {
//   if(e.target.classList.contains('btn-container')) return 
//   if(e.target.classList.contains('page-btn')) {
//     index = parseInt(e.target.dataset.index)
//   }


//   setupUI()
// })



window.addEventListener('DOMContentLoaded', () => { presentMenuList(URL) })
