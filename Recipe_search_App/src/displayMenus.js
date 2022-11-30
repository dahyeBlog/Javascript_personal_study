import get from './getElement.js'
import { hideLoading } from './toggleLoading.js'

const displayMenus = ({COOKRCP01}) => {

  console.log(COOKRCP01);
  
  const section = get('.section-center')
  const title = get('.title')

  if(!COOKRCP01.row) {

    hideLoading()
    title.textContent = '죄송하지만, 검색결과가 없습니다. '
    section.innerHTML = null
    return 
  }
  
  const newMenus = COOKRCP01.row.map((menu) => {
    const {ATT_FILE_NO_MAIN: image, RCP_NM: name, RCP_SEQ:id } = menu

    return `<a href="recipe.html">
      <article class="menuList" data-id="${id}">
        <img src="${image}" alt="${name}" />
        <h3>${name}</h3>
        </article>
    </a>`
  }).join("")

  hideLoading()
  title.textContent = ''
  section.innerHTML = newMenus
  return section
}

export default displayMenus
