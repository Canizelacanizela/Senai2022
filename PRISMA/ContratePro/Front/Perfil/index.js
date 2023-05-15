var UrList = "http://localhost:3000/prof/";
var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");

var editar = document.querySelector(".editar");

var listarComent = document.querySelector(".footer");
var editar = document.querySelector(".editar");
const btCadedit = document.querySelector("#cadastro");
var perfil = {}

var listar = [];


// function listInfo() {
//   const options = { method: 'GET' };
//   let info = JSON.parse(window.localStorage.getItem("info"))

//   fetch('http://localhost:3000/prof/'+id, options)
//     .then((res) => res.json())
//     .then((info) => {
//       let prof = document.querySelector(".all").cloneNode(true);
//       prof.classList.remove("model");

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
      listarProf.appendChild(prof);
    })
    

//       prof.querySelector("#nome").innerHTML += info.nome;
//       prof.querySelector("#hora").innerHTML += info.porhora;
//       prof.querySelector("#tel").innerHTML += info.telefone;
//       prof.querySelector("#email").innerHTML += info.email;
//       prof.querySelector("#biografia").innerHTML += info.biografia;


//       // prof.Comentario.forEach((comentario) => {
//       //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
//       // });

//       document.getElementById("listarProf").appendChild(prof);
//     })
//     .catch((err) => console.error(err));
//   }


// // let info = JSON.parse(window.localStorage.getItem("info"))
// // querySelector("#nome").innerHTML += info.nome;



// function comentarios() {
//   const options = {
//     method: "GET",
//   };
//   fetch(UrComent, options)
//     .then((res) => res.json())
//     .then((res) => {
//       listInfo(res);
//     })
//     .catch((err) => console.error(err));
// }

// function listInfo(profissionais) {
//   profissionais.forEach((e, i) => {
//     let prof = document.querySelector(".all").cloneNode(true);

//     prof.classList.remove("model");

// function listComent(comentario) {
//   comentario.forEach((e, i) => {
//     let com = document.querySelector(".all").cloneNode(true);
//     console.log(com);
//     com.classList.remove("modell");



//     // e.Comentario.forEach(comentario => {
//     //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
//     // });

//     listarProf.appendChild(prof);
//   });
// }

const myBtn = document.getElementById("myBtn");
const modal = document.getElementById("myModal");
const closeBtn = document.getElementsByClassName("close")[0];


function AbrirModalEditar() {
  modal.style.display = "block";
  alterarModal();
}
function fecharCadastro() {
  modal.style.display = "none";
}

closeBtn.addEventListener("click", function () {
  modal.style.display = "none";
});

// console.log(alterarModal());
function alterarModal() {
  // Pega os valores dos campos do formulário
  const id = document.getElementById('id').value;
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const cidade = document.getElementById('cidade').value;
  const biografia = document.getElementById('biografia').value;
  const porhora = document.getElementById('porhora').value;
  const telefone = document.getElementById('telefone').value;

      
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

  // Faz a requisição fetch
  fetch('http://localhost:3000/profupdate/'+ id, {
    method: 'PUT', // usa o método PUT para atualizar os dados
    headers: {
      'Content-Type': 'application/json' // define o tipo de conteúdo como JSON
    },
    body: JSON.stringify({ // converte os dados para JSON
      id,
      nome,
      email,
      cidade,
      biografia,
      porhora,
      telefone
    })
  })
  .then(response => response.json())
  .then(data => {
    // Se a requisição foi bem-sucedida, atualiza os dados no modal
    if (data.success) {
      const modal = document.getElementById('myModal');
      modal.style.display = 'none';
      alert("oi")
      // atualiza os dados na tabela ou onde for necessário
    }
  })
  .catch(error => console.error(error));
}
}
