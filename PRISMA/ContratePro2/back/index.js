const express = require('express');
const cors = require('cors');
const WebSocket = require('ws');
const { PrismaClient } = require('@prisma/client');
const router = require('./src/routes/routes')
const app = express();
const server = require('http').createServer(app);
var pris = new PrismaClient()
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(router)


const httpServer = app.listen(PORT, () => {
    console.log('Servidor HTTP configurado e em execução');
});

const prisma = new PrismaClient();

const wss = new WebSocket.Server({ server: httpServer });

wss.on('connection', (ws) => {
    ws.on('message', async (message) => {
        const { remetenteId, destinatarioId, conteudo } = JSON.parse(message);

        try {
            let conversa = await prisma.conversa.findFirst({
                where: {
                    participantes: {
                        some: {
                            id_cliente: {
                                in: [remetenteId, destinatarioId],
                            },
                        },
                    },
                    AND: [
                        { participantes: { some: { id_cliente: remetenteId } } },
                        { participantes: { some: { id_profissional: destinatarioId } } },
                    ],
                },
            });

            if (!conversa) {
                conversa = await prisma.conversa.create({
                    data: {
                        participantes: {
                            connect: [
                                { id_cliente: remetenteId },
                                { id_profissional: destinatarioId },
                            ],
                        },
                    },
                });
            }

            const novaMensagem = await prisma.mensagem.create({
                data: {
                    conteudo,
                    remetente: { connect: { id_cliente: remetenteId } },
                    destinatario: { connect: { id_profissional: destinatarioId } },
                },
            });

            novaMensagem.data = new Date(); // Adicione a propriedade 'data' com a data atual

            wss.clients.forEach((client) => {
                client.send(JSON.stringify(novaMensagem));
                if (client !== ws && client.readyState === WebSocket.OPEN) {
                    client.send(JSON.stringify(novaMensagem));
                }
            });
        } catch (error) {
            console.error(error);
        }
    });
});

console.log('Servidor WebSocket configurado e em execução');