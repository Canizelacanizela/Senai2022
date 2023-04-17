var UrList = "http://localhost:3000/frota";
var itemFro = document.querySelector(".info");
var listar = document.querySelector(".main");

var listar = [];

function carregar() {
    const options = {
        method: "GET"
    }
        fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listar = res;
            lista();
        })
        .catch(err => console.error(err));
    }


function lista()  {
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
