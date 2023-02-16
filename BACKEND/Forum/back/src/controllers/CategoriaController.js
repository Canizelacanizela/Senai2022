const con = require('../dao/ForumDAO.js');
const cate = require('../models/Categoria.js');

const listarAll = (req, res) => {
    con.query(cate.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

const listarNome = (req, res) => {
    con.query(cate.toReadNome(req.params), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}

module.exports = {
    listarAll,
    listarNome,
}