
var UrList = "http://localhost:3000/prof/";
var UrComent = "http://localhost:3000/profcom";
var listarProf = document.querySelector(".profile");
var listarComent = document.querySelector(".footer");


function listInfo(id) {
  const options = {method: 'GET'};

  fetch(`http://localhost:3000/prof/`+id , options)
    .then((res) => res.json())
    .then((profissional) => {
      let prof = document.querySelector(".all").cloneNode(true);
      prof.classList.remove("model");

      prof.querySelector("#nome").innerHTML += profissional.nome;
      prof.querySelector("#hora").innerHTML += profissional.porhora;
      prof.querySelector("#tel").innerHTML += profissional.telefone;
      prof.querySelector("#email").innerHTML += profissional.email;
      prof.querySelector("#biografia").innerHTML += profissional.biografia;
     
      // prof.Comentario.forEach((comentario) => {
      //   prof.querySelector("#coment").innerHTML += comentario.comentario + "<br>";
      // });

      document.getElementById("listarProf").appendChild(prof);
    })
    .catch((err) => console.error(err));
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