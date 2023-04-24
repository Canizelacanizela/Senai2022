const express = require('express');
const router = express.Router();

const paciente = require('../controllers/paciente')

router.post('/paciente/create', paciente.criar)
router.get('/', paciente.read)
router.put('/paciente/update', paciente.alterar)
router.delete('/paciente/del/:id', paciente.excluir)

module.exports = router