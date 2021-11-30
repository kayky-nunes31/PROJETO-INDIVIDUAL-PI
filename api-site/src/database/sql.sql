/* para workbench - local - desenvolvimento */
CREATE DATABASE ledessin;

USE ledessin;

CREATE TABLE usuario (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50),
	idade INT,
	preferencia VARCHAR(50),
	email VARCHAR(50),
	senha VARCHAR(50)
);

CREATE TABLE aviso (
	id INT PRIMARY KEY AUTO_INCREMENT,
	titulo VARCHAR(100),
    descricao VARCHAR(150),
	fk_usuario INT,
	FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
); 

select * from usuario;

select * from usuario join aviso on fk_usuario = id;

SELECT COUNT(idade) as Idade FROM usuario WHERE idade = '18';

SELECT COUNT(idade) as Idade FROM usuario WHERE idade between '11' and '15';

SELECT MAX(idade) as MaiorIdade FROM usuario;

SELECT MIN(idade) as MenorIdade FROM usuario;

SELECT MAX(idade) as MaiorIdade, MIN(idade) as MaiorIdade FROM usuario;

SELECT truncate(avg(idade), 2) as Media FROM usuario;


/*
INSERT INTO usuario VALUES
(100, 'Kayky', '18', 'sombreado', 'kayky@gmail.com', '123456');

UPDATE usuario SET idade = '19' WHERE nome = 'Kayky';	
*/