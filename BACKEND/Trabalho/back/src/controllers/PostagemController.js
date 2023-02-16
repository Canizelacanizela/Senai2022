const con = require('../dao/ForumDAO.js');
const post = require('../models/Postagem.js');

const listarAll = (req, res) => {
    con.query(post.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarID = (req, res) => {
    con.query(post.toReadID(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const criarPostagem = (req, res) => {
    con.query(post.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const ExcluirPostagem = (req, res) => {
    con.query(post.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpdatePostagem = (req, res) => {
    con.query(post.toUpdate(req.body), (err, result) => {
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
    listarID,
    criarPostagem,
    ExcluirPostagem,
    UpdatePostagem
}