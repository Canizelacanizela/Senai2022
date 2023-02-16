const express = require('express');
const cors = require('cors');

const GeralR = require('./src/routes/geralRoutes.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(GeralR);

app.listen(5000, () => {
    console.log("Bem vindo.");
});