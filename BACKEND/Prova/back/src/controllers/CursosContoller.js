const con = require('../dao/dao');
const curso = require('../models/Cursos');

const listarCursos = (req, res) => {
    con.query(curso.toReadAll(), (err, result) => {
        if (err == null) {
            res.status(200).json(result).end()
        }else{
            res.status(400).json(err).end();
        }
    })
}


module.exports = {
    listarCursos
}