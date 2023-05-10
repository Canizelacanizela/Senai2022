const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function login() {
  let info = {
    email: email.value,
    senha: senha.value,
  };

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(info),
  })
    .then((res) => {
      let data = {
          info: res.json(),
          status: res.status
      }
      return data;
      return res.json();
    })
    .then((data) => {
      localStorage.setItem("info", JSON.stringify(data));
      if (data.tipo == "Profissional")
        window.location.href = "../HomeProfissa/index.html";
      else window.location.href = "../telaCadastro/index.html";
    });
  .then(data => {

      localStorage.setItem("info", JSON.stringify(data));
      if (data.tipo == "Profissional")
          window.location.href = "../HomeProfissa/index.html";
      else
          window.location.href = "../telaCadastro/index.html";
  })
}
