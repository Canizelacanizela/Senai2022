const { PrismaClient } = require('@prisma/client');

const create = async (req, res) => {
    let categoria_profissoes = await prisma.categoria_profissoes.create({
        data: req.body
    });

    res.status(200).json(categoria_profissoes).end();    
}

const read = async (req, res) => {
    let categoria_profissoes = await prisma.categoria_profissoes.findMany({
        select: {
            id:true,
           nome_categoria: true
        }
    });

    res.status(200).json(categoria_profissoes).end();
}

const update = async (req, res) => {
    const categoria_profissoes = await prisma.categoria_profissoes.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(categoria_profissoes).end();
}

const del = async (req, res) => {
    const categoria_profissoes = await prisma.categoria_profissoes.delete({
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