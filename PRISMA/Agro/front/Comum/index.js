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

        listarFro.appendChild(frota);
    })
}
