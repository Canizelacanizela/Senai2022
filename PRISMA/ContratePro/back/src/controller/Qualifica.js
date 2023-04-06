const { PrismaClient } = require('@prisma/client');

const create = async (req, res) => {
    let Qualifica = await prisma.Avalia.create({
        data: req.body
    });

    res.status(200).json(Qualifica).end();    
}

const read = async (req, res) => {
    let Qualifica = await prisma.Qualifica.findMany({
        data: req.body
    });

    res.status(200).json(Qualifica).end();
}

const update = async (req, res) => {
    const Qualifica = await prisma.Qualifica.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(Qualifica).end();
}

const del = async (req, res) => {
    const Qualifica = await prisma.Qualifica.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}