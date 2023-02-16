const toReadAll = (model) => {
    return `SELECT * FROM profissas`;
}

const toRead = (model) => {
    return `SELECT * FROM profissas WHERE id_profissa='${model.id_profissa}'`;
}

const toReadEspe = (model) => {
    return `SELECT * FROM profissas WHERE especialidade='${model.especialidade}'`;
}

module.exports = {
    toReadAll,
    toRead,
    toReadEspe
}