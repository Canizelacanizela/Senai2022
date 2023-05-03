const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = async (req, res) => {
    const entregador = await prisma.Entregador.create({
        data: req.body
    });
    res.status(201).end();
}

const read = async (req, res) => {
    const entregador = await prisma.Entregador.findMany({
        select: {
            id: true,
            nome: true,
            email:true,
            veiculo: true,
            
        }
    });
    res.status(200).json(entregador).end();
}

const readOne = async (req, res) => {
    const entregador = await prisma.Entregador.findUnique({
        where: {
            id:Number(req.params.id)
        },
    })

    res.status(200).json(entregador).end();
}

const login = async (req,res) => {
    const entregador = await prisma.entregador.findMany({
        where:{
            AND:[
            { email:req.body.email },
            { senha:req.body.senha }
        ]
        }
    })
    if (entregador.length > 0)
    res.status(202).json(entregador).end();
    else
    res.status(404).end();
}

module.exports = {
    test,
    create,
    read,
    readOne,
    login
}