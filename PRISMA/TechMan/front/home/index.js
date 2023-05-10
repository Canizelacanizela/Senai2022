var UrList = "http://localhost:3000/equip";
var listarEquip = document.querySelector(".profileTwo");
var itemSec = document.querySelector(".profile-body-section");
const mExcluir = document.querySelector("#modalExcluir");
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
        equip.querySelector("#del").addEventListener("click", () => {
            preparaExclusao(e.id);
        });

        listarEquip.appendChild(equip);
    });

}

<<<<<<< HEAD
=======



function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `../assets/disaster.jpg`;
}
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
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



function sair() {
    window.localStorage.removeItem("info");
    window.location.href = "../Login/index.html";
}

function preparaExclusao(id) {
    mExcluir.setAttribute('style', 'display:flex');
    labelid.innerHTML = id;
}

<<<<<<< HEAD
function excluir(id) {
=======

<<<<<<< HEAD
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
=======
// function sair() {
//     window.localStorage.removeItem("info");
//     window.location.href = "../LoginProf.html"
// }

function remover(id, equip) {
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
    fetch("http://localhost:3000/equipdel/" + id, {
        "method": "DELETE",
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(resp => { return resp.status })
    .then(resp => {
        if (resp == 204)
            window.location.reload();
        else
            console.log(resp)
    })
}
<<<<<<< HEAD



// function remover(id) {
//     fetch("http://localhost:3000/equipdel/" + id, {
//         "method": "DELETE",
//         headers: {
//             'Content-Type': 'application/json'
//         },
//     })
//     .then(resp => { return resp.status })
//     .then(resp => {
//         if (resp == 204)
//             window.location.reload();
//         else
//             console.log(resp)
//     })
// }
=======
>>>>>>> 62b424b995c5c99f6a8f492ab5c1cbd43801309e
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
