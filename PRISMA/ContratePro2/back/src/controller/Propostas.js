const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let propostas = await prisma.propostas.create({
        data: req.body
    });

    res.status(200).json(propostas).end();
}

const read = async (req, res) => {
    let propostas = await prisma.propostas.findMany({
        select: {
            proposta: true
        }
    });

    res.status(200).json(propostas).end();
}

const del = async (req, res) => {
    const propostas = await prisma.propostas.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    create,
    read,
    del
}