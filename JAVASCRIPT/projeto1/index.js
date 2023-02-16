const express = require('express');
const app = express();

app.use(express.json());

 app.get('projeto1',(req, res)=>{
     res.json("Hello World");
 });

app.listen(3000,()=>{
    console.log("Respondendo a porta 3000.");
});