import get from "./getElement.js";
import presentMenuList from "./presentMenuList.js";

const baseURL = 'https://openapi.foodsafetykorea.go.kr/api/38c4f1900bdb41dbbf55/COOKRCP01/json/1/100/RCP_NM='

const form = get('.search-form');
const input = get('[name="menu"]');
    
form.addEventListener('keyup', function(e) {
  e.preventDefault()
  const value = input.value;
    
  if(!value) return
  presentMenuList(`${baseURL}${value}`)
})


