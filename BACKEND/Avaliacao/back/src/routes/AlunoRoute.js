const express = require('express');
const Router = express.Router();

const Aluno = require('../controllers/AlunosController');

Router.get('/cursos/alunos', Aluno.listarAlunos);
Router.get('/cursos/alunos/:id_alunos', Aluno.listarID);
Router.get('/cursos/alunos/:nome', Aluno.listarNome);
Router.post('/cursos/aluno', Aluno.cadastrarAluno);
Router.delete('/cursos/alunos/:id_alunos', Aluno.ExcluirAluno);

module.exports = Router;