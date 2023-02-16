const express = require('express');
const cors = require('cors');

const ProfissaRoute = require('./src/routes/ProfissionalRoutes');
const ConsultaRoute = require('./src/routes/ConsultasRoutes');
// const TratamentoRoute = require('./src/routes/TratamentosRoutes');

const app = express();
app.use(express.json());
app.use(cors());
app.use(ProfissaRoute);
app.use(ConsultaRoute);
// app.use(TratamentoRoute);

app.listen(5000, () => {
    console.log("Bem vindo.");
});