const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const create = async (req, res) => {
    let {id_vendedor} = req.body

    const vendas = await prisma.vendas.create({
        data: {
            id_vendedor,
            data: new Date(),
            vendas:{
                create:req.body.detalhes
            }
        }
      });
      
      res.status(200).json(vendas).end();
}


const read = async (req, res) => {
    let vendas = await prisma.Vendas.findMany({
        select:{
            id:true,
            data:true,
            id_vendedor:true,
            vendedores:true,
            vendas:{
                select:{
                    quantidade:true,
                    produtos: true
                }
            }
            
        }
        
    });

    res.status(200).json(vendas).end();
}


const update = async (req, res) => {
    var info = req.body;

    info.data = new Date(req.body.data)
    const vendas = await prisma.vendas.update({
        where:{
            id: Number(req.params.id)
        },
        data:req.body
    });
    res.status(200).json(vendas).end();
}

const remove = async (req, res) => {
    const vendas = await prisma.vendas.delete({
        where:{
            id: Number(req.params.id)
        }
    })

    res.status(200).json(vendas).end();
}

module.exports = {
    create,
    read,
    update,
    remove
}