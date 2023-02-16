const jwt = require('jsonwebtoken');
require('dotenv').config();


const login = (req,res) => {
    const user = req.body;

    const data ={
        "id":1,
        "nome":"Fulano dos Quartos",
        "role":"ADMIN"
    };

    jwt.sign(data, process.env.KEY, { expiresIn: '1m'}, function(err, token){
    if(err == null){
        data["token"] = token;
        res.status(200).json(data).end();
    }else{
        res.status(404).json(err).end();
    }
});
}

const remove = (req, res) =>{
const {id} = req.params;

    res.status(200).json({msg:"usuario deletado"}).end();
}

module.exports ={
    login,
    remove
}