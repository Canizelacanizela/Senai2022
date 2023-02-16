const clientes = document.querySelector(".clientes");
const cliente = document.querySelector(".cliente");
const modal = document.querySelector(".modal");
const telefones = document.querySelector(".telefones");

fetch("http://localhost:3000/duplicatas/clientes")
.then(resp => {return resp.json()})
.then(clientes => {
    clientes.forEach(cliente => {
        duplicarProduto(cliente);
    })
});

function showModal(indice) {
    modal.classList.toggle("model");

    let aTel = telefones.cloneNode(true);

    aTel.classList.remove("model");

    aTel.querySelector("#tipoTel").innerHTML = indice.ttpo;
    aTel.querySelector("#Tel").innerHTML = indice.numero;
}



function duplicarProduto(info) {
    let nCli = cliente.cloneNode(true);

    nCli.classList.remove("model");

    nCli.querySelector("#codCli").innerHTML = info.cod_cli;
    nCli.querySelector("#nome").innerHTML = info.nome;
    nCli.querySelector("#cidade").innerHTML = info.cidade;
    nCli.querySelector("#uf").innerHTML = info.uf;

    clientes.appendChild(nCli);
}