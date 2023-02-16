DROP DATABASE IF EXISTS cursos;
CREATE DATABASE cursos charset=UTF8 collate utf8_general_ci;
USE cursos;

create table alunos(
    id_alunos integer not null primary key auto_increment,
    nome varchar(70) not null,
    nascimento DATETIME not null
);

create table cursos(
    id_curso integer not null primary key,
    curso varchar(70) not null,
    duracao time not null
);

create table cursados(
    id_alunos integer not null,
    id_curso integer not null,
    _data DATETIME not null,
    foreign key (id_alunos) references alunos(id_alunos) on delete cascade,
    foreign key (id_curso) references cursos(id_curso)
);

describe alunos;
describe cursos;
describe cursados;

show tables;

---------------------------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/Prova/docs/alunos.csv'
INTO TABLE alunos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from alunos;
-----------------------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/Prova/docs/cursos.csv'
INTO TABLE cursos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from cursos;
---------------------------
LOAD DATA INFILE 'C:/Users/Suporte/Desktop/Prova/docs/cursados.csv'
INTO TABLE cursados
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

select * from cursados;

drop view vw_geral;
create view vw_geral as 
SELECT a.id_alunos, a.nome, a.nascimento, c.id_curso, c.curso, c.duracao, t._data from alunos a
inner join cursos c
on a.id_alunos = c.id_curso
join cursados t
on  t._data ;

select * from vw_geral;