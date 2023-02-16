const toReadAll = () => {
    return `SELECT * FROM vagas`;
}

const toRead = (model) => {
    return `SELECT * FROM vagas WHERE id_vaga=${model.id_vaga}`;
}

const toCreate = (model) => {
    return `INSERT INTO vagas VALUE (default, 1, '${model.descricao}', ${model.valor_hora})`;
}

const toUpdate = (model) => {
    return `UPDATE vagas SET
            status_vaga = '${model.status_vaga}'
            WHERE id_vaga='${model.id_vaga}';`
}

module.exports = {
    toReadAll,
    toRead,
    toCreate,
    toUpdate
}