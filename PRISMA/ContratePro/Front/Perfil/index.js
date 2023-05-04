var UrList = "http://localhost:3000/prof";
var listarProf = document.querySelector(".profile");
var editar = document.querySelector(".editar");

function carregar() {
  const options = {
    method: "GET",
  };
  fetch(UrList, options)
    .then((res) => res.json())
    .then((res) => {
      listInfo(res);
    })
    .catch((err) => console.error(err));
}

function listInfo(profissionais) {
  profissionais.forEach((e, i) => {
    let prof = document.querySelector(".all").cloneNode(true);

    prof.classList.remove("model");

    prof.querySelector("#id").innerHTML += e.id;
    prof.querySelector("#nome").innerHTML += e.nome;
    prof.querySelector("#hora").innerHTML += e.porhora;
    prof.querySelector("#tel").innerHTML += e.telefone;
    prof.querySelector("#email").innerHTML += e.email;
    prof.querySelector("#biografia").innerHTML += e.biografia;
    prof.querySelector("#cat").innerHTML += e.categoria.nome_categoria;
    prof.querySelector("#city").innerHTML += e.cidade;

    // e.Comentario.forEach(comentario => {
    //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
    // });

    listarProf.appendChild(prof);
  });
}

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


