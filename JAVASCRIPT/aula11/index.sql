drop database if exists academy;
create database academy charset=UTF8 collate utf8_general_ci;
use academy;

create table alunos (
    id_aluno integer not null primary key auto_increment,
    pri_nome varchar(25) not null,
    nacimento varchar(25) not null,
    sexo varchar(25) not null,
    peso varchar(25) not null
);

create table telefones(
    id_aluno integer not null,
    telefone varchar(15) not null,
    foreign key (id_aluno) references alunos(id_aluno)
);

create table exercicios (
    id_exercicio integer not null primary key auto_increment,
    id_aluno integer not null,
    descricao varchar(100) not null,
    grupo_muscular varchar(50) not null,
    foreign key (id_aluno) references alunos (id_aluno)
);

create table aparelhos (
    id_aparelho integer not null primary key auto_increment,
    id_aluno integer not null,
    nome varchar(100) not null,
    foreign key (id_aluno) references alunos (id_aluno)
);

describe alunos;
describe telefones;
describe exercicios;
describe aparelhos;

-- insert into alunos values
-- (null,"John","01/09/1970","Masculino","62,5"),
-- (null,"Martha","19/04/1983","Feminino","55,2"),
-- (null,"Lucas","20/12/1990","Masculino","48,3");

-- insert into telefones values
-- (1,"19-19293-6362"),
-- (1,"19-19293-6362"),
-- (2,"19-19293-6362"),
-- (3,"19-19293-6362"),
-- (3,"19-19293-6362");
