// 

const ws = new WebSocket('ws://localhost:3000');
ws.onopen = () => {
  console.log('Conexão estabelecida.');
};

ws.onmessage = (event) => {
  const mensagem = event.data;

  // Cria a nova span e adiciona ao elemento recebe
  const span = document.createElement('span');
  span.textContent = `Cliente: ${mensagem}`;
  recebe.appendChild(span);
};

const recebe = document.getElementById('recebe');
const input = document.getElementById('envia');
const button = document.getElementById('enviar');

button.addEventListener('click', enviar);

function enviar() {
  const mensagem = input.value;

  // Cria a nova span e adiciona ao elemento recebe
  const span = document.createElement('span');
  span.textContent = `Me: ${mensagem}`;
  recebe.appendChild(span);

  // Envia a mensagem para o servidor WebSocket
  ws.send(mensagem);

  input.value = '';
}