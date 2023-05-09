const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

const read = async (req, res) => {
    let user = await prisma.user.findMany({
        select: {
            id:true,
            perfil: true,
            senha:true
        }
    });

    //SELECT email, nome FROM user WHERE email = ''

    res.status(200).json(user).end();
}

const login = async (req, res) => {
    
    let user = await prisma.user.findMany({
        where: {
            AND: [
                {senha : req.body.senha}
            ]
        },
        select: {
            id: true,
            perfil: true
        }
        
    })

    // jwt.sign(user[0], process.env.KEY, { expiresIn: '10h' },function(err, token) {
    //     console.log(err)
    //     if(err == null) {
    //         user[0]["token"] = token;
    //         res.status(200).json(user[0]).end();
    //     }else {
    //         res.status(404).json(err).end();
    //     }
    // })
    //SELECT id, nome FROM user WHERE email = '' AND senha = ''
}

module.exports = {
    read,
    login
}