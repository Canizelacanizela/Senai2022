drop database if exists generico;
create database generico charset = UTF8 collate = utf8_general_ci;
use generico;

create table usuarios(
    login varchar(15) primary key not null,
    nome varchar(50) not null,
    nascimento date not null,
    telefone varchar(15) not null,
    avatar mediumblob
);

insert into usuarios values
("adrianalemos","Adriana Batista Lemos","2005-03-25","(19)98787-7778",to_base64(LOAD_FILE("C:/Users/Suporte/Desktop/Blob/assets/e.png"))),
("mauricioduarte","Mauricio Duarte","1998-01-20","(19)98787-33333",to_base64(LOAD_FILE("C:/Users/Suporte/Desktop/Blob/assets/f.png"))),
("anamello","Ana Maria Mello","2008-08-22","(19)98888-7661",to_base64(LOAD_FILE("C:/Users/Suporte/Desktop/Blob/assets/meme.png")));

select login, nome, nascimento, telefone from usuarios;