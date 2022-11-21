const apiKey = "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2";
const url = `https://dapi.kakao.com/v2/search/image`;

const imagesDOM = document.querySelector('.images-center');



function imageSearch() {
  let search = document.querySelector(".search-input").value;
  $.ajax({
    type: "GET",
    url: url,

    data: {
      query: search,
    },
    headers: {
      Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2",
    },
   

  }).done((msg) => {
    const imageList = msg.documents.map((image) => {
      // console.log(image);
      const {image_url,thumbnail_url} = image
      return `<a href="${image_url}">
        <img src="${thumbnail_url}" alt="" /></a>`
    }).join('')
    
    imagesDOM.innerHTML = imageList
  })
}

document.querySelector(".btn").addEventListener("click", (event)=>{
  event.preventDefault()
  imageSearch()
});
