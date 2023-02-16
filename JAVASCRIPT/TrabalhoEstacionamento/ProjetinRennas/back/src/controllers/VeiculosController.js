const con = require('../dao/estacionamentoDAO.js');
const Veiculos = require('../models/Veiculo.js');

const listarVeiculos = (req, res) => {
    con.query(Veiculos.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarVeiculo = (req, res) => {
    con.query(Veiculos.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarVeiculoTipo = (req, res) => {
    con.query(Veiculos.toReadType(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const cadastrarVeiculo = (req, res) => {
    con.query(Veiculos.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarVeiculos,
    listarVeiculo,
    listarVeiculoTipo,
    cadastrarVeiculo
}