var usuarios =[
    {
        "id": "abc1234",
        "name": "Marianne",
        "avatar":"http...."
        },
        {
        "id": "1234",
        "name": "Julian",
        "avatar":"http...."
        },
        {
        "id": "abc",
        "name": "Nicole",
        "avatar":"http...."
        }
        
];

function salvar() {
    let infoUser = [
        {
        "id": 1,
        "produto": "Chocolate",
        },
        {
        "id": 2,
        "name": "Torta de Limão",
        }
    ];

let infoTexto = JSON.stringify(infoUser);

    window.localStorage.setItem("userData", infoTexto);
}

function carregar() {
    let info = window.localStorage.getItem("userData");
    let objUser = JSON.parse(info);
    console.log(objUser);
    console.log(info);
}

function apagar() {
    //window.localStorage.removeItem("userData");
    //window.localStorage.clear();

    let info = window.localStorage.getItem("userData");
    let objUser = JSON.parse(info);

    objUser.pop();

    window.localStorage.setItem("userData", JSON.stringify(objUser));
}

function login() { 
 let usuario = "Nicole"
 let senha= "1234"

    usuarios.forEach(user => {
        if(user.login == usuario && user.senha == senha) {
            console.log(user);
            window.localStorage.setItem("userData", JSON.stringify(user));
            }
        })
}
