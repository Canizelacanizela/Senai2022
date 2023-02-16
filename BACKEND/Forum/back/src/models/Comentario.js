const toReadAll = (model) => {
    return `SELECT comentarios.*,usuarios.nome FROM comentarios INNER JOIN usuarios ON comentarios.id_user = usuarios.id_user`;
}

const toCreate = (model) => {
    return `INSERT INTO comentarios VALUES (default,'${model.id_user}',curdate(),'${model.postagem_id}','${model.resposta}')`;
}

const toDelete= (model) => {
    return `DELETE FROM comentarios WHERE id_coment='${model.id_coment}'`;
}

const toUpdate = (model) => {
    return `UPDATE comentarios SET resposta = '${model.resposta}' WHERE id_coment = ${model.id_coment}`;
}

module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}