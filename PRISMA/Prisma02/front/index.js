const lista = document.querySelector("#lista");
var data = [];


function cadastrarVendedor() {
    //Cria um objeto com os dados dos campos html <input>

    let nome = document.querySelector("#nome").value
    let salario = document.querySelector("#salario").value
    let setor_id_vendedor = document.querySelector("#setor_id_vendedor").value

    let corpo = {
        "nome": nome,
        "salario": Number(salario),
        "setor_id_vendedor": Number(setor_id_vendedor),
    }
    console.log(corpo)

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json"
        },
        "body": JSON.stringify(corpo)
    };

   
        fetch('http://localhost:3000/vendedores/create', options)
            .then(res => { return res.json() })
            .then(resp => {
                console.log(resp)
                
                if (resp != undefined) {
                    console.log("Parabens");
                    window.location.reload();
                } else {
                    console.log("Deu errado");
                }
               
            });
        
    }


    