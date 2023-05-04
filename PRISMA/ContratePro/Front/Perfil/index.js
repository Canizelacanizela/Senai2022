var UrList = "http://localhost:3000/prof/";
var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");
var listarComent = document.querySelector(".footer");


function listInfo() {
  const options = { method: 'GET' };
  let info = JSON.parse(window.localStorage.getItem("info"))
  fetch('http://localhost:3000/prof/' + info.id, options)
    .then((res) => res.json())
    .then((info) => {
      console.log(info)
       let prof = document.querySelector(".all").cloneNode(true);
       prof.classList.remove("model");

       prof.querySelector("#nome").innerHTML += info.nome;
      // prof.querySelector("#hora").innerHTML += info.porhora;
      // prof.querySelector("#tel").innerHTML += info.telefone;
      // prof.querySelector("#email").innerHTML += info.email;
      // prof.querySelector("#biografia").innerHTML += info.biografia;

      // prof.Comentario.forEach((comentario) => {
      //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
      // });

      document.getElementById("listarProf").appendChild(prof);
    })
    .catch((err) => console.error(err));
}


// let info = JSON.parse(window.localStorage.getItem("info"))
// querySelector("#nome").innerHTML += info.nome;



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