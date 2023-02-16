const express = require('express');
const Router = express.Router();

const Cate = require('../controllers/CategoriaController.js');

Router.get('/forum/categorias', Cate.listarAll);
Router.get('/forum/categorias/:nome_categoria', Cate.listarNome);

module.exports = Router;