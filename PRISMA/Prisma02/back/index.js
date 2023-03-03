const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => { console.log("Começou Roda o Roda Jequiti e Falaram da Avon"); })