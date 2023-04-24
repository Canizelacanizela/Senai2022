var UrList = "http://localhost:3000/prof";
var listarProf = document.querySelector(".profileTwo");
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
        prof.querySelector("#nome_p").innerHTML += e.nome_p;
        prof.querySelector("#descricao").innerHTML += e.descricao;
        prof.querySelector("#preco_h").innerHTML += e.preco_h;

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

    fetch('http://localhost:3000/profcriar', options)
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

