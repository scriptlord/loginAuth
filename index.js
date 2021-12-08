document.addEventListener('DOMContentLoaded', () => {
  async function fetchData() {
    await fetch("https://folusobookapi.herokuapp.com/")
      .then(res => res.json())
      .then(renderBooks)
  }

  function renderBooks(fetchData) {
    let rootDiv = document.getElementById('root')
    let content = ""
  fetchData.forEach((book, index) => {
    let {Title, Author, Publisher, datePublished, pageCount, Description, bookId} = book
    content +=`<tr id = book${bookId}>
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
        <a href="#" id= "edit" style = "cursor: pointer"><span class="material-icons" style = "text-decoration: none; color: blue;">edit</span></a><br>
        <a href="#" id= "delete" onclick="handleDelete(${bookId})" style = "cursor: pointer"><img src="image/delete.png"/></a>
        </td>
        </tr>`
  })
    rootDiv.innerHTML = content
  }
  fetchData()
})




// const url = 'https://folusobookapi.herokuapp.com/'
// const divEl = document.getElementById('populate-authors');
// const btnModal = document.getElementById('btn-modal')
// const close = document.getElementById('close')
// const closed = document.getElementById('closed')

// divEl.addEventListener('click', async (e)=>{
//     e.preventDefault()
//     let delButtonIsPressed = e.target.id == 'delete-post';
//     let editButtonIsPressed = e.target.id == 'edit-post';
//     let addAuthor = e.target.id == 'btn-modal';
//     const myModal =document.getElementById('modal-sect');
//     const editAuthor = document.getElementById('edit-author-modal')
//     let id = e.target.parentElement.dataset.id;
//     // const dm = document.querySelector(`div[data-id = ${id}]`)
//     if(delButtonIsPressed){
//         await fetch(`${url}/${id}`, {
//             method: 'DELETE'
//         })
//         .then(res => res.json())
//         .then(()=>location.reload())
//     }
//     if(addAuthor){
//         console.log('yeah')
//         myModal.style.display = 'block'
//     }
//     close.addEventListener('click', ()=>{
//         myModal.style.display = 'none'
//     })
//     if(editButtonIsPressed){
//         editAuthor.style.display = 'block';
//         await fetch(`${url}/${id}`)
//         .then(res => res.json())
//         .then(result => result.data)
//         .then(data => {
//             document.getElementById('nameOfAuthor').ariaPlaceholder = data.author;
//             document.getElementById('ageOfAuthor').value = data.age;
//             document.getElementById('addressOfAuthor').value = data.address;
//         })
//         let nameOfAuthor = document.getElementById('nameOfAuthor').value;
//         let ageOfAuthor =  document.getElementById('ageOfAuthor').value;
//         let add0fAuthor = document.getElementById('addressOfAuthor').value;
//         let updateAuthor = document.getElementById('update-author');
//         let result = {"author": nameOfAuthor, "age":ageOfAuthor, "address":add0fAuthor}
//         updateAuthor.addEventListener('click', async (e)=>{
//             e.preventDefault()
//             await fetch(`${url}/${id}`, {
//                 method: 'PUT',
//                 body: JSON.stringify(result)
//             })
//             .then(res => res.json())
//             .then(()=> location.reload())
//         })
//     }
//     closed.addEventListener('click', ()=>{
//         editAuthor.style.display = 'none'
//     })
// })
// let book = []
// let clickedPost = document.getElementById('post-author')
// let clickAddBooks =document.getElementById('post-books')
// clickAddBooks.addEventListener('click', (e)=> {
//     e.preventDefault()
//     let bookName = document.getElementById('Books').value
//     let isPublished = document.querySelector('input[name="isPublished"]:checked').value
//     if(!isPublished){
//         alert('Kindly select publisher\'s date')
//     }
//     let datePublished = document.getElementById('Datepublished').valueAsNumber
//     let serialnumber = document.getElementById('serialnumber').value
//     let items = {
//         "name": bookName,
//         "isPublished": isPublished,
//         "datePublished": datePublished,
//         "serialNumber": serialnumber
//     }
//     book.push(items)
//     document.getElementById('Books').value = '';
//     document.getElementById('serialnumber').value = '';
//     console.log('you are here')
//     console.log(book)
//     alert(`${items.name} added to books successfully`)
// })
// clickedPost.addEventListener('click', (e) => {
//     e.preventDefault()
//     let newAuthor = document.getElementById('author').value
//     let authorAge = document.getElementById('author-age').value
//     let authorAddress = document.getElementById('author-address').value
//     const parseDate = {
//         "author": newAuthor,
//         "age": authorAge,
//         "address": authorAddress,
//         "books": book
//     }
//     console.log(newAuthor, authorAddress, authorAge)
//     fetch("https://damp-headland-73451.herokuapp.com/authors", {
//         method: 'POST',
//         headers: { 'Content-type': 'application/json', 'Accept': 'application/json' },
//         body: JSON.stringify(parseDate)
//     })
//         .then(res => res.text())
//         .then(text => console.log(text))
//         .then(()=> location.reload())
//         book = []
// })