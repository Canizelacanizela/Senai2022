const toCreate = (model) => {
    return `INSERT INTO processa_vagas VALUES ('${model.cpf}', '${model.placa}', '${model.id_vaga}', curdate(), default)`;
}

const toReadAll = () => {
    return `SELECT * FROM processa_vagas`;
}

const toReadData = (model) => {
    return `SELECT * FROM processa_vagas WHERE entrada like '%${model.entrada}%'`;
}

const toUpdate = (model) => {
    return `UPDATE processa_vagas SET 
            saida = '${model.saida}'
            WHERE cpf = '${model.cpf}' and id_vaga='${model.id_vaga}'
            ORDER BY entrada DESC
            LIMIT 1;`
}

module.exports = {
    toCreate,
    toReadAll,
    toReadData,
    toUpdate
}