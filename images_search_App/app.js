const apiKey = "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2";
const url = `https://dapi.kakao.com/v2/search/image?`;

function imageSearch() {
  let search = document.querySelector(".search-input").value;

  console.log(search);

  $.ajax({
    type: "GET",
    url: url,

    data: {
      query: `${search}`,
    },
    headers: {
      Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2",
    },
  }).done((msg) => {
    console.log(msg);
  });
}

document.querySelector(".btn").addEventListener("click", imageSearch);
