// const socket = new WebSocket('ws://localhost:2000');

// socket.onopen = function () {
//   console.log('Conexão estabelecida com o servidor WebSocket');
// };

// socket.onmessage = function (event) {
//   const message = event.data;
//   handleMessage(message);
// };

// function handleMessage(message) {
//   if (message instanceof Blob) {
//     const reader = new FileReader();
//     reader.onload = function () {
//       const text = reader.result;
//       exibirMensagem(text);
//     };
//     reader.readAsText(message);
//   } else {
//     // A mensagem não é um Blob, trata como texto normal
//     exibirMensagem(message);
//   }
// }

// function enviarMensagem() {
//   const texto = document.getElementById('mensagem').value;
//   const mensagem = { quem: "cliente", texto: texto };
//   socket.send(JSON.stringify(mensagem));
//   document.getElementById('mensagem').value = '';
// }

// function exibirMensagem(mensagem, remetente) {
//   const divMensagens = document.getElementById('mensagens');
//   const p = document.createElement('p');
//   p.setAttribute('class', JSON.parse(mensagem).quem);
//   p.textContent = JSON.parse(mensagem).texto;
//   divMensagens.appendChild(p);
// }