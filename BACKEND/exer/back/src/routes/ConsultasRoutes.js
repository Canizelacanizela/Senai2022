const express = require('express');
const Router = express.Router();

const Consulta = require('../controllers/ConsultasController.js');

Router.get('/dentes/consultas', Consulta.listarConsultas);

module.exports = Router;