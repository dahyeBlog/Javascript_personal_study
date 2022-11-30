import get from './getElement.js'
const section = get('.section-center')
const title = get('.title')
import { hideLoading } from './toggleLoading.js'

const displayMenus2 = (data) => {
  
  if(!data) {

    hideLoading()
    title.textContent = '죄송하지만, 검색결과가 없습니다. '
    section.innerHTML = null
    return 
  }

  const newReciptLists = data.map((recipe) => {

    
const {ATT_FILE_NO_MAIN: image, RCP_NM: name, RCP_SEQ: id } = recipe

  return `<a href="recipe.html">
  <article class="menuList" data-id="${id}">
    <img src="${image}" alt="${name}" />
    <h3>${name}</h3>
    </article>
</a>`

  }).join("")
  hideLoading()
  title.textContent = ''
  section.innerHTML = newReciptLists

  return section
}



export default displayMenus2
