const con = require('../dao/ForumDAO.js');
const come = require('../models/Comentario.js');

const listarAll = (req, res) => {
    con.query(come.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const criarComentario = (req, res) => {
    con.query(come.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const ExcluirComentario = (req, res) => {
    con.query(come.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpdateComentario = (req, res) => {
    con.query(come.toUpdate(req.body), (err, result) => {
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
    criarComentario,
    ExcluirComentario,
    UpdateComentario
}