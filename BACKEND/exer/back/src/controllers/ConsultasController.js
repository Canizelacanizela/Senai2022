const con = require('../dao/dentesDAO.js');
const Consultas = require('../models/Consultas.js');

const listarConsultas = (req, res) => {
    con.query(Consultas.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarConsultas
}