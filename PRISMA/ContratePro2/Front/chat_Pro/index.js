const socket = new WebSocket('ws://localhost:2000');

socket.onopen = function () {
  console.log('Conexão estabelecida com o servidor WebSocket');
};

socket.onmessage = function (event) {
  const message = event.data;
  handleMessage(message);
};

function handleMessage(message) {
  if (message instanceof Blob) {
    const reader = new FileReader();
    reader.onload = function () {
      const text = reader.result;
      exibirMensagem(text);
    };
    reader.readAsText(message);
  } else {
    // A mensagem não é um Blob, trata como texto normal
    exibirMensagem(message);
  }
}

function enviarMensagem() {
  const mensagem = document.getElementById('mensagem').value;
  socket.send(mensagem);
  document.getElementById('mensagem').value = 'Eu' + '';
}

function exibirMensagem(mensagem, remetente) {
  const divMensagens = document.getElementById('mensagens');
  const p = document.createElement('p');
  p.textContent = mensagem;
  if (remetente === 'cliente') {
    p.classList.add('cliente');
  } else if (remetente === 'profissional') {
    p.classList.add('profissional');
}

  divMensagens.appendChild(p);
}