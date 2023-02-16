DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;
USE estacionamento;

CREATE TABLE clientes(
    cpf varchar(14) primary key not null unique,
    nome varchar(50) not null,
    telefone varchar(15) not null
);

CREATE TABLE veiculos(
    placa varchar(7) primary key not null unique,
    tipo varchar(15) not null,
    modelo varchar(30) not null,
    cor varchar(15) not null,
    cpf varchar(14) not null,
    foreign key(cpf) references clientes(cpf) on delete cascade
);

CREATE TABLE vagas(
    id_vaga integer not null primary key auto_increment,
    status_vaga boolean not null,
    descricao varchar(30) not null,
    valor_hora float(10,2) not null
);

CREATE TABLE processa_vagas(
    cpf varchar(14) not null,
    placa varchar(7) not null,
    id_vaga integer not null,
    entrada DATETIME not null,
    saida DATETIME,
    foreign key(cpf) references clientes(cpf) on delete cascade,
    foreign key (placa) references veiculos(placa),
    foreign key (id_vaga) references vagas(id_vaga)
);

show tables;

insert into clientes values
('48487609090','Sara de Souza Alves', '(19)99934-1234'),
('98587639534','Evandro Silva', '(19)99678-4321'),
('34535605823','Zélia Neto', '(19)99634-8878'),
('45644609378','Gilberto Martim', '(19)99849-8662'),
('92387210014','Xeila Bispo', '(19)99849-8662');

insert into veiculos values
('ABB1A11', 'Moto', 'Honda','Vermelha', '48487609090'),
('ACA1A22', 'Carro', 'FIESTA','Preto', '98587639534'),
('ACA1A32', 'Carro', 'COURRIER','Prata', '34535605823'),
('AAC1A34', 'Moto', 'Suzuki','Azul', '45644609378'),
('BCA1A55', 'Carro', 'RANGER','Brancp', '92387210014');

insert into vagas values
(default, 1, "Carro Sombra",12.5),
(default, 0, "Carro Sombra",12.5),
(default, 1, "Carro Sombra",12.5),
(default, 1, "Carro Sombra",12.5),
(default, 0, "Carro Sol",10),
(default, 1, "Preferencial Idoso",10),
(default, 1, "Carro Sol",10),
(default, 1, "Preferencial Cadeirante",10),
(default, 0, "Carro Sol",10),
(default, 1, "Carro Sol",15);

insert into processa_vagas values
('48487609090', 'ACA1A22', 1, curdate(), default),
('98587639534', 'ABB1A11', 3, curdate(), default),
('34535605823', 'ACA1A32', 4, curdate(), default),
('45644609378', 'BCA1A55', 6, curdate(), default),
('92387210014', 'AAC1A34', 7, curdate(), default);

select * from clientes;
select * from veiculos;
select * from vagas;
select * from processa_vagas;

create view vw_geral as
SELECT c.cpf, c.nome, c.telefone, v.placa, v.tipo, v.modelo, v.cor, pv.id_vaga From clientes c
inner join veiculos v
on c.cpf = v.cpf
join processa_vagas pv
on v.placa  = pv.placa;

select * from vw_geral;