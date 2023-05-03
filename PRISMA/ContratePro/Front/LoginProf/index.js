const email = document.querySelector("#email");
const senha = document.querySelector("#senha");


function login() {
  let info = {
    email: email.value,
    senha: senha.value,
  };

  fetch("http://localhost:3000/loginProf", {
    "method": "POST",
    "headers": {
        "Content-Type": "application/json"
    },
    "body": JSON.stringify(info)
}).then(res => {
    let data = {
        info: res.json(),
        status: res.status
    }
    return data;
})
    .then(res => {
        if (res.status == 404)
            alert("Dados inválidos")
        else
            return res.info
    }).then(data => {
        window.localStorage.setItem("info", JSON.stringify(info));

        // localStorage.setItem("info", JSON.stringify(data));
        // if (data.tipo == "Cliente")
        console.log(data)
            window.location.href = "../HomeProfissa/index.html";
    })
}
