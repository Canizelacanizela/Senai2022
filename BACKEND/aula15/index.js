function code(){
    fetch("https://localhost:3000/alunos/")
.then((res) => {
    return res.json();
})
    data.forEach(todo => {
        
        let novoItem = document.querySelector(".item-lista").cloneNode(true);

        novoItem.classList.remove("model");

    novoItem.querySelector("#Id").innerHTML = todo.Id;
    novoItem.querySelector("#nome").innerHTML = todo.nome;
    novoItem.querySelector("#nas").innerHTML= todo.nas;
    novoItem.querySelector("#se").innerHTML = todo.se;
    novoItem.querySelector("#pes").innerHTML = todo.pes;

    document.querySelector(".lista").append(novoItem);
        
    });
};

