const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    var info = req.body;

    // info.data_inicio = new Date(req.body.data_inicio)
    let manutencaov = await prisma.manutencaoV.create({
        data: info
    });

    res.status(200).json(manutencaov).end();
}

const readOne = async (req, res) => {
    let manutencaov = await prisma.manutencaoV.findUnique({
        where: {
            id: Number(req.params.id)
        },
        select: {
            id_veiculo: true,
            data_inicio: true,
            data_fim: true,
            valor_gasto: true,
            descricao: true
        }
    });

    //SELECT * FROM manutencaov INNER JOIN publicacao ON manutencaov.id = publicacao.usuario_id WHERE ....

    res.status(200).json(manutencaov).end();
}

const read = async (req, res) => {
    let manutencaov = await prisma.manutencaoV.findMany({
        select: {
            id: true,
            id_veiculo: true,
            data_inicio: true,
            data_fim: true,
            valor_gasto: true,
            descricao: true
        }
    });

    //SELECT email, nome FROM manutencaov WHERE email = ''

    res.status(200).json(manutencaov).end();
}


const update = async (req, res) => {
    const manutencaov = await prisma.manutencaoV.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(manutencaov).end();
}

const toTerminar = async (req, res) => {
    let info = {
        data_fim: new Date()
    }
    const manutencaov = await prisma.manutencaoV.update({
        data: info,
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(202).end();
}


const del = async (req, res) => {
    const manutencaov = await prisma.manutencaoV.delete({
        where: {
            id: Number(req.params.id)
        }
    })
    res.status(204).end();
}


module.exports = {
    create,
    read,
    readOne,
    del,
    update,
    toTerminar
}