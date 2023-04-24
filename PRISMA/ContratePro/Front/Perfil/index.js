function carregar() {
    

    fetch('http://localhost:3000/prof/1')
    .then(response => response.json())
    .then(data => {
      document.querySelector("#id").innerHTML = data.id;
      document.querySelector("#nome").innerHTML = data.nome_p;
      document.querySelector("#biografia").innerHTML = data.biografia;
      document.querySelector("#des").innerHTML = data.descricao;
      document.querySelector("#cat").innerHTML = data.categorias.nome_categoria;
      document.querySelector("#tel").innerHTML = data.tel;
      document.querySelector("#email").innerHTML = data.email;
      document.querySelector("#hora").innerHTML = data.preco_h;
    })
    .catch(error => {
      console.error('Erro ao buscar dados:', error);
    });
  }