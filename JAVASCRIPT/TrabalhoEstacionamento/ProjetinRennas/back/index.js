const express = require('express');
const cors = require('cors');

const ClienteRoute = require('./src/routes/CLientesRoute.js');
const VeiculoRoute = require('./src/routes/VeiculosRoute.js');
const VagaRoute = require('./src/routes/VagasRoute.js');
const PVRoute = require('./src/routes/PVRoute.js');

const app = express();
app.use(express.json());
app.use(cors());
app.use(ClienteRoute);
app.use(VeiculoRoute);
app.use(VagaRoute);
app.use(PVRoute);

app.listen(5000, () => {
    console.log("Alô Corno");
});