const con = require('../dao/dentesDAO.js');
const Profis = require('../models/Profissional.js');

const listarProfissionais = (req, res) => {
    con.query(Profis.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarNome = (req, res) => {
    con.query(Profis.toRead(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarEspe = (req, res) => {
    con.query(Profis.toReadEspe(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarProfissionais,
    listarNome,
    listarEspe
}