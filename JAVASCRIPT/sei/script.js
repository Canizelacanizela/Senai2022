function exclui() {
    const options = {method: 'DELETE'};

fetch('http://localhost:5000/estacionamento/cliente' + "/", options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));
}
