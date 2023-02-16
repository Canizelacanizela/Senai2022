const toReadAll = (model) => {
    return `SELECT sub_comentarios.*,usuarios.nome FROM sub_comentarios INNER JOIN usuarios ON sub_comentarios.id_user = usuarios.id_user`;
}

const toCreate = (model) => {
    return `INSERT INTO sub_comentarios VALUES (default,'${model.id_coment}','${model.id_user}',curdate(),'${model.subcoment}')`;
}

const toDelete= (model) => {
    return `DELETE FROM sub_comentarios WHERE sub_id='${model.sub_id}'`;
 }

 const toUpdate = (model) => {
    return `UPDATE sub_comentarios SET subcoment = '${model.subcoment}' WHERE sub_id = ${model.sub_id}`;
}


module.exports = {
    toReadAll,
    toCreate,
    toDelete,
    toUpdate
}