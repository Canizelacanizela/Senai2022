const toReadAll = (model) => {
    return `SELECT posts.* ,usuarios.nome FROM posts INNER JOIN usuarios ON posts.id_user = usuarios.id_user`;
}

const toReadID = (model) => {
    return `SELECT posts.*, usuarios.nome FROM posts INNER JOIN usuarios ON posts.id_user = usuarios.id_user WHERE postagem_id='${model.postagem_id}'`;
}

const toCreate = (model) => {
    return `INSERT INTO posts VALUES (default,'${model.id_user}',curdate(),'${model.titulo}','${model.conteudo}')`;
}

const toDelete= (model) => {
    return `DELETE FROM posts WHERE postagem_id='${model.postagem_id}'`;
}

const toUpdate = (model) => {
    return `UPDATE posts SET titulo = '${model.titulo}', conteudo = '${model.conteudo}' WHERE postagem_id = ${model.postagem_id}`;
}


module.exports = {
    toReadAll,
    toReadID,
    toCreate,
    toDelete,
    toUpdate
}