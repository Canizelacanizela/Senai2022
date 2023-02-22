const jwt = require('jsonwebtoken');

const ValidaAcesso = (req,res,next) => {
    const token = req.headers.bearer;
    
    jwt.verify(token, process.env.KEY, (err, data) => {
        if(err != null) res.status(404).json(err).end();
        else{
            console.log(data);
            if(data.tipo === "Gerente"){
                next();
            }else{
                res.status(401).end();
            }
        }
    })
    res.status(200).end();
}

module.exports = {
    ValidaAcesso
}