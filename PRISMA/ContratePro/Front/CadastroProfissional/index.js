function cadastrarUsuario() {
    //Cria um objeto com os dados dos campos html <input>

    let nome = document.querySelector("#nome").value
    let email = document.querySelector("#email").value
    let senha = document.querySelector("#senha").value
    let tipo = document.querySelector("#tipo").value

    let corpo = {
        "nome": nome,
        "email": email,
        "senha": senha,
        "tipo": tipo, 
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    };

    fetch('http://localhost:3000/profcriar', options)
        .then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                alert("Deu Certo");
                window.location.reload();
            } else {
                alert("Parece que deu erro");
            }
        });
}