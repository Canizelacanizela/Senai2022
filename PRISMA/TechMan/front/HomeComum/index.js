var UrList = "http://localhost:3000/equip";
var listarEquip = document.querySelector(".profileTwo");
var itemSec = document.querySelector(".profile-body-section");
const labelid = document.querySelector("#idExclui");

function carregar() {
    const options = {
        method: "GET"
    }
    fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listaEquipamento(res);
        })
        .catch(err => console.error(err));
}

function listaEquipamento(profissionais) {
    profissionais.forEach((e, i) => {
        let equip = document.querySelector(".profile-body-section").cloneNode(true);
        equip.classList.remove("model");

        equip.querySelector("#imagem").src = '../assets/' + e.imagem;
        equip.querySelector("#equipamento").innerHTML += e.equipamento;
        equip.querySelector("#descricao").innerHTML += e.descricao;

        listarEquip.appendChild(equip);
    });

}



function sair() {
    window.localStorage.removeItem("info");
    window.location.href = "../Login/index.html";
}


//  ______________modal coment_____________________

// Abrir modal ao clicar no botão
function openModal() {
    mComent.setAttribute('style', 'display:block');
}

// Fechar modal ao clicar no botão de fechar
document.getElementsByClassName("close")[0].addEventListener("click", function () {
    document.getElementById("Mymodal").style.display = "none";
});

// Fechar modal ao clicar fora do conteúdo do modal
window.addEventListener("click", function (event) {
    if (event.target == document.getElementById("Mymodal")) {
        document.getElementById("Mymodal").style.display = "none";
    }
});
