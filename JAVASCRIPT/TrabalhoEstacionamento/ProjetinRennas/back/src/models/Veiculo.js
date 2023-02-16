const toCreate = (model) => {
    return `INSERT INTO veiculos VALUES ('${model.placa}','${model.tipo}','${model.modelo}','${model.cor}','${model.cpf}')`;
}

const toReadAll = (model) => {
    return `SELECT * FROM veiculos`;
}

const toRead = (model) => {
    return `SELECT * FROM veiculos WHERE placa='${model.placa}'`;
}

const toReadType = (model) => {
    return `SELECT * FROM veiculos WHERE tipo '${model.tipo}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toReadType
}