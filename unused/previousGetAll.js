//function to call api
async function fetchData() {
  let books = await fetch('https://folusobookapi.herokuapp.com/books')
  books = await books.json()
  renderBooks(books)
}

//function to render books
let rootDiv = document.getElementById('root')
function renderBooks(fetchData) {
  let content = ''

  fetchData.forEach((book, index) => {
    let {
      Title,
      Author,
      Publisher,
      datePublished,
      pageCount,
      Description,
      bookId,
    } = book
    content += `<tr id = book${bookId}>
        <th scope="row"><a href="#"><img class ="img" src="image/book-${
          index + 1
        }.png" alt=""></a><p>Title: <em>${Title}</em></p><p>Info: <em>${Description}</em></p></th>
        <td>${Author}</td>
        <td>${Publisher}</td>
        <td>${datePublished
          .substring(0, 10)
          .split('-')
          .reverse()
          .join('/')}</td>
        <td>${pageCount}</td>
        <td>
        <a href="/editBook.html?id=${bookId}" id= "edit"  style = "cursor: pointer"><span class="material-icons" style = "text-decoration: none; color: blue;">edit</span></a><br>
        <a href="" id= "delete" onclick="handleDelete(${bookId}, event)" style = "cursor: pointer"><img src="image/delete.png"/></a>
        </td>
        </tr>`
  })

  rootDiv.innerHTML = content
}
