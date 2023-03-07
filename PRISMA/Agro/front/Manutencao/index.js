var UrList = "http://localhost:3000/manu";
var listarManutencao = document.querySelector(".info-tudo");
var itemMotor = document.querySelector(".info");


var listar = [];

function carregar() {
    const options = {
        method: "GET"
    }
        fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listar = res;
            listarManu();
        })
        .catch(err => console.error(err));
    }

function listarManu()  {
    listar.forEach(e => {
        let manu = document.querySelector(".info").cloneNode(true);
        manu.classList.remove("model");

        manu.querySelector("#id").innerHTML += e.id;
        manu.querySelector("#id_veiculo").innerHTML += e.id_veiculo;
        manu.querySelector("#data_inicio").innerHTML += e.data_inicio.toLocaleString('pt-BR', { timeZone: 'UTC' }).replace("T", " ").split(".")[0];
        manu.querySelector("#data_fim").innerHTML += e.data_fim
        manu.querySelector("#valor_gasto").innerHTML += e.valor_gasto;
        manu.querySelector("#descricao").innerHTML += e.descricao;

        manu.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

        manu.querySelector("#del").addEventListener("click", () => {
            remover(e.id, manu);
        });

        listarManutencao.appendChild(manu);
    })
}

function remover(id, manu) {
    fetch("http://localhost:3000/manudel/" + id, {
        "method":"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        manu.remove();
    });
}

function alterar(id, alt) {
    fetch("http://localhost:3000/manupdate/" + id, {
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


function cadastrarManu() {
    //Cria um objeto com os dados dos campos html <input>

    let id_veiculo = document.querySelector("#id_veiculo").value
    let valor_gasto = document.querySelector("#valor_gasto").value
    let descricao = document.querySelector("#descricao").value

    let corpo = {
        "id_veiculo": id_veiculo,
        "valor_gasto": valor_gasto,
        "descricao": descricao,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    };

        fetch('http://localhost:3000/manucriar', options)
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