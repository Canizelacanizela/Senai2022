const PORT = process.env.PORT || 3000
const express = require('express');
const cors = require('cors');

const router = require('./src/routes/routes.js');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log('MUITO PRO ELE');
});