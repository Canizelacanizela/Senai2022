const express = require('express');
const router = express.Router();

const Item = require("../controllers/ItemControl");

router.post("/solicitacoes/", Item.criarProd);
router.get("/solicitacoes/", Item.listarProds);
router.post("/solicitacoes/", Item.CriarDepto);
router.post("/solicitacoes/", Item.ExcluirDept);
router.delete("/solicitacoes/", Item.listarVWSol);
router.get("/solicitacoes/", Item.BuscarProds);
router.get("/solicitacoes/", Item.BuscarMes);

module.exports = router;