let save = document.getElementById('form')
let title = document.getElementById('title')
let author = document.getElementById('author')
let data = document.getElementById('date')
let description = document.getElementById('description')
let page = document.getElementById('page')
let genre = document.getElementById('genre')
let publisher = document.getElementById('publisher')

let params = new URLSearchParams(document.location.search)
let id = params.get('id')

document.addEventListener('DOMContentLoaded', () => {
  getData()
})

async function getData() {
await fetch(`https://folusobookapi.herokuapp.com/books/${id}`, {
  method: 'GET',
  headers: {
     'Content-Type': 'application/json',
   }
}).then(response => response.json())
 .then(result => {
  let { Title, Author, datePublished, Description, pageCount, Genre, bookId, Publisher } = result
    document.getElementById('title').value = Title
    document.getElementById('author').value = Author
   document.getElementById('date').value = datePublished.substring(0, 10)
   document.getElementById('description').value = Description
   document.getElementById('page').value = pageCount
   document.getElementById('genre').value = Genre
   document.getElementById('publisher').value = Publisher
 }) 
}


save.addEventListener('submit', (e) => {
 e.preventDefault()
 fetch(`https://folusobookapi.herokuapp.com/books/${id}`, {
   method: 'PUT',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     Title: title.value,
     Author: author.value,
     datePublished: date.value,
     Description: description.value,
     pageCount: page.value,
     Genre: genre.value,
     Publisher: publisher.value,
   }),
 })
   .then((response) => response.json())
   .then((result) => {
     alert(
       `Book with the id no. ${result.bookId} have succesfully been updated`
     )
   })
   .then(() => location.reload())
})

