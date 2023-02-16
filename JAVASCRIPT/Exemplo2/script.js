var carrinho = [
    {
        "img":"https://imgnike-a.akamaihd.net/1300x1300/011913ID.jpg",
        "nome":"Tênis NhecNhec Air Jordão",
        "qntd":2
    },
    {
        "img":"https://s2.glbimg.com/3NjdwJtR5EmOcO9BmJi-ghfBTFI=/e.glbimg.com/og/ed/f/original/2021/03/19/james-lee-pts3bgyebvu-unsplash.jpg",
        "nome":"Crocodilo",
        "qntd":1
    },
    {
        "img":"https://cdn.leroymerlin.com.br/products/saco_de_lixo_de_200_litros_preto__c_50_preto_1567039549_8192_600x600.jpg",
        "nome":"Saco de Lixo da Balenciaga",
        "qntd":5
    },
    {
        "img":"https://cf.shopee.com.br/file/2a7189f045d4f0b44d25332e5f89d44a",
        "nome":"Camisa LaCosta",
        "qntd":4
    }
];

var itemCarrinho = document.querySelector(".item-carrinho");

function carregar() {
    carrinho.forEach(item => {
        let novoItem = itemCarrinho.cloneNode(true);

        novoItem.classList.remove("modelo");

        novoItem.querySelector("#img-item").src = item.img;
        novoItem.querySelector("#nome-item").innerHTML = item.nome;
        novoItem.querySelector("#qntd-item").value = item.qntd;

        document.querySelector(".carrinho").appendChild(novoItem);
    });
}

function removerItem(e) {
    e.parentNode.remove();
}