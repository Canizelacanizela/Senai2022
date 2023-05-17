var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");

var editar = document.querySelector(".editar");

var listarComent = document.querySelector(".footer");
var editar = document.querySelector(".editar");
const btCadedit = document.querySelector("#cadastro");
var perfil = {};

var listar = [];

function listInfo() {
  const options = { method: "GET" };

  let info = JSON.parse(window.localStorage.getItem("info"));

  fetch("http://localhost:3000/prof/" + info.id, options)
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Erro ao obter informações do servidor.");
      }
    })
    .then((res) => {
      perfil = info;
      let prof = document.querySelector(".all").cloneNode(true);
      // prof.classList.remove("model");

      document.querySelector("#nome").innerHTML += info.nome;
      document.querySelector("#hora").innerHTML += info.porhora;
      document.querySelector("#tel").innerHTML += info.telefone;
      document.querySelector("#email").innerHTML += info.email;
      document.querySelector("#city").innerHTML += info.cidade;
      document.querySelector("#cat").innerHTML += info.categoria.nome_categoria;
      document.querySelector("#biografia").innerHTML += info.biografia;

      // listarProf.appendChild(prof);
    });
}

function openModal() {
  const mCadas = document.getElementById('myModalEdit');
  document.getElementById("myModalEdit").style.display = "block";
}

// // Fechar modal ao clicar no botão de fechar
document.getElementsByClassName("close")[0].addEventListener("click", function () {
  document.getElementById("myModalEdit").style.display = "none";
});

function fecharCadastro(){
  document.getElementById("myModalEdit").style.display = "none";

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

