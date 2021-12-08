

//GET function
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault()
  fetchData()
})

async function fetchData() {
await fetch(`https://folusobookapi.herokuapp.com/home`, {
  method: 'GET',
   headers: {
      'Content-Type': 'application/json',
      'x-auth-token': '123',
    },
}).then(response => response.json())
  .then(result => {
  let rootDiv = document.getElementById('root')
  let content = ""
  result.forEach((book, index) => {
    let { Title, Author, Publisher, datePublished, pageCount, Description, bookId } = book
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
   
 }) 
}

//Api url
const apiUrl = 'https://folusobookapi.herokuapp.com/'

// Delete Function
const handleDelete = (id, event) => {
  event.preventDefault()
  console.log('Hi')
  fetch(`${apiUrl}books/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token,
    },
  }).then((result) => {
    alert('Click OK if you are sure you want to delete book?')
    const deletedEl = document.getElementById(`book${id}`)
    // deletedEl.style.display = 'none'
    deletedEl.remove()
  })
}

