var uriLancas = `http://localhost:3000/lancamentos/debitos`;
var lancas = [];
const allLan = document.querySelector("#allLan");

function loadL(){
    fetch(uriLancas)
    .then(res => { return res.json()})
    .then(data => {
        lancas = data;
        preencheTable();
    });
}

function preencheTable() {
    let indice = 0;
    lancas.forEach(e => {
        let linha = document.createElement("tr");
        let n_lan = document.createElement("td");
        let data = document.createElement("td");
        let desc = document.createElement("td");
        let valor = document.createElement("td");
        let tipo = document.createElement("td");
        n_lan.innerHTML = e.e_lancamento;
        data.innerHTML = e.datas;
        desc.innerHTML = e.descricao;
        valor.innerHTML = e.valor;
        tipo.innerHTML = e.tipo;
        linha.appendChild(n_lan);
        linha.appendChild(data);
        linha.appendChild(desc);
        linha.appendChild(tipo);
        allLan.appendChild(linha);
        indice++;
    });
}

