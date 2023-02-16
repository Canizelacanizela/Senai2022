const con = require('../dao/EstacionamentoDAO.js');
const Pv = require('../models/ProcessaVaga.js');

const listarPV = (req, res) => {
    con.query(Pv.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const  listarPVData = (req, res) => {
    con.query(Pv.toReadData(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarPV = (req, res) => {
    con.query(Pv.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const alterarPV = (req, res) => {
    con.query(Pv.toUpdate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarPV,
    listarPVData,
    cadastrarPV,
    alterarPV
}