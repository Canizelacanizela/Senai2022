function carregar() {
  fetch('http://localhost:3000/prof')
  .then(response => response.json())
  .then(data => {
    data.forEach(data => {
      document.querySelector("#nome").innerHTML = data.nome_p;
      document.querySelector("#biografia").innerHTML = data.biografia;
      document.querySelector("#des").innerHTML = data.descricao;
      document.querySelector("#cat").innerHTML = data.categorias.nome_categoria;
      document.querySelector("#tel").innerHTML = data.tel;
      document.querySelector("#email").innerHTML = data.email;
      document.querySelector("#hora").innerHTML = data.preco_h;

    });
    
  })
  .catch(error => {
    console.error('Erro ao buscar dados:', error);
  });
}
