const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    console.log(req.body)
    let detalhes = await prisma.Detalhes.create({
        data: req.body
    });

    res.status(200).json(detalhes).end();
}


const read = async (req, res) => {
    let detalhes = await prisma.Detalhes.findMany({
        select:{
            id: true,
            id_produtos:true,
            id_venda:true,
            quantidade:true,
            produtos: {
                select: {
                    nome: true,
                    valor: true
                }
            },
        vendas: {
            select:{
                data:true,
                
            }
        },
        }
        
    });

    res.status(200).json(detalhes).end();
}

const update = async (req, res) => {
    const detalhes = await prisma.detalhes.update({
        where:{
            id: Number(req.params.id)
        },
        data:req.body
    });
    res.status(200).json(detalhes).end();
}

const remove = async (req, res) => {
    const detalhes = await prisma.detalhes.delete({
        where:{
            id: Number(req.params.id)
        }
    })

    res.status(200).json(detalhes).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}