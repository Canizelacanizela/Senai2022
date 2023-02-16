DROP DATABASE IF EXISTS EscolaDanca;
CREATE DATABASE EscolaDanca charset=UTF8 collate utf8_general_ci;
USE EscolaDanca;

CREATE TABLE Professores(
    id_prof integer not null primary key,
    nome_prof varchar(100) not null,
    formacao varchar(50) not null
);

CREATE TABLE Telefones(
    id_tel integer not null primary key,
    id_prof integer not null,
    telProf varchar(30) not null,
    foreign key (id_prof) references Professores(id_prof)
);


CREATE TABLE Horarios(
    id_hor integer not null primary key,
    inicio TIME not null,
    fim TIME not null
);

CREATE TABLE Disciplinas(
    id_disc integer not null primary key,
    nomeDisc varchar(100) not null,
    id_hor integer not null,
    foreign key (id_hor) references Horarios(id_hor)
);

CREATE TABLE Turmas(
    cod_turma integer not null primary key,
    horario varchar(50) not null,
    tipo varchar(50) not null
);


CREATE TABLE Alunos(
    ra varchar(30) not null primary key,
    nome_aluno  varchar(150) not null,
    sexo varchar(30) not null,
    dnascimento DATETIME not null,
    cod_turma integer not null,
    foreign key (cod_turma) references Turmas(cod_turma)
);  

describe Professores;
describe Turmas;
describe Disciplinas;
describe Alunos;
describe Horarios;

show tables;

--------------------------------------

insert into Professores values(1,"Ana Maria", "Professora");
insert into Professores values(2,"Fabio", "Professor");

select * from Professores;


insert into Telefones values(1,1,"(19)99643-8362");
insert into Telefones values(2,1,"(19)99343-5263");
insert into Telefones values(3,2,"(19)99843-8262");
insert into Telefones values(4,2,"(19)99853-7213");

select * from Telefones;

insert into Turmas values(1,"Manha", "Educacao Fisica, Portugues ");
insert into Turmas values(2,"Tarde","Quimica, Matematica");
insert into Turmas values(3,"Noite","Matematica, Biologia");

select * from Turmas;

insert into Alunos values(1,"Ana Beatriz", "Feminino", "2003-02-03" ,1);
insert into Alunos values(2,"Juliana","Feminino", "2004-12-23",3);
insert into Alunos values(3,"Matheus","Masculino","2005-02-13" ,3);
insert into Alunos values(4,"Pedro", "Masculino", "2004-08-25",2);
insert into Alunos values(5,"Julio","Masculino", "2003-06-23",1);
insert into Alunos values(6,"Nicole","Feminino", "2004-03-20",2);
insert into Alunos values(7,"João Pedro", "Masculino", "2004-07-23",3);
insert into Alunos values(8,"Maria Eduarda","Feminino","2004-11-23",1);
insert into Alunos values(9,"Sofia","Feminino", "2004-10-23",2);

select * from Alunos;

insert into Horarios values(1,"09:00", "09:45");
insert into Horarios values(2,"10:00", "10:50");
insert into Horarios values(3,"11:00","11:45");
insert into Horarios values(4,"12:00","12:50" );
insert into Horarios values(5,"13:00", "13:45");
insert into Horarios values(6,"13:50", "14:50");
insert into Horarios values(7,"15:00", "15:45");

select * from Horarios;


insert into Disciplinas values(1,"Matematica",1 );
insert into Disciplinas values(2,"Educacao Fisica",5);
insert into Disciplinas values(3,"Portugues",7);
insert into Disciplinas values(4,"Matematica",2);
insert into Disciplinas values(5,"Quimica",6);
insert into Disciplinas values(6,"Biologia",3);

select * from Disciplinas;



--------------------------------------

-- LOAD DATA INFILE ''
-- INTO TABLE Professores
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from Professores;


-- LOAD DATA INFILE ''
-- INTO TABLE Turmas
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from Turmas;


-- LOAD DATA INFILE ''
-- INTO TABLE Disciplinas
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from Disciplinas;


-- LOAD DATA INFILE ''
-- INTO TABLE Alunos
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from Alunos;

-- LOAD DATA INFILE ''
-- INTO TABLE Horarios
-- FIELDS TERMINATED BY ';'
-- ENCLOSED BY '"'
-- LINES TERMINATED BY '\r\n'
-- IGNORE 1 ROWS;

-- select * from Horarios;

create view vw_Professores as 
SELECT p.id_prof, p.nome_prof, p.formacao, t.id_tel, t.telProf from Professores p 
inner join Telefones t
on p.id_prof = t.id_tel;

select * from vw_Professores;

------------------------------------------------------
create view vw_prof_turma as 
SELECT p.id_prof, p.nome_prof, t.cod_turma, t.tipo from Professores p 
inner join Turmas t
on p.id_prof = t.cod_turma;

select * from vw_prof_turma;

---------------------------------------------------
create view vw_turmas_disc as 
SELECT t.cod_turma, t.tipo, d.id_disc, d.nomeDisc from Turmas t 
inner join Disciplinas d
on t.cod_turma = d.id_disc;

select * from vw_turmas_disc;
--------------------------------------------------
create view vw_turmas_alunos as 
SELECT t.cod_turma, t.tipo, a.ra, a.nome_aluno, a.sexo,  a.dnascimento from Turmas t 
inner join Alunos a
on t.cod_turma = a.ra;

select * from vw_turmas_alunos;
---------------------------------------------------
create view vw_disc_horarios as 
SELECT d.id_disc, d.nomeDisc, h.id_hor, h.inicio, h.fim from Disciplinas d 
inner join Horarios h
on d.id_disc = h.id_hor;

select * from vw_disc_horarios;