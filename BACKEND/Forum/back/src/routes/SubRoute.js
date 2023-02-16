const express = require('express');
const Router = express.Router();

const Sub = require('../controllers/SubComentario.js');

Router.get('/forum/sub_comentarios', Sub.listarAll);
Router.post('/forum/sub_comentario', Sub.criarSubComentario);
Router.delete('/forum/sub_comentario/:sub_id', Sub.ExcluirSub);
Router.put('/forum/sub_comentario/update', Sub.UpdateSub);

module.exports = Router;