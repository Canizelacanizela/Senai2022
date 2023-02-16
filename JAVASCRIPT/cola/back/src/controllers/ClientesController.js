const con = require('../dao/estacionamentoDAO.js');
const Cliente = require('../models/Cliente.js');

const listarClientes = (req, res) => {
    con.query(Cliente.toReadView(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else {
            res.status(400).json(err).end();
        }
    })
}

const listarCliente = (req, res) => {
    con.query(Cliente.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarClienteNome = (req, res) => {
    con.query(Cliente.toReadName(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarCliente = (req, res) => {
    con.query(Cliente.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const excluirCliente = (req, res) => {
    con.query(Cliente.toDelete(req.params), (err, result) => {
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
    listarClientes,
    listarCliente,
    listarClienteNome,
    cadastrarCliente,
    excluirCliente
}