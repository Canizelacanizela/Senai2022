function cadastrar() {
  let data = {};

    document.querySelectorAll(".body > input").forEach(inp => {
        data[inp.className] = (inp.className === "nome" || inp.className === "descricao" ||inp.className === "img");
    });

    fetch("http://10.87.207.2:3000/salgado", {
        "method":"POST",
        "headers": {
            "Content-Type": "application/json"
        },
        "body": JSON.stringify(data)
    })
    .then(resp => { return resp.status; })
    .then(data => {
        if(data === 201) {
          
        }
    })
}

