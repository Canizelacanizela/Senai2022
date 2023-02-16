const toCreate = (model) => {
    return `INSERT INTO processa_vagas VALUES ('${model.id_vaga}', '${model.entrada}', default, '${model.placa}')`;
}

const toReadData = (model) => {
    return `SELECT * FROM processa_vagas WHERE entrada like '%${model.entrada}%'`;
}

const toUpdate = (model) => {
    return `UPDATE processa_vagas SET 
                entrada = '${model.entrada}',
                saida = default,
                placa = '${model.placa}',
                WHERE id_vaga = '${model.id_vaga}'`;
}

module.exports = {
    toCreate,
    toReadData,
    toUpdate
}