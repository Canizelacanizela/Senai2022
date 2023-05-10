const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


const create = async (req, res) => {
    const pedido = await prisma.Pedido.create({
        data: req.body
    });
    res.status(201).end();
}

const read = async (req, res) => {
    const pedido = await prisma.Pedido.findMany({
        select: {
            id: true,
            cliente: true,
            endereco:true,
            produto: true,
            data: true,
            horaPedido: true,
            horaFim: true,
            
        }
    });
    res.status(200).json(pedido).end();
}

module.exports = {
    create,
    read
}