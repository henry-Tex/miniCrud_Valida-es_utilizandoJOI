create database sistema_cadastro;
create table usuarios(
	id serial primary key,
	nome text not null,
	email text unique not null,
    senha text not null,
    nome_loja text not null
);