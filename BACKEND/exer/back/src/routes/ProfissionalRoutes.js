const express = require('express');
const Router = express.Router();

const Profissional = require('../controllers/ProfissionalController.js');

Router.get('/dentes/profissas', Profissional.listarProfissionais);
Router.get('/dentes/:id_profissa', Profissional.listarProfissionais);

module.exports = Router;