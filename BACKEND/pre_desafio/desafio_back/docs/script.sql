drop database if exists emprestimos;
create database emprestimos charset=UTF8 COLLATE=utf8_general_ci;
use emprestimos;

create table cliente(
    cpf varchar(50) not null primary key,
    nome varchar(50) not null,
    sobrenome varchar(55) not null,
    cep varchar(100) not null,
    complemento varchar(140) not null
);

create table emprestimo(
    id_empre integer not null primary key auto_increment,
    cpf varchar(50) not null,
    capital varchar(20) not null,
    n_parcelas varchar(30) not null,
    taxa  varchar(60) not null,
    imposto varchar(60) not null,
    foreign key (cpf) references cliente(cpf)
);

create table telefones(
    cpf varchar(50) not null,
    tipo varchar(10) not null,
    numero varchar(16) not null,
    foreign key (cpf) references cliente(cpf)
);

describe cliente;
describe emprestimo;
describe telefones;

show tables;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/pre_desafio/desafio_back/docs/clientes.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/pre_desafio/desafio_back/docs/emprestimos.csv'
INTO TABLE emprestimo
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/pre_desafio/desafio_back/docs/telefones.csv'
INTO TABLE  telefones
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from cliente;
select * from emprestimo;
select * from telefones;

