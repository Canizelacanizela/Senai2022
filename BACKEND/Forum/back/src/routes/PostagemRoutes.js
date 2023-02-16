const express = require('express');
const Router = express.Router();

const Post = require('../controllers/PostagemController.js');

Router.get('/forum/posts', Post.listarAll);
Router.get('/forum/posts/:postagem_id', Post.listarID);
Router.post('/forum/post', Post.criarPostagem);
Router.delete('/forum/post/:postagem_id', Post.ExcluirPostagem);
Router.put('/forum/post/update', Post.UpdatePostagem);

module.exports = Router;