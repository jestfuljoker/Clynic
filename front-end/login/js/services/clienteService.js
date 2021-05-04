
const login = () => {

  let nome = document.getElementById('nome');
  let email = document.getElementById('email');
  let senha = document.getElementById('senha');
  let firstForm = document.getElementById('first-content-form');

  console.log(nome.value, email.value, senha.value, firstForm);

  firstForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const url = 'http://localhost:3333/users';


    let data = {
      nome: nome.value,
      email: email.value,
      senha: senha.value,
    };

    console.log(data);

    return fetch(url, {
      method: 'POST',
      headers: new Headers(),
      body: JSON.stringify(data)
    })
  })
}

login();