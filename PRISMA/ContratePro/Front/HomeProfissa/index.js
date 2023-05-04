var UrList = "http://localhost:3000/prof";
var listarProf = document.querySelector(".profileTwo");
var busca = document.querySelector("#search");
var itemSec = document.querySelector(".profile-body-section");

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

        prof.querySelector("#nome").innerHTML += e.nome;
        prof.querySelector("#biografia").innerHTML += e.biografia;
        prof.querySelector("#nome_categoria").innerHTML += e.categoria.nome_categoria;


        listarProf.appendChild(prof);
    });

}

function dados(i) {
    console.log(listar[i]);
    modal1.setAttribute('style', 'display:flex');
    idc.value = listar[i].id;
}

const button = document.querySelector('.enviar-proposta');
const profissionalId = button.dataset.id_profissional;


button.addEventListener('click', () => {
    let id = document.querySelector("#idc").value
    let nome = document.querySelector("#nomec").value
    let proposta = document.querySelector("#propostac").value

    let corpo = {
        "id_profissionais": profissionalId,
        "nome": nome,
        "proposta": proposta
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            // "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    };

    fetch('http://localhost:3000/prop', options)
        .then(res => { return res.json() })
        .then(resp => {
            if (resp != undefined) {
                alert("Proposta enviada para o profissional.");
                window.location.reload();
            } else {
                console.log("Parece que aconteceu um erro inesperado. Tente novamente mais tarde.");
            }
        });
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
    window.location.href = "../LoginProf.html"
}