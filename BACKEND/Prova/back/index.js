const express = require('express');
const cors = require('cors');

const AlunosRoute = require('./src/routes/AlunoRoute');
const CursosRoute = require('./src/routes/CursoRoute');
// const CursadosRoute = require('./src/routes/CursadosRoute');


const app = express();
app.use(express.json());
app.use(cors());
app.use(AlunosRoute);
app.use(CursosRoute);
// app.use(CursadosRoute);

app.listen(5000, () => {
    console.log("Bem vindo.");
});