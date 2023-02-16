const con = require('../dao/ForumDAO.js');
const sub = require('../models/SubComentario');

const listarAll = (req, res) => {
    con.query(sub.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const criarSubComentario = (req, res) => {
    con.query(sub.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const ExcluirSub = (req, res) => {
    con.query(sub.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpdateSub = (req, res) => {
    con.query(sub.toUpdate(req.body), (err, result) => {
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
    listarAll,
    criarSubComentario,
    ExcluirSub,
    UpdateSub
}