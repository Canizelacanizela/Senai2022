const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(cors());

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost', 
    database: 'aluga',
});

app.get('/aluga/clientes', (req, res) => {
    let string = "select * from vw_cli"; 
    con.query(string, (err, result) => {
        if (err == null) {
            res.json(result);
        }
    });
});

app.listen(3000, () => {
    console.log("Respondendo")
});