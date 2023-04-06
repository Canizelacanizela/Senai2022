const express = require('express');

const router = express.Router();

const Middle = require('../middleware/middleware');

const Cat = require('../controller/Categoria');
const Profissa = require('../controller/Profissionais');
const Cli = require('../controller/Clientes');
const Aval = require('../controller/Avalia');
const User = require('../controller/User');

// router.put('*', Middle.ValidaAcesso);
// router.delete('*', Middle.ValidaAcesso);
// router.post('*', Middle.ValidaAcesso);

// ------------------------------Categorias-----------------------------------------
router.get('/cat', Cat.read);
router.post('/catcriar', Cat.create);
router.put('/catupdate/:id', Cat.update);
router.delete('/catdel/:id', Cat.del);
// ------------------------------Profissional------------------------------------
router.get('/prof', Profissa.read);
router.post('/profcriar',Profissa.create);
router.put('/profupdate/:id',Profissa.update);
router.delete('/profdel/:id',Profissa.del);
// ------------------------------Clientes------------------------------------
router.get('/cli', Cli.read);
router.post('/clicriar',Cli.create);
router.put('/cliupdate/:id',Cli.update);
router.delete('/clidel/:id',Cli.del);
// ------------------------------Aval------------------------------------
router.get('/aval', Aval.read);
router.get('/avalOne/:id', Aval.readOne);
router.post('/avalcriar',Aval.create);
router.put('/avalupdate/:id',Aval.update);
router.delete('/avaldel/:id',Aval.del);
// ------------------------------Usuario--------------------------------------
router.get('/user', User.read);
router.get('/userOne/:id', User.readOne);
router.post('/usercriar',User.create);
router.post('/login', Middle.ValidaAcesso, User.login);
router.put('/userupdate/:id',User.update);
router.delete('/userdel/:id',User.del);

module.exports = router;