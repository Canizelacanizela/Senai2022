<<<<<<< HEAD
LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/perfis.csv"
=======
LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/perfis.csv"
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
INTO TABLE perfis
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

<<<<<<< HEAD
LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/usuarios.csv"
=======

LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/usuarios.csv"
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
INTO TABLE user
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;

<<<<<<< HEAD
LOAD DATA INFILE "C:/Users/Suporte/Desktop/SENAI/Senai2022/PRISMA/TechMan/docs/equipamentos.csv"
=======
LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/equipamentos.csv"
>>>>>>> 689959416b526641f4a992d659769fe8a7c4d4ec
INTO TABLE equipamentos
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;


LOAD DATA INFILE "C:/Users/Desenvolvimento/Desktop/Senai2022/PRISMA/TechMan/docs/comentarios.csv"
INTO TABLE comentarios
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;