const uri = 'https://patrimoniomongo.herokuapp.com/read/items';
const lista = document.querySelector("#lista");
var data = [];

function carregar() {
    const options = { method: 'GET' };

    fetch(uri, options)
        .then(resp => resp.json())
        .then(resp => {
            data = resp;
            preecherTabela();
        })
        .catch(err => console.error(err));
}

function preecherTabela() {
    data.forEach(e => {
        let l = document.createElement("tr");
        let imag = document.createElement("td");
        let id = document.createElement("td");
        let ni = document.createElement("td");
        let aquisicao = document.createElement("td");
        let denominacao = document.createElement("td");
        let valor = document.createElement("td");
        let excluir = document.createElement("td");
        imag.innerHTML = `<img src='../../assets/servidor.png' width='40px' height='40px' />`;
        id.innerHTML = e._id;
        ni.innerHTML = e.ni;
        aquisicao.innerHTML = e.aquisicao;
        denominacao.innerHTML = e.denominacao;
        valor.innerHTML = e.valor;
        excluir.innerHTML = `<img src='../../assets/exclui.png' width='40px' height='40px' />`;
        l.appendChild(imag);
        l.appendChild(id);
        l.appendChild(ni);
        l.appendChild(aquisicao);
        l.appendChild(denominacao);
        l.appendChild(valor);
        l.appendChild(excluir);
        lista.appendChild(l);
    });
}



