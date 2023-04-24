LOAD DATA INFILE "C:/Users/Suporte/Desktop/OS/docs/colaboradores.csv"
INTO TABLE colaborador
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Suporte/Desktop/OS/docs/oss.csv"
INTO TABLE os
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

LOAD DATA INFILE "C:/Users/Suporte/Desktop/OS/docs/comentarios.csv"
INTO TABLE comentario
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

UPDATE os SET encerramento = NULL WHERE encerramento = "0000-00-00 00:00:00.000";