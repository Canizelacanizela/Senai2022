const express = require('express');
const Router = express.Router();

const PV = require('../controllers/PVController.js');

Router.get('/estacionamento/PVs', PV.listarPV);
Router.get('/estacionamento/PV/:entrada', PV.listarPVData);
Router.post('/estacionamento/PV', PV.cadastrarPV);
Router.put('/estacionamento/PV', PV.alterarPV);

module.exports = Router;