var UrList = "http://localhost:3000/prop";
var listarProf = document.querySelector(".profileTwo");
var busca = document.querySelector("#search");
var itemSec = document.querySelector(".profile-body-section");
const imguser = document.querySelector("#perfil");

var info = JSON.parse(localStorage.getItem("info"));

imguser.src = "../assets/" + info.imagem;



function carregar() {
    const options = {
        method: "GET"
    }
    fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listaPropostas(res);
        })
        .catch(err => console.error(err));
}

function listaPropostas(propostas) {
    propostas.forEach((e, i) => {
        let prop = document.querySelector(".profile-body-section").cloneNode(true);
        prop.classList.remove("model");


        prop.querySelector("#id").innerHTML += e.id;
        prop.querySelector("#imagem").src = "../assets/" + e.imagem;
        prop.querySelector("#nome").innerHTML += e.nome;
        prop.querySelector("#cidade").innerHTML += e.cidade;
        prop.querySelector("#proposta").innerHTML += e.biografia;
        prop.querySelector("#nome_categoria").innerHTML += e.categoria.nome_categoria;
        prop.querySelector(".redirect").innerHTML = `<button onclick="redirecionar(${e.id})">Ver Perfil</button>`
        prop.querySelector("#edit").setAttribute("onclick", `modalProposta(${e.id})`);

        listarProp.appendChild(prop);
    });

}

function aplicarFiltro(filtro) {
    const dados = document.querySelectorAll(".profile-header");
    dados.forEach(e => {
        const cidade = e.querySelector("#cidade").innerHTML;
        if (cidade !== filtro) {
            e.parentNode.style.display = "none";
        } else {
            e.parentNode.style.display = "block";
        }
    });
    if (filtro == "Todas") window.location.reload();
}



function redirecionar(id) {

    // console.log(id);
    // Construir a URL com os parâmetros de consulta
    const url = `../teste_perfil/pagina_destino.html`;

    localStorage.setItem("user_profissional", JSON.stringify({ "id_user": id.toString() }));
    // Redirecionar para a página de destino
    window.location.href = url;
}



function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}

// function search() {
//     const busca = document.querySelector('#busca').value.toLowerCase();
//     const perfis = document.querySelectorAll('.profile-body-section');

//     perfis.forEach((perfil) => {
//         const nome = perfil.querySelector('#nome').textContent.toLowerCase();


//         if (nome.includes(busca)) {
//             perfil.style.display = 'block';
//         } else {
//             perfil.style.display = 'none';
//         }
//     });
// }

function sair() {
    window.localStorage.removeItem("info");
    window.location.href = "../LoginCliente/index.html";
}