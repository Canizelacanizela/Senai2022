const express = require('express');
const router = express.Router();

const Middleware = require('../middleware/middleware');

const Usuario = require('../controllers/usuario.js');

router.post('/login', Usuario.login);
router.delete('/delete/:id', Middleware.validaAcesso, Usuario.remove);

module.exports = router;
