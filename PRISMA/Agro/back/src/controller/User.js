const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const test = async (req, res) => {
    res.status(200).json("API online, aguardando requisições").end();
}

const create = async (req, res) => {
    const user = await prisma.user.create({
        data: req.body
    });
    res.status(201).end();
}

const read = async (req, res) => {
    const user = await prisma.user.findMany({
        select: {
            id: true,
            nome: true,
            email:true,
            
        }
    });
    res.status(200).json(user).end();
}

const readOne = async (req, res) => {
    const user = await prisma.user.findUnique({
        where: {
            id:Number(req.params.id)
        },
    })

    res.status(200).json(user).end();
}

const login = async (req,res) => {
    const user = await prisma.user.findMany({
        where:{
            AND:[
            { email:req.body.email },
            { senha:req.body.senha }
        ]
        }
    })
    if (user.length > 0)
    res.status(202).json(user).end();
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