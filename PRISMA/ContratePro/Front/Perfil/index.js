var UrList = "http://localhost:3000/prof/";
var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");
var listarComent = document.querySelector(".footer");
var editar = document.querySelector(".editar");
const btCadedit = document.querySelector("#cadastro");
var perfil = {}

var listar = [];

function listInfo() {
  const options = { method: 'GET' };
  let info = JSON.parse(window.localStorage.getItem("info"))
  fetch('http://localhost:3000/prof/' + info.id, options)
    .then((res) => res.json())
    .then((info, i) => {
      perfil = info
      let prof = document.querySelector(".all").cloneNode(true);
      prof.classList.remove("model");

      prof.querySelector("#nome").innerHTML += info.nome;
      prof.querySelector("#hora").innerHTML += info.porhora;
      prof.querySelector("#tel").innerHTML += info.telefone;
      prof.querySelector("#email").innerHTML += info.email;
      prof.querySelector("#city").innerHTML += info.cidade;
      prof.querySelector("#edit").setAttribute("onclick", `dadosAlterar()`);
      prof.querySelector("#biografia").innerHTML += info.biografia;
      prof.querySelector("#cat").innerHTML += info.categoria.nome_categoria;

      // prof.Comentario.forEach((comentario) => {
      //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
      // });

      listarProf.appendChild(prof);
    })
    .catch((err) => console.error(err));
}

function dadosAlterar() {
  console.log(perfil);
  modal3.setAttribute('style', 'display:flex');
  ida.value = perfil.id;
  nomea.value = perfil.nome;
  emaila.value = perfil.email;
  cidadea.value = perfil.cidade;
  biografiaa.value = perfil.biografia;
  porhoraa.value = perfil.porhora;
  telefonea.value = perfil.telefone;
}

function alterar() {

  let id = document.querySelector("#ida").value
  let nome = document.querySelector("#nomea").value
  let email = document.querySelector("#emaila").value
  let cidade = document.querySelector("#cidadea").value
  let biografia = document.querySelector("#biografiaa").value
  let porhora = document.querySelector("#porhoraa").value
  let telefone = document.querySelector("#telefonea").value

  let corpo = {
    "nome": nome,
    "email": email,
    "cidade": cidade,
    "biografia": biografia,
    "porhora": porhora,
    "telefone": telefone,
  }

  fetch("http://localhost:3000/profupdate/" + id, {
    "method": "PUT",
    headers: {
      'Content-Type': 'application/json',
      // "Bearer": JSON.parse(localStorage.getItem('info')).token
    },
    "body": JSON.stringify(corpo)
  })
    .then(resp => { return resp.status })
    .then(resp => {
      if (resp == 202)
        window.location.reload();
      else
        console.log(resp)
    })
}


// function abrirModal() {
//   btCadedit.onclick =  () => {
//     alterarModal();
//   };
//   console.log();
//   document.querySelector("#ida").value = id;
//   document.querySelector("#placaa").value = placa;
//   document.querySelector("#modeloa").value = modelo;
//   document.querySelector("#marcaa").value = marca;
//   editar.classList.remove("Jec");
// }

// console.log(alterarModal());

// function alterarModal() {

//  // Pega os valores dos campos do formulário
//  const id = document.getElementById('id').value;
//  const nome = document.getElementById('nome').value;
//  const email = document.getElementById('email').value;
//  const cidade = document.getElementById('cidade').value;
//  const biografia = document.getElementById('biografia').value;
//  const porhora = document.getElementById('porhora').value;
//  const telefone = document.getElementById('telefone').value;

//  let info = JSON.parse(window.localStorage.getItem("info"))
//  fetch('http://localhost:3000/profupdate/'+ info.id,{
//   method:'PUT',
//   headers:{
//     'Content-Type': 'application/json'
//   },

//   body: JSON.stringify({
//     id,
//     nome,
//     email,
//     cidade,
//     biografia,
//     porhora,
//     telefone
//   })
// })
// .then(response => response.json())
// .then(data =>{
//   if(data.success){
//     const modal = document.getElementById('myModal');
//     modal.style.display = 'none';
//     alert("Parabéns")
//   }
// })
//  .catch(error => console.error)
// }