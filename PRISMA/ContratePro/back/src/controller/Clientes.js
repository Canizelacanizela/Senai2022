const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let Clientes = await prisma.Clientes.create({
        data: req.body
    });

    res.status(200).json(Clientes).end();    
}

const read = async (req, res) => {
    let Clientes = await prisma.Clientes.findMany({
        data: req.body
    });

    res.status(200).json(Clientes).end();
}

const update = async (req, res) => {
    const Clientes = await prisma.Clientes.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(Clientes).end();
}

const del = async (req, res) => {
    const Clientes = await prisma.Clientes.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

module.exports = {
    create,
    read,
    del,
    update
}