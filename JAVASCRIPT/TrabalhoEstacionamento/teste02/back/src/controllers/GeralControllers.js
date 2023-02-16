const Cliente = require('../models/Cliente.js');
const Veiculo = require('../models/Veiculo.js');
const ProcessaV = require('../models/ProcessaVaga.js');
const con = require('../models/EstacionamentoDAO.js');

const createGeral = (req, res) => {
    con.query(Cliente.toCreate(req.body), (err, result) => {
        if (err == null){
            con.query(Veiculo.toCreate(req.body), (err, result) => {
                if (err == null){
                    con.query(ProcessaV.toCreate(req.body), (err, result) => {
                        if (err == null)
                            res.status(201).end();
                    }); 
                }
            });
        } else
            if (err.sqlState == 23000)//Se o CPF já está cadastrado
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const updateGeral = (req, res) => {
    con.query(Cliente.toUpdate(req.body), (err, result) => {
        if (err == null){
            con.query(Veiculo.toUpdate(req.body), (err, result) => {
                if (err == null){
                    con.query(ProcessaV.toUpdate(req.body), (err, result) => {
                        if (err == null){
                            if (result.affectedRows > 0)
                                res.status(204).end();
                             else
                                res.status(404).end();
                        }
                    }); 
                }
            });
        }
        else
        res.status(400).json(err).end();
    });
}

const deleteGeral = (req, res) => {
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

const readAllGeral = (req, res) => {
    con.query(Cliente.toReadView(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const readCliente = (req, res) => {
    con.query(Cliente.toRead(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const readNameCliente = (req, res) => {
    con.query(Cliente.toReadName(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const readVeiculo = (req, res) => {
    con.query(Veiculo.toRead(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const readTypeVeiculo = (req, res) => {
    con.query(Veiculo.toReadType(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const readDataProc = (req, res) => {
    con.query(ProcessaV.toReadData(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}



module.exports = {
    createGeral,
    updateGeral,
    deleteGeral,
    readAllGeral,
    readCliente,
    readNameCliente,
    readVeiculo,
    readTypeVeiculo,
    readDataProc
}