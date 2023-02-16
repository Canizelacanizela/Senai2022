const toCreate = (model) => {
    return `INSERT INTO itens VALUES (${model.ni},'${model.aquisicao}','${model.denominacao}',${model.valor},'${model.img}')`;
}
const toReadAll = (model) => {
    return "SELECT * FROM ";
}
const toCreateOne = (model) => {
    return "SELECT * FROM ";
}
const toRead = (model) => {
    return `SELECT * FROM itens  WHERE ni=${model.ni}`;
}

const toReadNome = (model) => {
    return `SELECT * FROM itens  WHERE denominacao like '%${model.denominacao}%'`;
}

const toReadData = (model) => {
    return `SELECT * FROM itens  WHERE aquisicao like '%${model.aquisicao}%'`;
}

const toUpdate = (model) => {
    return `UPDATE itens SET 
                aquisicao = '${model.aquisicao}',
                denominacao = '${model.denominacao}',
                valor = ${model.valor},
                img = '${model.img}'
                WHERE ni = ${model.ni}`;
}
const toDelete = (model) => {
    return `DELETE FROM itens WHERE ni=${model.ni}`;
}

module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toReadNome,
    toReadData,
    toUpdate,
    toDelete
}