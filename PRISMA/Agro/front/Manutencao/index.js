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

        motor.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

        motor.querySelector("#del").addEventListener("click", () => {
            remover(e.id_user, motor);
        });

        listarMotor.appendChild(motor);
    })
}

function remover(id, motor) {
    fetch("http://localhost:3000/motordel/" + id, {
        "method":"DELETE",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        motor.remove();
    });
}

function alterar(id, alt) {
    fetch("http://localhost:3000/motorupdate/" + id, {
        "method":"PUT",
        headers:{
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
          },
    })
    .then(resp => { return resp.status(204)})
    .then(data => {
        alt.update();
    });
}


function cadastrarMotorista() {
    //Cria um objeto com os dados dos campos html <input>

    let id_user = document.querySelector("#id_user").value
    let nome = document.querySelector("#nome").value
    let cnh = document.querySelector("#cnh").value
    let cpf = document.querySelector("#cpf").value

    let corpo = {
        "id_user": id_user,
        "nome": nome,
        "cnh": cnh,
        "cpf": cpf,
        
    }

    let options = {
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    };

        fetch('http://localhost:3000/motorcriar', options)
            .then(res => { return res.json() })
            .then(resp => {
                if (resp != undefined) {
                    console.log("Deu Certo");
                } else {
                    console.log("Parece que deu erro");
                }
            });
        window.location.reload();
    }

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}