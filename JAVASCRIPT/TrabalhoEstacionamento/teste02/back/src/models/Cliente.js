const toCreate = (model) => {
    return `INSERT INTO clientes VALUES ('${model.cpf}','${model.nome}','${model.telefone}')`;
}

const toReadView = () => {
    return "SELECT * FROM vw_geral";
}

const toRead = (model) => {
    return `SELECT * FROM clientes WHERE cpf='${model.cpf}'`;
}

const toReadName = (model) => {
    return `SELECT * FROM clientes WHERE nome like '%${model.nome}%'`;
}

const toUpdate = (model) => {
    return `UPDATE clientes SET 
                nome = '${model.nome}',
                telefone = '${model.telefone}'
                WHERE cpf = '${model.cpf}'`;
}
const toDelete = (model) => {
    return `DELETE FROM clientes WHERE cpf = '${model.cpf}'`;
}

module.exports = {
    toCreate,
    toReadView,
    toRead,
    toReadName,
    toUpdate,
    toDelete
}