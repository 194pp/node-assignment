const token = localStorage.getItem('token');

postCheckToken().then(data => {
  if (data.name === "JsonWebTokenError") {
    window.location.href = "http://localhost:3001/login";
  }
});

async function postCheckToken() {
  const data = { token: token }
  const response = await fetch('http://localhost:3001/checkToken', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return response.json();
}