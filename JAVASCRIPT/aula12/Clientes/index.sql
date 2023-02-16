drop database if exists clients;
create database clients charset=UTF8 collate utf8_general_ci;
use clients;

create table clientes (
    id_cliente integer not null primary key auto_increment,
    pri_nome varchar(50) not null,
    nacimento date not null,
    sexo varchar(1) not null,
    peso float(5,2)
);

create table telefones(
    id_aluno integer not null,
    telefone varchar(15) not null,
    foreign key (id_cliente) references clientes(id_cliente)
);

describe clientes;
describe telefones;
show tables;

insert into clientes values (1,"Mariana de Souza de Lima","2000-05-06","F",65,3);
insert into clientes values (2,"Gabriel de Castro Barbosa","1998-04-19","M",78,2);
insert into clientes values (3,"Laura Garcia","2003-07-12","F",55,5);
insert into clientes values (4,"Davi Bernadi Sanches","2010-05-06","M",40,8);

insert into telefones values (1,"(19) 99276-8866");
insert into telefones values (1,"(19) 99754-7644");
insert into telefones values (2,"(19) 99355-3353");
insert into telefones values (3,"(19) 99334-7541");
insert into telefones values (3,"(19) 99343-1226");
insert into telefones values (3,"(19) 99219-8864");
insert into telefones values (4,"(19) 99005-2398");

select * from clientes;
select * from telefones
