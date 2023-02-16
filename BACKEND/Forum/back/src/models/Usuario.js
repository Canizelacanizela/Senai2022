const toCreate = (model) => {
    return `INSERT INTO usuarios VALUES (default,'${model.nome}','${model.email}','${model.senha}')`;
}

const toDelete= (model) => {
    return `DELETE FROM usuarios WHERE id_user='${model.id_user}'`;
}

const toReadAll = (model) => {
    return `SELECT * FROM usuarios`;
}

const toRead = (model) => {
    return `SELECT * FROM usuarios WHERE email='${model.email}'`;
}

const toReadID = (model) => {
    
    return `SELECT * FROM usuarios WHERE id_user=${model.id_user}`;
}

const toUpdate = (model) => {
    
    return `UPDATE usuarios SET nome = '${model.nome}', senha = '${model.senha}' WHERE id_user = ${model.id_user}`;
}


const toLogin = (model) => {
    
    return `SELECT * FROM usuarios WHERE email = '${model.email}' and senha = '${model.senha}'`;
}

module.exports = {
    toCreate,
    toReadAll,
    toRead,
    toReadID,
    toDelete,
    toUpdate,
    toLogin
}