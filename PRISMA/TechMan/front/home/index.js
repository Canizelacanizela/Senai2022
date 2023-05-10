var UrList = "http://localhost:3000/equip";
var listarEquip = document.querySelector(".profileTwo");
var itemSec = document.querySelector(".profile-body-section");

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

        equip.querySelector("#imagem").innerHTML += montaImg(e.imagem);
        equip.querySelector("#equipamento").innerHTML += e.equipamento;
        equip.querySelector("#descricao").innerHTML += e.descricao;


        listarEquip.appendChild(equip);
    });

}




function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `../assets/disaster.jpg`;
}
// function dados(i) {
//     console.log(listar[i]);
//     modal1.setAttribute('style', 'display:flex');
//     idc.value = listar[i].id;
// }

// const button = document.querySelector('.enviar-proposta');
// const profissionalId = button.dataset.id_profissional;


// button.addEventListener('click', () => {
//     let id = document.querySelector("#idc").value
//     let nome = document.querySelector("#nomec").value
//     let proposta = document.querySelector("#propostac").value

//     let corpo = {
//         "id_profissionais": profissionalId,
//         "nome": nome,
//         "proposta": proposta
//     }

//     let options = {
//         "method": "POST",
//         "headers": {
//             "content-type": "application/json",
//             // "Bearer": JSON.parse(localStorage.getItem('info')).token
//         },
//         "body": JSON.stringify(corpo)
//     };

//     fetch('http://localhost:3000/prop', options)
//         .then(res => { return res.json() })
//         .then(resp => {
//             if (resp != undefined) {
//                 alert("Proposta enviada para o profissional.");
//                 window.location.reload();
//             } else {
//                 console.log("Parece que aconteceu um erro inesperado. Tente novamente mais tarde.");
//             }
//         });
// });

// function alerta(a) {
//     document.querySelector('#modal2').setAttribute('style', 'display:flex;');
//     document.querySelector('#alerta').setAttribute('style', 'display:flex;');
//     document.querySelector('#msg').innerHTML = a;
// }






//  ______________modal coment_____________________

// Abrir modal ao clicar no botão
function openModal() {
    document.getElementById("Mymodal").style.display = "block";
}
  
  // Fechar modal ao clicar no botão de fechar
  document.getElementsByClassName("close")[0].addEventListener("click", function() {
    document.getElementById("Mymodal").style.display = "none";
  });
  
  // Fechar modal ao clicar fora do conteúdo do modal
  window.addEventListener("click", function(event) {
    if (event.target == document.getElementById("Mymodal")) {
      document.getElementById("Mymodal").style.display = "none";
    }
  });