var UrList = "http://localhost:3000/prof";
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
            listaProfissionais(res);
        })
        .catch(err => console.error(err));
}

function listaProfissionais(profissionais) {
    profissionais.forEach((e, i) => {
        let prof = document.querySelector(".profile-body-section").cloneNode(true);
        prof.classList.remove("model");


        prof.querySelector("#id").innerHTML += e.id;
        prof.querySelector("#imagem").src = "../assets/" + e.imagem;
        prof.querySelector("#nome").innerHTML += e.nome;
        prof.querySelector("#cidade").innerHTML += e.cidade;
        prof.querySelector("#biografia").innerHTML += e.biografia;
        prof.querySelector("#nome_categoria").innerHTML += e.categoria.nome_categoria;
        prof.querySelector(".redirect").innerHTML = `<button onclick="redirecionar(${e.id})">Ver Perfil</button>`
        prof.querySelector("#porhora").innerHTML += e.porhora;

        listarProf.appendChild(prof);
    });

}


function redirecionar(id) {
    // Construir a URL com os parâmetros de consulta
    const url = `/Front/teste_perfilCli/pagina_destino.html?id=${id}`;

    // Redirecionar para a página de destino
    window.location.href = url;
}

function dados(i) {
    console.log(listar[i]);
    modal1.setAttribute('style', 'display:flex');
    idc.value = listar[i].id_profissional;
    idcl.value = listar[i].id_cliente;
}

const button = document.querySelector('.enviar-proposta');
// const profissionalId = button.dataset.id_profissional;

//Falta arrumar a proposta, pegar o id do proffisional  como esse exemplo aqui <button onclick="abremodaldaProposta(${e.id})""> ai pega e coloca como e.id ou id mesmo 
//e nao colocar como id_profissional...Não precisa de nome porque o id já pega ele com todo o resto das informações!

button.addEventListener('click', () => {
    let id_profissional = document.querySelector("#idc").value
    let id_cliente = document.querySelector("#idcl").value
    let proposta = document.querySelector("#propostac").value

    let corpo = {
        "proposta": proposta,
        "id_cliente": Number(info.id),
        "id_profissional": Number(id_profissional),
    }
    console.log(corpo);
    // let options = {
    //     "method": "POST",
    //     "headers": {
    //         "content-type": "application/json",
    //     },
    //     "body": JSON.stringify(corpo)
    // };

    // fetch('http://localhost:3000/propcriar', options)
    //     .then(res => { return res.json() })
    //     .then(resp => {
    //         if (resp != undefined) {
    //             alert("Proposta enviada para o profissional.");
    //             window.location.reload();
    //         } else {
    //             console.log("Parece que aconteceu um erro inesperado. Tente novamente mais tarde.");
    //         }
    //     });
});




function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}

function search() {
    const Categorias = document.querySelectorAll('#nome_categoria');

    Categorias.forEach((name) => {
        if (!name.parentNode.className.includes("model")) name.parentNode.style.display = 'block';


        if (!name.innerHTML.toLowerCase().includes(busca.value.toLowerCase())) {
            name.parentNode.style.display = 'none';
        }
    });
}

function sair() {
    window.localStorage.removeItem("info");
    window.location.href = "../LoginCliente/index.html";
}