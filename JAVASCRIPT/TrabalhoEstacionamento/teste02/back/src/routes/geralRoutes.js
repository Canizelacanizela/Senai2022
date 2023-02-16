const express = require('express');
const router = express.Router();

const Geral = require("../controllers/GeralControllers");

router.get("/estacionamento/geral", Geral.readAllGeral);
router.get("/estacionamento/cliente/:cpf", Geral.readCliente);
router.get("/estacionamento/cliente/:nome", Geral.readNameCliente);
router.get("/estacionamento/veiculo/:placa", Geral.readVeiculo);
router.get("/estacionamento/veiculo/:tipo", Geral.readTypeVeiculo);
router.get("/estacionamento/veiculo/:entrada", Geral.readDataProc);

router.post("/estacionamento/geral", Geral.createGeral);

router.put("/estacionamento/geral", Geral.updateGeral);

router.delete("/estacionamento/geral/:cpf", Geral.deleteGeral);


module.exports = router;