const WebSocket = require('ws');

// Criar o servidor WebSocket
const wss = new WebSocket.Server({ port: 2000 });

// Armazenar as conexões dos clientes
const clients = new Set();

// Função para enviar mensagens para todos os clientes conectados
function broadcastMessage(message) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(message);
    }else{
      window.location.reload(message);
    }
  });
}

// Quando um cliente se conecta
wss.on('connection', (ws) => {
  // Adicionar o cliente à lista de clientes conectados
  clients.add(ws);

  // Quando o servidor recebe uma mensagem do cliente
  ws.on('message', (message) => {
    // Enviar a mensagem para todos os clientes conectados
    broadcastMessage(message);
  });

  // Quando o cliente fecha a conexão
  ws.on('close', () => {
    // Remover o cliente da lista de clientes conectados
    clients.delete(ws);
  });
});

console.log('Servidor WebSocket configurado e em execução');