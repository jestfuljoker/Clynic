async function handleSubmit(data) {
  preventDefault();

  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  data = {
    name,
    email,
    password
  }

  fetch('http://localhost:3333/users', {
    method: 'POST',
    headers: new Headers(),
    body: JSON.stringify(data)
  }).then(async function (response) {
    console.log(response);
  }).catch(err => console.log(err));
}