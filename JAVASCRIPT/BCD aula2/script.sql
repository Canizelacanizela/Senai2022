-- Exclui o banco se existir e cria um novo com o padrão utf8 de caracteres
drop database if exists pedidos;
create database pedidos charset=UTF8 collate utf8_general_ci;
use pedidos;
-- DDL Criação da estrutura do Banco de dados
create table clientes(
    id_cliente integer not null primary key auto_increment,
      pri_nome varchar(20) not null,
      sobrenome varchar(20) not null,
      endereco varchar(100) not null
);
create table telefones(
    id_cliente integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)

);
    
create table pedidos(
    numero_pedido integer not null primary key auto_increment,
    id_cliente integer not null,
    data timestamp not null,
    valor decimal(8,2) not null,
    descricao_pedido varchar(80) not null,
    quantidade integer(4) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe pedidos;
describe clientes;
describe telefones;
show tables;

-- DML Alimentar o banco de dados com dados de teste
insert into clientes values
(null,"Jorge","Silva","Rua Bueno - Jaguariúna - SP"),
(null,"Julia","Silva","Rua Dias - Jaguariúna - SP"),
(null,"Matheus","Silvestre","Rua Um - Jaguariúna - SP"),
(null,"Mariana","Cabral","Rua Buenos Bueno - Jaguariúna - SP");

insert into telefones values

(1,"19-98363-1145"),
(1,"19-93284-7849"),
(2,"19-94852-7962"),
(2,"19-98181-9729"),
(3,"19-97171-9723");

insert into pedidos values
(null, 1,null,10,"Pastel de Frango",2),
(null, 1,null,2,"Bala de Café",1),
(null, 1,null,4,"Refrigerante",6),
(null, 1,null,8,"Fatia de bolo",3),
(null, 1,null,6,"Coxinha",5),

select * from clientes;
select * from telefones;
select * from pedidos;
