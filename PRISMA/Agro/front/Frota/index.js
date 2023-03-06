var UrList = "http://localhost:3000/frota";
var listarFro = document.querySelector(".info-tudo");
var itemFro = document.querySelector(".info");


var listar = [];

function carregar() {
    const options = {
        method: "GET"
    }
        fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listar = res;
            listaFrota();
        })
        .catch(err => console.error(err));
    }

function listaFrota()  {
    listar.forEach(e => {
        let frota = document.querySelector(".info").cloneNode(true);
        frota.classList.remove("model");

        frota.querySelector("#id").innerHTML += e.id;
        frota.querySelector("#placa").innerHTML += e.placa;
        frota.querySelector("#modelo").innerHTML += e.modelo;
        frota.querySelector("#marca").innerHTML += e.marca;

        frota.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

        frota.querySelector("#del").addEventListener("click", () => {
            remover(e.id, frota);
        });

        listarFro.appendChild(frota);
    })
}

function remover(id, frota) {
    fetch("http://localhost:3000/frotadel/" + id, {
        "method":"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        frota.remove();
    });
}

function alterar(id, alt) {
    fetch("http://localhost:3000/frotaupdate/" + id, {
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


function cadastrarVeiculo() {
    //Cria um objeto com os dados dos campos html <input>

    let placa = document.querySelector("#placa").value
    let modelo = document.querySelector("#modelo").value
    let marca = document.querySelector("#marca").value

    let corpo = {
        "placa": placa,
        "modelo": modelo,
        "marca": marca,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    };

        fetch('http://localhost:3000/frotacriar', options)
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