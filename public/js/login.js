const form = document.getElementById('login-form');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('pass-input');

form.onsubmit = (event) => {
  event.preventDefault();
  postLogin().then(data => {
    if (data.error) {
      alert(data.error);
      return;
    }
    if (data.token) {
      localStorage.setItem('token', data.token);
    }
    console.log("Message: " + data.message);
    console.log("Token: " + data.token);
    window.location.href = "http://localhost:3001/groups";
  });
}

async function postLogin() {
  const data = {
    email: emailInput.value,
    password: passwordInput.value
  }
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}