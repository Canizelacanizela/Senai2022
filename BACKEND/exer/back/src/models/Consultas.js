const toReadAll = (model) => {
   return `SELECT * FROM consultas` ;
}

const toRead = (model) => {
    return `SELECT * FROM profissas WHERE paciente='${model.paciente}'`;
}


module.exports = {
    toReadAll,
    toRead
   
}