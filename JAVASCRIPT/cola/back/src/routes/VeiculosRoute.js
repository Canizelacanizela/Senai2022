const express = require('express');
const Router = express.Router();

const Veiculos = require('../controllers/VeiculosController.js');

Router.get('/estacionamento/veiculos', Veiculos.listarVeiculos);
Router.get('/estacionamento/veiculo/:placa', Veiculos.listarVeiculo);
Router.get('/estacionamento/veiculo/:tipo', Veiculos.listarVeiculoTipo);
Router.post('/estacionamento/veiculo', Veiculos.cadastrarVeiculo);

module.exports = Router;