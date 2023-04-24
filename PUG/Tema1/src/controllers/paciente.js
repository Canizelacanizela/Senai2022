const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const read = async (req, res) => {
    let pacientes = await prisma.paciente.findMany({})
    res.render('index', { pacientes })
}

const criar = async (req, res) => {
    let parse = {
        nome_completo: req.body.nome_completo,
        nascimento: new Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }
    let paciente = await prisma.paciente.create({
        data: parse
    })
    res.redirect('/?msg=Paciente criado com sucesso!')
}

const alterar = async (req, res) => {
    let parse = {
        id: Number(req.body.id),
        nome_completo: req.body.nome_completo,
        nascimento: Date(req.body.nascimento),
        peso: Number(req.body.peso),
        altura: Number(req.body.altura)
    }
    let paciente = await prisma.paciente.update({
        data: parse,
        where: {
            id: Number(req.body.id)
        }
    });
    res.redirect('/?msg=Paciente alterado!')
}

const excluir = async (req, res) => {
    let paciente = await prisma.paciente.delete({
        where: {
            id: Number(req.params.id)
        }
    });
    res.redirect('/?msg=Paciente excluída com sucesso!')
}

module.exports = {
    criar,
    read,
    alterar,
    excluir
}