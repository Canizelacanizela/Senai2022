DROP DATABASE IF EXISTS estacionamento;
CREATE DATABASE estacionamento charset=UTF8 collate utf8_general_ci;
USE estacionamento;

CREATE TABLE clientes(
    cpf varchar(14) primary key not null,
    nome varchar(50) not null,
    telefone varchar(15) not null
);

CREATE TABLE veiculos(
    placa varchar(7) primary key not null,
    tipo varchar(15) not null,
    modelo varchar(30) not null,
    cor varchar(15) not null,
    cpf varchar(14) not null,
    foreign key(cpf) references clientes(cpf) on delete cascade on update cascade
);

CREATE TABLE vagas(
    id_vaga integer not null primary key auto_increment,
    status_vaga BIT not null,
    descricao varchar(30) not null,
    valor_hora float(10,2) not null
);

CREATE TABLE processa_vagas(
    id_vaga integer not null,
    entrada DATETIME not null,
    saida DATETIME,
    placa varchar(7) not null,
    foreign key (id_vaga) references vagas(id_vaga),
    foreign key (placa) references veiculos(placa),

);

show tables;

insert into clientes values
('484.876.090-90','Sara de Souza Alves', '(19)99934-1234'),
('085.876.395-34','Evandro Silva', '(19)99678-4321'),
('345.356.058-23','Zélia Neto', '(19)99634-8878'),
('456.446.093-78','Gilberto Martim', '(19)99849-8662'),
('023.872.100-14','Xeila Bispo', '(19)99849-8662');

insert into veiculos values
('ABB1A11', 'Moto', 'Honda','Vermelha', '484.876.090-90'),
('ACA1A22', 'Carro', 'FIESTA','Preto', '085.876.395-34'),
('ACA1A32', 'Carro', 'COURRIER','Prata', '345.356.058-23'),
('AAC1A34', 'Moto', 'Suzuki','Azul', '456.446.093-78'),
('BCA1A55', 'Carro', 'RANGER','Brancp', '023.872.100-14');

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
(1, date_add(now(),interval - 5 hour), default, 'ACA1A22'),
(3, date_add(now(),interval - 2 hour), default, 'ABB1A11'),
(4, date_add(now(),interval - 2 hour), default, 'ACA1A32'),
(6, date_add(now(),interval - 1 hour), default, 'BCA1A55'),
(7, date_add(now(),interval - 6 hour), default, 'AAC1A34');

select * from clientes;
select * from veiculos;
select * from vagas;
select * from processa_vagas;

create view vw_geral as
SELECT c.cpf, c.nome, c.telefone, v.placa, v.tipo, v.modelo, v.cor, pv.id_vaga, pv.entrada, pv.saida From clientes c
inner join veiculos v
on c.cpf = v.cpf
join processa_vagas pv
on v.placa  = pv.placa;

select * from vw_geral;