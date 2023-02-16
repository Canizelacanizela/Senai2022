const express = require('express');
const Router = express.Router();

const Clientes = require('../controllers/ClientesController.js');

Router.get('/estacionamento/clientes', Clientes.listarClientes);
Router.get('/estacionamento/cliente/:cpf', Clientes.listarCliente);
Router.get('/estacionamento/cliente/:nome', Clientes.listarClienteNome);
Router.post('/estacionamento/cliente', Clientes.cadastrarCliente);
Router.delete('/estacionamento/cliente/:cpf', Clientes.excluirCliente);

module.exports = Router;