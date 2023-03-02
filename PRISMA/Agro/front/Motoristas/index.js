var UrList = "http://localhost:3000/motor";
var nomeUsuario = document.querySelector("#nome");
var listarMotor = document.querySelector(".info-tudo");
var itemMotor = document.querySelector(".info");

var listar = [];

function carregar() {
    const options = {
        method: "GET"
    }
        fetch(UrList, options)
        .then(res => res.json())
        .then(res => {
            listar = res;
            listaMotor();
        })
        .catch(err => console.error(err));
    }

function listaMotor()  {
    listar.forEach(e => {
        let motor = document.querySelector(".info").cloneNode(true);
        motor.classList.remove("model");

        motor.querySelector("#id_user").innerHTML += e.id_user;
        motor.querySelector("#nome").innerHTML += e.nome;
        motor.querySelector("#cnh").innerHTML += e.cnh;
        motor.querySelector("#cpf").innerHTML += e.cpf;


        listarMotor.appendChild(motor);
    })
}

    
