drop database if exists aluga;
create database aluga charset=UTF8 COLLATE=utf8_general_ci;
use aluga;

create table clientes(
cod_cli integer not null primary key,
nome varchar(50) not null,
endereco varchar(100) not null,
telefone varchar(15) not null
);

create table filmes(
cod_filme integer not null primary key auto_increment,
nome_filme varchar(100) not null,
genero varchar(50) not null
);

create table locacoes(
id_locacoes integer not null primary key auto_increment,
cod_cli integer not null,
cod_filme integer not null,
data_locacao date not null,
data_devolucao date not null,
foreign key (cod_cli) references clientes(cod_cli),
foreign key (cod_filme) references filmes(cod_filme)
);

describe clientes;
describe filmes;
describe locacoes;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/aula08/aluga_back/docs/clientes.csv'
INTO TABLE clientes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/aula08/aluga_back/docs/filmes.csv'
INTO TABLE filmes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/aula08/aluga_back/docs/locacoes.csv'
INTO TABLE locacoes
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

show tables;

select * from clientes;
select * from filmes;
select * from locacoes;

create view vw_cli as
select c.nome, c.telefone, f.nome_filme as filmes, l.data_locacao as locacoes from clientes c
inner join filmes f
inner join locacoes l;

select * from vw_cli;