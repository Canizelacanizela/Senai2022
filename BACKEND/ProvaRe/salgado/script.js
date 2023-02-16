const itemLi = document.querySelector(".item-li");
const lista = document.querySelector(".li");

fetch("http://10.87.207.2:3000/salgados")
.then(resp => {return resp.json()})
.then(salgado => {
    salgado.forEach(data => {
        let item = itemLi.cloneNode(true);

        item.classList.remove("model");

        item.querySelector("span").addEventListener("click", () => { remover(data.id, item); })
        
        item.querySelector("#id").innerHTML = data.id;
        item.querySelector("#nome").innerHTML = data.nome;
        item.querySelector("#descricao").innerHTML = data.descricao;
        item.querySelector("img").src = "../assets/" + data.foto;

        lista.appendChild(item);
    })
})

function remover(id,item) {



    fetch('http://10.87.207.2:3000/salgado/id' + id,{
        "method": "DELETE"
    })
    .then(response => response.json())
    .then(data => {
        item.remove();
    });
}

function modalCad() {
    document.querySelector(".mc").classList.toggle("model");
}

function modalSucesso() {
    document.querySelector(".ms").classList.toggle("model");
}

function cadastrar() {
    
   

      document.querySelectorAll(".body > input").forEach(inp => {
      data[inp.className] = (inp.className === "nome" || inp.className === "descricao" ||inp.className === "img");
        });
    
      fetch("http://10.87.207.2:3000/salgado", {
          "method":"POST",
          "headers": {
              "Content-Type": "application/json"
          },
          "body": JSON.stringify(data)
      })
      .then(resp => { return resp.status; })
      .then(data => {
          if(data === 201) {
              modalCad();
              modalSucesso();
              setTimeout(() => { modalSucesso() }, 2000);
          }
      })
  }
