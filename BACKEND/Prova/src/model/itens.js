const toCreate = (model) => {
    return `INSERT INTO Produtos VALUES (${model.Cod_Produto},'${model.Nome_Produto}')`;
} 

const toReadProd = (model) => {
    return `SELECT * FROM Produtos WHERE Nome_Produto=${model.Nome_produto}`;
}

const toCreateDep = (model) => {
    return `INSERT INTO Departamentos VALUES (${model.Cod_Depto},'${model.Nome_Depto}')`
}

const toDel = (model) => {
    return `DELETE FROM Departamentos WHERE Cod_Depto=${model.Cod_Depto}`;
}

const toReadVWSol = (model) => {
    return `SELECT * FROM vw_all WHERE Solicitacoes=${model.Cod_Sol},${model.Data_sol},${model.Cod_Depto},${model.Cod_Func}`;
} 

const toReadTSol = (model) => {
    return `SELECT * FROM Produtos WHERE Nome_Produto=${model.Nome_produto}, SELECT * FROM Departamentos WHERE Cod_Depto like ${model.Cod_Depto}`
} 

const toReadDat = (model) => {
    return `SELECT * FROM solicitacoes WHERE Data_sol like "2019-03%"`;
} 

module.exports = {
    toCreate,
    toReadProd,
    toCreateDep,
    toDel,
    toReadVWSol,
    toReadTSol,
    toReadDat
}