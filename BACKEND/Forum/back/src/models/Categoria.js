const toReadAll = (model) => {
    return `SELECT * FROM categoria`;
}

const toReadNome = (model) => {
    return `SELECT * FROM categoria WHERE nome_categoria='${model.nome_categoria}'`;
}

module.exports = {
    toReadAll,
    toReadNome
}