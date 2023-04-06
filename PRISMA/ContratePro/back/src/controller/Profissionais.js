const { PrismaClient } = require('@prisma/client');

const create = async (req, res) => {
    let tabela_profissionais = await prisma.tabela_profissionais.create({
        data: req.body
    });

    res.status(200).json(tabela_profissionais).end();    
}

const read = async (req, res) => {
    let tabela_profissionais = await prisma.tabela_profissionais.findMany({
        select: {
            data:true,
            tabela_profissionais:{
                select:{
            id:true,
            nome_p: true,
            email: true,
            endereco: true,
            tel: true,
            nome_p: true
                }
            },
            tabela_profissionais: {
                select:{
                    nome_categoria: true
                }
            }
        }
    });

    res.status(200).json(tabela_profissionais).end();
}

const update = async (req, res) => {
    const tabela_profissionais = await prisma.tabela_profissionais.update({
        where: {
            id: Number(req.params.id)
        },
        data: req.body
    })
    res.status(202).json(tabela_profissionais).end();
}

const del = async (req, res) => {
    const tabela_profissionais = await prisma.tabela_profissionais.delete({
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