const express = require('express');
const Router = express.Router();

const Curso = require('../controllers/CursosContoller');

Router.get('/cursos/cursos', Curso.listarCursos);

module.exports = Router;