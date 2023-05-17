const email = document.querySelector("#email");
const senha = document.querySelector("#senha");


function login() {
    let info = {
        email: email.value,
        senha: senha.value,
    };

    fetch("http://localhost:3000/login", {
        "method": "POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(info)
    }).then(res => { if (res.status === 404){ 
        throw new Error("Dados inválidos");
    }else{ 
        return res.json(); } })
    
        .then(data=> 
            { window.localStorage.setItem("info", JSON.stringify(data));
            alert("Dados válidos");
              window.location.href = "../HomeCliente/index.html";
            })
        .catch(error => { alert(error.message);
        
        window.location.reload(); });
}
