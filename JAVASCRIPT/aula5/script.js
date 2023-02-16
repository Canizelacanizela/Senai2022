function criarElemento(){

    let itemLista = document.createElement("div");
itemLista.className = "item-lista";

let thumbnail = document.createElement("img");
thumbnail.src = "./assets/restaurante.jpg";
thumbnail.id = "thumb";
thumbnail.alt = "Foto do Restaurante";

let like = document.createElement("img");
like.src = "./assets/heart.png";
like.id = "like";
like.alt = "Icone de Coração";

let avaliacao = document.createElement("img");
avaliacao.src = "./assets/616489.png";
avaliacao.id = "avaliacao";
avaliacao.alt = "Avaliacao";

let info = document.createElement("div");
info.id = "info";

let nomeRestaurante = document.createElement("p");
nomeRestaurante.innerHTML = "Dolores Restaurant 2.0";

let textoAvaliacao = document.createElement("p");

textoAvaliacao.appendChild(avaliacao);
textoAvaliacao.append("4.9");

info.appendChild(nomeRestaurante);
info.appendChild(textoAvaliacao);

itemLista.appendChild(thumbnail);
itemLista.appendChild(info);
itemLista.appendChild(like);

document.querySelector(".lista").appendChild(itemLista);

}



 


