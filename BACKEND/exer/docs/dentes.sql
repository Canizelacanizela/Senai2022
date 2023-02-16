drop database if exists dentes;
create database dentes charset=UTF8 collate utf8_general_ci;
use dentes;

create table profissas(
    id_profissa  integer not null primary key,
    nome varchar(50) not null,
    especialidade varchar(50) not null
);

create table consultas(
    consulta_id  integer not null primary key,
    paciente varchar(50) not null,
    horario DATETIME not null,
    id_profissa  integer not null,
    foreign key (id_profissa) references profissas(id_profissa)
);

create table tratamentos(
    id_tratamento  integer not null primary key,
    consulta_id  integer not null,
    tratamento varchar(50) not null,
    valor float(10,2) not null,
    foreign key (consulta_id) references consultas(consulta_id)
);


describe profissas;
describe consultas;
describe tratamentos;

show tables;

--Manual--

insert into profissas values(1,"Ana flávia","Dentista");
insert into profissas values(2,"Maria Silva","Ortodentista");
insert into profissas values(3,"Marcos Coelho","Anestesista");

select * from profissas;

insert into consultas values(1,"Carlos Roberto","2022-11-23T13:45",1);
insert into consultas values(2,"Juliana Solza","2022-11-23T14:45",1);
insert into consultas values(3,"Carla Oliveira","2022-11-23T15:45",1);
insert into consultas values(4,"Mariana Oliveira","2022-11-23T13:45",2);
insert into consultas values(5,"Gilberto Solza","2022-11-23T14:45",2 );
insert into consultas values(6,"Carolnia Oliveira","2022-11-23T15:45",2);
insert into consultas values(7,"Ester Oliveira","2022-11-23T13:45",3);
insert into consultas values(8,"Flávia Mattos","2022-11-23T14:45",3);
insert into consultas values(9,"Carolnia Martins","2022-11-23T15:45",3);

select * from consultas;

insert into tratamentos values(1,1,"Carie",100);
insert into tratamentos values(2,1,"Limpeza",50);
insert into tratamentos values(3,2,"Canal",500);
insert into tratamentos values(4,2,"Limpeza",50);
insert into tratamentos values(5,3,"Prótese",1000);
insert into tratamentos values(6,4,"Prótese",1000);
insert into tratamentos values(7,5,"Correção Óssea",1500);
insert into tratamentos values(8,5,"Limpeza",50);
insert into tratamentos values(9,6,"Extração",300);
insert into tratamentos values(10,6,"Implante",2000);
insert into tratamentos values(11,7,"Limpeza",50);
insert into tratamentos values(12,8,"Limpeza",50);
insert into tratamentos values(13,9,"Limpeza",50);

select * from tratamentos;


----Arquivos CSV-----

---Profissionais------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/exer/docs/profissionais.csv'
INTO TABLE profissas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from profissas;


----Consultas------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/exer/docs/consultas.csv'
INTO TABLE  Consultas
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from consultas;


-----Tratamentos------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/exer/docs/tratamentos.csv'
INTO TABLE tratamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from tratamentos;

----------------------

------View-----

create view vw_geral as 
SELECT p.id_profissa, p.nome, p.especialidade, c.consulta_id, c.paciente, c.horario, t.id_tratamento, t.tratamento, t.valor from profissas p 
inner join consultas c
on p.id_profissa = c.consulta_id
join tratamentos t
on  c.consulta_id = t.id_tratamento ;

select * from vw_geral;