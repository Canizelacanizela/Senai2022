drop database if exists pizzaria;
create database pizzaria charset=UTF8 COLLATE=utf8_general_ci;
use pizzaria;

create table cliente (
   id_cli integer not null primary key auto_increment,
   telefone varchar (20) not null,
   cli_nome varchar (50) not null,
   numero decimal (5,0) not null,
   complemento varchar (100) not null,
   bairro varchar (100) not null,
   referencia varchar (100) not null
);

create table pizza (
    id_pizza integer not null primary key auto_increment,
    nome varchar (50) not null,
    descricao varchar (100) not null,
    valor decimal (4,2) not null
);
 
create table pedido (
    id_pedido integer not null primary key auto_increment,
    id_cli integer not null,
    datas datetime not null,
    valor decimal (5,2) not null,
    foreign key (id_cli) references cliente(id_cli)
    
);

create table item_pedido (
    id_pedido integer not null,
    id_pizza integer not null,
    qnt decimal (2,0) not null,
    valor decimal (5,2) not null,
    foreign key (id_pedido) references pedido(id_pedido),
    foreign key (id_pizza) references pizza(id_pizza)
);

describe cliente;
describe pizza;
describe pedido;
describe item_pedido;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/desafio/pizza_back/docs/clientes.csv'
INTO TABLE cliente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/desafio/pizza_back/docs/pizzas.csv'
INTO TABLE pizza
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/desafio/pizza_back/docs/pedido.csv'
INTO TABLE pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE 'C:/Users/Suporte/Desktop/desafio/pizza_back/docs/item.csv'
INTO TABLE item_pedido
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

show tables;

select * from cliente;
select * from pizza;
select * from pedido;
select * from item_pedido;

