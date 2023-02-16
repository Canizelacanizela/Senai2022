const express = require('express');
const cors = require('cors');

const UsuarioRoute = require('./src/routes/UsuarioRoutes.js');
const CategoriaRoute = require('./src/routes/CategoriaRoute');
const PostagemRoute = require('./src/routes/PostagemRoutes');
const ComentarioRoute = require('./src/routes/ComentarioRoutes');
const SubComentarioRoute = require('./src/routes/SubRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use(UsuarioRoute);
app.use(CategoriaRoute);
app.use(PostagemRoute);
app.use(ComentarioRoute);
app.use(SubComentarioRoute);

app.listen(5000, () => {
    console.log("Bem vindo.");
});