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

function listaMotor() {
    listar.forEach((e, i) => {
        let motor = document.querySelector(".info").cloneNode(true);
        motor.classList.remove("model");

        motor.querySelector("#id").innerHTML += e.id;
        motor.querySelector("#nome").innerHTML += e.nome;
        motor.querySelector("#cnh").innerHTML += e.cnh;
        motor.querySelector("#cpf").innerHTML += e.cpf;

        motor.querySelector("#edit").setAttribute("onclick", `dadosAlterar('${i}')`);

        motor.querySelector("#del").addEventListener("click", () => {
            remover(e.id);
        });

        listarMotor.appendChild(motor);
    })
}

function dadosAlterar(i) {
    console.log(listar[i]);
    modal3.setAttribute('style', 'display:flex');
    ida.value = listar[i].id;
    nomea.value = listar[i].nome;
    cpfa.value = listar[i].cpf;
    cnha.value = listar[i].cnh;
}

function remover(id, motor) {
    fetch("http://localhost:3000/motordel/" + id, {
        "method": "DELETE",
        headers: {
            'Content-Type': 'application/json',
            "Bearer": JSON.parse(localStorage.getItem('info')).token
        },
    })
        .then(resp => { return resp.status(204)})
        .then(data => {
            motor.remove();
        });
    window.location.reload();
}


function alterar() {

    let id = document.querySelector("#ida").value
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
    .then(resp => { return resp.status })
    .then(resp => {
        if (resp == 204)
            window.location.reload();
        else
            console.log(resp)
    })
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