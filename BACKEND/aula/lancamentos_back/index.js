const express = require("express");
const cors = require("cors");
const mysql = require("mysql");


const app = express();
app.use(cors());

const con = mysql.createConnection({
    user:'root',
    host:'localhost',
    database:'lancamentos'
});

app.get('/lancamentos/debitos', (req,res) =>{
    let string = "select * from vw_debitos";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.get('/lancamentos/creditos', (req,res) =>{
    let string = "select * from vw_credito";
    con.query(string,(err,result)=>{
        if(err == null){
            res.json(result);
        }
    });
});

app.listen(3000,() => {
    console.log("Respondendo")
});