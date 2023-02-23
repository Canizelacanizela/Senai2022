const express = require('express');

const router = express.Router();

const Middle = require('../middleware/middleware');

const Frota = require('../controller/Frota');
const Manutencao = require('../controller/ManutencaoV');
const Motoristas = require('../controller/Motoristas');
const Operacoes = require('../controller/OperacoesV');
const User = require('../controller/User');

router.put('*', Middle.ValidaAcesso);
router.delete('*', Middle.ValidaAcesso);
router.post('*', Middle.ValidaAcesso);

// ------------------------------Frota-----------------------------------------
router.get('/frota', Frota.read);
router.get('/frotaOne/:id', Frota.readOne);
router.post('/frotacriar', Frota.create);
router.put('/frotaupdate/:id', Frota.update);
router.delete('/frotadel/:id', Frota.del);
// ------------------------------Manutencao------------------------------------
router.get('/manu', Manutencao.read);
router.get('/manuOne/:id', Manutencao.readOne);
router.post('/manucriar',Manutencao.create);
router.put('/manupdate/:id',Manutencao.update);
router.put('/manufim/:id',Manutencao.toTerminar);
router.delete('/manudel/:id',Manutencao.del);
// ------------------------------Motoristas-----------------------------------
router.get('/motor', Motoristas.read);
router.get('/motorOne/:id', Motoristas.readOne);
router.post('/motorcriar',Motoristas.create);
router.put('/motorupdate/:id',Motoristas.update);
router.delete('/motordel/:id',Motoristas.del);
// ------------------------------Operacoes------------------------------------
router.get('/opera', Operacoes.read);
router.get('/operaOne/:id', Operacoes.readOne);
router.post('/operacriar',Operacoes.create);
router.put('/operaupdate/:id',Operacoes.update);
router.delete('/operadel/:id',Operacoes.del);
// ------------------------------Usuario--------------------------------------
router.get('/user', User.read);
router.get('/userOne/:id', User.readOne);
router.post('/usercriar',User.create);
router.post('/login',User.login);
router.put('/userupdate/:id',User.update);
router.delete('/userdel/:id',User.del);

module.exports = router;