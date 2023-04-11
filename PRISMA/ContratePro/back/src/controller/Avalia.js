const { PrismaClient } = require('@prisma/client');

const create = async (req, res) => {
    let Avalia = await prisma.Avalia.create({
        data: req.body
    });

    res.status(200).json(Avalia).end();    
}

const read = async (req, res) => {
    let Avalia = await prisma.Avalia.findMany({
        data: req.body
    });

    res.status(200).json(Avalia).end();
}

const update = async (req, res) => {
    const Avalia = await prisma.Avalia.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(Avalia).end();
}

const del = async (req, res) => {
    const Avalia = await prisma.Avalia.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}

