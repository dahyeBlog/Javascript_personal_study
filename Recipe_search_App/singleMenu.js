import fetchMenus from "./src/fetchMenus.js"
import displaySingleMenu from "./src/displaySingleMenu.js"

const singleMenu = async () => {
  const id = localStorage.getItem('menu')
  if(!id) {
    window.location.replace('index.html')
  } else {
    const menu = await fetchMenus(`https://openapi.foodsafetykorea.go.kr/api/38c4f1900bdb41dbbf55/COOKRCP01/json/1/50/RCP_SEQ=${id}`
      )
      const menuList = menu.COOKRCP01.row

      menuList.map((recipe) => {
        if(recipe.RCP_SEQ === id) {
          
          displaySingleMenu(recipe);
    
        }  
      })
  }
  
}

window.addEventListener('DOMContentLoaded', singleMenu)