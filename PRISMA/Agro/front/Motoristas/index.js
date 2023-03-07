var UrList = "http://localhost:3000/motor";
var UmMotor = "http://localhost:3000/motorOne/";
var nomeUsuario = document.querySelector("#nome");
var listarMotor = document.querySelector(".info-tudo");
var itemMotor = document.querySelector(".info");
var labelID = document.querySelector("#altLabel");


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

function listaMotor() {
    listar.forEach(e => {
        let motor = document.querySelector(".info").cloneNode(true);
        motor.classList.remove("model");

        motor.querySelector("#id").innerHTML += e.id;
        motor.querySelector("#nome").innerHTML += e.nome;
        motor.querySelector("#cnh").innerHTML += e.cnh;
        motor.querySelector("#cpf").innerHTML += e.cpf;

        motor.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

        motor.querySelector("#del").addEventListener("click", () => {
            remover(e.id, motor);
        });

        listarMotor.appendChild(motor);
    })
}

// function carregarUm(id) {
//     const options = {
//         method: "GET"
//     }
//     fetch("http://localhost:3000/motorOne/" + id, options)
//         .then(res => res.json())
//         .then(res => {
//             listar = res;
//             listaMotorUm();
//         })
//         .catch(err => console.error(err));
// }

// function listaMotorUm() {
//     listar.forEach(e => {
//         let motorUm = document.querySelector(".modall").cloneNode(false);

//         motorUm.querySelector("#id").innerHTML += e.id;
//         motorUm.querySelector("#nome").innerHTML += e.nome;
//         motorUm.querySelector("#cnh").innerHTML += e.cnh;
//         motorUm.querySelector("#cpf").innerHTML += e.cpf;

//         motorUm.querySelector("#edit").setAttribute("onclick", "modal3.setAttribute('style','display:flex')");

//         motorUm.querySelector("#del").addEventListener("click", () => {
//             remover(e.id, motorUm);
//         });

//         listarMotorUm.appendChild(motorUm);
//     })
// }


function remover(id, motor) {
    fetch("http://localhost:3000/motordel/" + id, {
        "method": "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
    })
        .then(resp => { return resp.status(204) })
        .then(data => {
            motor.remove();
        });
    window.location.reload();
}


function alterar(id, alt) {

    let nome = document.querySelector("#nomea").value
    let cnh = document.querySelector("#cnha").value
    let cpf = document.querySelector("#cpfa").value

    let corpo = {
        "nome": nome,
        "cnh": cnh,
        "cpf": cpf,
    }

    fetch("http://localhost:3000/motorupdate/" + id, {
        "method": "PUT",
        headers: {
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
        "body": JSON.stringify(corpo)
    })
        .then(resp => { return resp.status(204) })
        .then(data => {
            alt.update();
        });
    window.location.reload();
}


function cadastrarMotorista() {
    //Cria um objeto com os dados dos campos html <input>

    let nome = document.querySelector("#nomec").value
    let cnh = document.querySelector("#cnhc").value
    let cpf = document.querySelector("#cpfc").value

    let corpo = {
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
                window.location.reload();
            } else {
                console.log("Parece que deu erro");
            }
        });
}

function alerta(a) {
    document.querySelector('#modal2').setAttribute('style', 'display:flex;');
    document.querySelector('#alerta').setAttribute('style', 'display:flex;');
    document.querySelector('#msg').innerHTML = a;
}