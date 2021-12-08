let form = document.getElementById('form')
let api = `https://folusobookapi.herokuapp.com/books/`
form.addEventListener('submit', (e) => {
  e.preventDefault()

  fetch(api, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-auth-token': token
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
      alert(`Book with the id no. ${result.bookId} have succesfully been created`)
    })
    .then(() => location.reload())
})




