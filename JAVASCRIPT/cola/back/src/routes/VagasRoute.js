const express = require('express');
const Router = express.Router();

const Vagas = require('../controllers/VagasController.js');

Router.get('/estacionamento/vagas', Vagas.listarVagas);
Router.get('/estacionamento/vaga/:id_vaga', Vagas.listarVaga);
Router.post('/estacionamento/vaga', Vagas.cadastrarVaga);
Router.put('/estacionamento/vaga', Vagas.alterarVaga);

module.exports = Router;