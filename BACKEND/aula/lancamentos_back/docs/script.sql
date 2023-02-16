drop database if exists lancamentos;
create database lancamentos charset=UTF8 collate utf8_general_ci;
use lancamentos;

create table debitos(
 e_lancamento integer not null primary key,
 datas date not null,
 descricao varchar(100) not null,
 valor float(10) not null,
 tipo varchar(1) not null
);

describe debitos;

show tables;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/aula/lancamentos_back/docs/lancamentos.csv'
INTO TABLE debitos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from debitos;

create view vw_credito as
select * from debitos where tipo = "C";

create view vw_debito as
select * from debitos where tipo = "D";

select * from vw_debito;
select * from vw_credito;