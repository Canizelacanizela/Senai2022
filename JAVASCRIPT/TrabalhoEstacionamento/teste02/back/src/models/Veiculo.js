const toCreate = (model) => {
    return `INSERT INTO veiculos VALUES ('${model.placa}','${model.tipo}','${model.modelo}','${model.cor}','${model.cpf}')`;
}

const toRead = (model) => {
    return `SELECT * FROM veiculos WHERE placa='${model.placa}'`;
}

const toReadType = (model) => {
    return `SELECT * FROM veiculos WHERE tipo like '%${model.tipo}%'`;
}

const toUpdate = (model) => {
    return `UPDATE veiculos SET 
                tipo = '${model.tipo}',
                modelo = '${model.modelo}',
                cor = '${model.cor}',
                cpf = '${model.cpf}'
                WHERE placa = '${model.placa}'`;
}

module.exports = {
    toCreate,
    toRead,
    toReadType,
    toUpdate
}