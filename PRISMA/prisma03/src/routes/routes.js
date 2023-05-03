const express = require('express');

const router = express.Router();

const Entregador = require('../controller/entregador');
const Pedido = require('../controller/pedido');

router.get('/', Entregador.test);
router.post('/entregador/create', Entregador.create);
router.post('/entregador/login', Entregador.login);
router.get('/entregadors', Entregador.read);
router.get('/Entregador/:id', Entregador.readOne);

// router.post('/Pedido', Pedido.create);
router.get('/pedidos', Pedido.read);

module.exports = router;