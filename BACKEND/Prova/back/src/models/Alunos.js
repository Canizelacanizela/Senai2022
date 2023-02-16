
const toCreate = (model) => {
    return `INSERT INTO alunos VALUES (default,'${model.nome}','${model.nascimento}')`;
}

const toReadAll = (model) => {
    return `SELECT * FROM alunos`;
}

const toReadID = (model) => {
    return `SELECT * FROM alunos WHERE id_alunos='${model.id_alunos}'`;
}

const toReadAlunos = (model) => {
    return `SELECT * FROM alunos WHERE nome='${model.nome}'`;
}

const toDelete= (model) => {
    return `DELETE FROM alunos WHERE id_alunos='${model.id_alunos}'`;
}

const toUpdate= (model) => {
    return `UPDATE alunos SET id_alunos='${model.id_alunos},nome='${model.nome},nascimento='${model.nascimento}'`;
}


module.exports = {
    toCreate,
    toReadAll,
    toReadID,
    toReadAlunos,
    toDelete
}