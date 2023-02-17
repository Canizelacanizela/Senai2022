DROP DATABASE IF EXISTS AgroTech;
CREATE DATABASE AgroTech charset=UTF8 collate utf8_general_ci;
USE AgroTech;


CREATE TABLE users (
    id_user integer not null auto_increment primary key,
    nome varchar(50) not null,
    email varchar(50) not null unique,
    senha varchar(20) not null
);

CREATE TABLE motoristas(
    id_motorista integer not null auto_increment primary key,
    nome_motor  varchar(50) not null,
    id_user integer not null,
    CNH varchar(20) not null unique,
    foreign key (id_user) references users(id_user) on delete cascade
);

CREATE TABLE frota(
    id_veiculo integer not null auto_increment primary key,
    placa varchar(7) not null unique,
    modelo varchar(30) not null
);;

CREATE TABLE manutencaoV(
    id_manu integer not null auto_increment primary key,
    data_inico DATETIME not null,
    data_fim DATETIME null,
    valor_gasto float(5,2) not null,
    descricao varchar(200) not null
);


CREATE TABLE operacoesV(
    id_opera integer not null auto_increment primary key,
    nome_motor varchar(20) not null
    data_saida DATETIME not null,
    data_retorno DATETIME null,
    descricao_servico varchar(200) not null
);

show tables;