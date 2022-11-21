function bookSearch () {
    let search = document.getElementById('bookName').value;
    // document.querySelector('.title').innerHTML = ""
    // document.querySelector('.section-center').innerHTML = ""
    document.querySelector('.books').innerHTML = ""
     
    document.getElementById('bookName').value = ""

    $.ajax({
            method: "GET",
            url: "https://dapi.kakao.com/v3/search/book?target=title",
            data: { query: search },
            headers: { Authorization: "KakaoAK 7c98d915856717af7c7faa2ddcfef9d2" }
        })
            .done((msg) => {
              const booksLength = msg.documents.length;

              let books = document.querySelector('.books')
            
              for(let i=0; i < booksLength ;i++) {
                let book = `
                <div class="book_items">
                <p class="title">${msg.documents[i].title}</p>
                <div class="section-center"><a href="${msg.documents[i].url}"><img src='${msg.documents[i].thumbnail}'/></a>
                </div>
                </div>`
                books.innerHTML += book
                
              }
            });
    }


document.getElementById('search').addEventListener('click', bookSearch)

document.getElementById('bookName').addEventListener('keypress', function(event){
  if(event.key === 'Enter') {
    event.preventDefault()
    bookSearch()
    
  }
})