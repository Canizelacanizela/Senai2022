LOAD DATA INFILE "C:/Users/Suporte/Desktop/Tema1/docs/paciente.csv"
INTO TABLE paciente
FIELDS TERMINATED BY ';'
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS;