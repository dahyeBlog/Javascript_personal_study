
function bookSearch () {
    let search = document.getElementById('bookName').value;
    document.querySelector('.title').innerHTML = ""

        $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search },
            headers: { Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2" }
        })
            .done((msg) => {
              const booksLength = msg.documents.length;

              let books = document.querySelector('.books')
              for(i=0; i < booksLength ;i++) {
                let book = `
                <h2 class="title">${msg.documents[i].title}</h2>
                <div class="section-center"><img src='${msg.documents[0].thumbnail}'/></div>
                </div>`

                books.innerHTML = book
              }
              
              // $(".title").append("<strong>" + msg.documents[0].title + "</strong>");
  
                console.log(msg.documents);
                // $("p").append("<strong>" + msg.documents[0].title + "</strong>");
                // $("p").append("<img src='" + msg.documents[0].thumbnail + "'/>");
            });
    }




document.getElementById('search').addEventListener('click', bookSearch)

