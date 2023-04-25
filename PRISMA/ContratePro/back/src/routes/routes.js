const express = require('express');

const router = express.Router();

const Middle = require('../middleware/middleware');

const Prop = require('../controller/Propostas');
const Cat = require('../controller/Categoria');
const Profissa = require('../controller/UserProf');
const Aval = require('../controller/Avalia');
const UserCli = require('../controller/UserCli');

// router.put('*', Middle.ValidaAcesso);
// router.delete('*', Middle.ValidaAcesso);
// router.post('*', Middle.ValidaAcesso);

//-------------------------------------------------------------------------------------
router.get('/prop', Prop.read);
router.post('/propcriar', Prop.create);
router.delete('/propdel/:id', Prop.del);
// ------------------------------Categorias-----------------------------------------
router.get('/cat', Cat.read);
router.post('/catcriar', Cat.create);
router.put('/catupdate/:id', Cat.update);
router.delete('/catdel/:id', Cat.del);
// ------------------------------UserProfissional------------------------------------
router.post('/login', Middle.ValidaAcesso, Profissa.login);
router.get('/prof', Profissa.read);
router.get('/prof/:id', Profissa.readOne);
router.post('/profcriar', Profissa.create);
router.put('/profupdate/:id', Profissa.update);
router.delete('/profdel/:id', Profissa.del);
// ------------------------------Aval------------------------------------
router.get('/aval', Aval.read);
router.get('/avalOne/:id', Aval.readOne);
router.post('/avalcriar', Aval.create);
router.put('/avalupdate/:id', Aval.update);
router.delete('/avaldel/:id', Aval.del);
// ------------------------------Usuario--------------------------------------
router.get('/user', UserCli.read);
router.get('/userOne/:id', UserCli.readOne);
router.post('/usercriar', UserCli.create);
router.post('/login', Middle.ValidaAcesso, UserCli.login);
router.put('/userupdate/:id', UserCli.update);
router.delete('/userdel/:id', UserCli.del);

module.exports = router;