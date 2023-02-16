const con = require('../dao/dao');
const aluno = require('../models/Alunos');

const listarAlunos = (req, res) => {
    con.query(aluno.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarID = (req, res) => {
    con.query(aluno.toReadID(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarNome = (req, res) => {
    con.query(aluno.toReadNome(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarAluno = (req, res) => {
    con.query(aluno.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}


const ExcluirAluno = (req, res) => {
    con.query(aluno.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}


module.exports = {
    listarAlunos,
    listarNome,
    listarID,
    cadastrarAluno,
    ExcluirAluno
}