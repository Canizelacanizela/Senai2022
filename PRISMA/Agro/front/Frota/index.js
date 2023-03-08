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
    listar.forEach((e,i) => {
        let frota = document.querySelector(".info").cloneNode(true);
        frota.classList.remove("model");

        frota.querySelector("#id").innerHTML += e.id;
        frota.querySelector("#placa").innerHTML += e.placa;
        frota.querySelector("#modelo").innerHTML += e.modelo;
        frota.querySelector("#marca").innerHTML += e.marca;

        frota.querySelector("#edit").setAttribute("onclick", `dadosAlterar('${i}')`);

        frota.querySelector("#del").addEventListener("click", () => {
            remover(e.id);
        });

        listarFro.appendChild(frota);
    })
}

function dadosAlterar(i) {
    console.log(listar[i]);
    modal3.setAttribute('style', 'display:flex');
    ida.value = listar[i].id;
    placaa.value = listar[i].placa;
    modeloa.value = listar[i].modelo;
    marcaa.value = listar[i].marca;
}

function remover(id, frota) {
    fetch("http://localhost:3000/frotadel/" + id, {
        "method":"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
    })
    .then(resp => { return resp.status })
    .then(resp => {
        if (resp == 204)
            window.location.reload();
        else
            console.log(resp)
    })
}

function alterar() {
    let id = document.querySelector("#ida").value
    let placa = document.querySelector("#placaa").value
    let modelo = document.querySelector("#modeloa").value
    let marca = document.querySelector("#marcaa").value

    let corpo = {
        "placa": placa,
        "modelo": modelo,
        "marca": marca,
        
    }

    fetch("http://localhost:3000/frotaupdate/" + id, {
        "method":"PUT",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
          "body": JSON.stringify(corpo)
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        alt.update();
    });
    window.location.reload();
}


function cadastrarVeiculo() {
    //Cria um objeto com os dados dos campos html <input>

    let placa = document.querySelector("#placac").value
    let modelo = document.querySelector("#modeloc").value
    let marca = document.querySelector("#marcac").value

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