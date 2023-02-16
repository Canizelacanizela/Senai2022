const con = require('../dao/ForumDAO.js');
const user = require('../models/Usuario.js');

const listarUsuario = (req, res) => {
    con.query(user.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarEmail = (req, res) => {
    con.query(user.toRead(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarID = (req, res) => {
    con.query(user.toReadID(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const cadastrarUsuario = (req, res) => {
    con.query(user.toCreate(req.body), (err, result) => {
        if (err == null) {
            res.status(201).json(req.body).end();
        }else{
            res.status(400).json(err).end();
        }
    })
}

const ExcluirUser = (req, res) => {
    con.query(user.toDelete(req.params), (err, result) => {
        if (err == null)
            if (result.affectedRows > 0)
                res.status(204).end();
            else
                res.status(404).end();
        else
            res.status(400).json(err).end();
    });
}

const UpdateUser = (req, res) => {
    con.query(user.toUpdate(req.body), (err, result) => {
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
    listarUsuario,
    listarID,
    listarEmail,
    cadastrarUsuario,
    ExcluirUser,
    UpdateUser
}