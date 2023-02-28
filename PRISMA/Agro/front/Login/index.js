const email = document.querySelector("#email");
const senha = document.querySelector("#senha");

function login() {
    let info = {
        "email": email.value,
        "senha": senha.value
    }

    fetch("http://localhost:3000/login", {
        "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json()})
    .then(data => {
        if(data.err === undefined) {

            window.location.href = "../Motoristas/index.html";
        }
    })
}