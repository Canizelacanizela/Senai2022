var UrList = "http://localhost:3000/prof";
var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");
var listarComent = document.querySelector(".footer");

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
    console.log(prof);
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
})
}

function comentarios() {
  const options = {
    method: "GET",
  };
  fetch(UrComent, options)
    .then((res) => res.json())
    .then((res) => {
      listInfo(res);
    })
    .catch((err) => console.error(err));
}

function listComent(comentario) {
  comentario.forEach((e, i) => {
    let com = document.querySelector(".all").cloneNode(true);
    console.log(com);
    com.classList.remove("modell");

    
    com.querySelector("#nomec").innerHTML += e.nome;
    com.querySelector("#coment").innerHTML += e.comentario

    // e.Comentario.forEach(comentario => {
    //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
    // });

    listarComent.appendChild(com);
})
}