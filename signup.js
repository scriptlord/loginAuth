let form = document.getElementById('pills-profile')
let loginForm = document.getElementById('pills-home')
let username = document.getElementById('name')
let email = document.getElementById('email')
let password = document.getElementById('password')
let dob = document.getElementById('dob')
let loginEmail = document.getElementById('login-email')
let loginPassword = document.getElementById('login-password')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  fetch('http://localhost:3000/user/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: username.value,
      email: email.value,
      password: password.value,
      dob: dob.value,
    }),
  })
    .then((result) => result.json())
    .then((data) => {
      alert(`${data.name} has successfully register. You can now Login`)
    })
    .then(() => (window.location.href = './signup.html'))
    .catch((e) => console.log(e))
})

loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  fetch('http://localhost:3000/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: loginEmail.value,
      password: loginPassword.value,
    }),
  })
    .then((result) => result.json())
    .then((data) => {
     console.log(data)
     windows.location.href = "./deleteBook.html"
    })
    .catch((e) => console.log(e))
})
