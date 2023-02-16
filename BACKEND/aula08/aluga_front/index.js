var uriAlugam = `http://localhost:3000/aluga/clientes`;
var alugam = [];
const allA = document.querySelector("#allA");

function Load(){
    fetch(uriAlugam)
    .then(res => {return res.json()})
    .then(data => {
        alugam = data;
        preencheTable();
    });
}

function preencheTable(){
    let indice = 0;
    alugam.forEach(e =>{
        let linha = document.createElement("tr");
        let nomeCli = document.createElement("td");
        let tel = document.createElement("td");
        let fil = document.createElement("td");
        let dataL = document.createElement("td");
        nomeCli.innerHTML = e.nome;
        tel.innerHTML = e.telefone;
        fil.innerHTML = e.nome_filme;
        dataL.innerHTML = e.data_locacao;
        linha.appendChild(nomeCli);
        linha.appendChild(tel);
        linha.appendChild(fil);
        linha.appendChild(dataL);
        allA.appendChild(linha);
        indice++;
    });
}