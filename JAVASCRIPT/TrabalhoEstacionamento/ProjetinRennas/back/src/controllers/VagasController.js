const con = require('../dao/estacionamentoDAO.js');
const Vagas = require('../models/Vaga.js');

const listarVagas = (req, res) => {
    con.query(Vagas.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarVaga = (req, res) => {
    con.query(Vagas.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarVaga = (req, res) => {
    con.query(Vagas.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarVaga = (req, res) => {
    con.query(Vagas.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarVagas,
    listarVaga,
    cadastrarVaga,
    alterarVaga
}