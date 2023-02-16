const Item = require('../model/itens');
const con = require('../model/solicitacoesDAO');

const criarProd = (req, res) => {
    con.query(Item.toCreate(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const listarProds = (req, res) => {
    con.query(Item.toReadProd(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const CriarDepto = (req, res) => {
    con.query(Item.toCreateDep(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const ExcluirDept = (req, res) => {
    con.query(Item.toDel(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const listarVWSol = (req, res) => {
    con.query(Item.toReadVWSol(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const BuscarProds = (req, res) => {
    con.query(Item.toReadTSol(req.params), (err, result) => {
        if (err == null)
            if (result.length > 0)
                res.json(result).end();
            else
                res.status(404).end();
        else
            res.status(500).end();
    });
}

const BuscarMes = (req, res) => {
    con.query(Item.toReadDat(req.params), (err, result) => {
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
    criarProd,
    listarProds,
    CriarDepto,
    ExcluirDept,
    listarVWSol,
    BuscarProds,
    BuscarMes,
}