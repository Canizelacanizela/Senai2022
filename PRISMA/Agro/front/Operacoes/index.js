var UrList = "http://localhost:3000/opera";
var listarOperaco = document.querySelector(".info-tudo");
var itemOpera = document.querySelector(".info");


var listar = [];

function carregar() {
    const options = {
        method: "GET"
    }
        fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listar = res;
            listaOpera();
        })
        .catch(err => console.error(err));
    }

function listaOpera()  {
    listar.forEach(e => {
        let opera = document.querySelector(".info").cloneNode(true);
        opera.classList.remove("model");

        opera.querySelector("#id_motorista").innerHTML += e.id_motorista;
        opera.querySelector("#id_veiculo").innerHTML += e.id_veiculo;
        opera.querySelector("#data_saida").innerHTML += e.data_saida.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0];;
        opera.querySelector("#descricao_servico").innerHTML += e.descricao_servico;

        opera.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

        opera.querySelector("#del").addEventListener("click", () => {
            remover(e.id, opera);
        });

        listarOperaco.appendChild(opera);
    })
}

function remover(id, opera) {
    fetch("http://localhost:3000/operadel/" + id, {
        "method":"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        opera.remove();
    });
}

function alterar(id, alt) {
    fetch("http://localhost:3000/operaupdate/" + id, {
        "method":"PUT",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        alt.update();
    });
}


function cadastrarOpera() {
    //Cria um objeto com os dados dos campos html <input>

    let id_motorista = document.querySelector("#id_motorista").value
    let id_veiculo = document.querySelector("#id_veiculo").value
    let descricao_servico = document.querySelector("#descricao_servico").value

    let corpo = {
        "id_motorista": id_motorista,
        "id_veiculo": id_veiculo,
        "descricao_servico": descricao_servico
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    };

        fetch('http://localhost:3000/operacriar', options)
            .then(res => { return res.json() })
            .then(resp => {
                if (resp != undefined) {
                    console.log("Deu Certo");
                } else {
                    console.log("Parece que deu erro");
                }
            });
        window.location.reload();
    }

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}