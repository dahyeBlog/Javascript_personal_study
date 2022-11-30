import { hideLoading } from "./toggleLoading.js";
import get from "./getElement.js";

const displaySingleMenu = (data) => {
  hideLoading()

  const {ATT_FILE_NO_MAIN: image, RCP_NM: name , RCP_PARTS_DTLS: desc } = data

  const list = [
    data.MANUAL01,
    data.MANUAL02,
    data.MANUAL03,
    data.MANUAL04,
    data.MANUAL05,
    data.MANUAL06,
    data.MANUAL07,
    data.MANUAL08,
    data.MANUAL09,
  ]

  const img = get('.menu-img')
  const menuName = get('.menu-name')
  const description = get('.menu-desc')
  const ingredients = get('.menu-ingredients')

  img.src = image
  menuName.textContent = name
  description.textContent = desc
  ingredients.innerHTML = list.map((item) => {
    if(!item) return ;
    return `<li><i class="far fa-check-square"></i>${item}</li>`
  }).join('')
  
}

export default displaySingleMenu
