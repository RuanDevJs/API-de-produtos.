CREATE EXTENSION "uuid-ossp";

CREATE TABLE usuarios (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  cpf VARCHAR NOT NULL,
  senha VARCHAR  NOT NULL
);

CREATE TABLE produtos (
  id UUID NOT NULL UNIQUE DEFAULT uuid_generate_v4(),
  name VARCHAR NOT NULL,
  linha VARCHAR NOT NULL,
  descricao VARCHAR NOT NULL,
  preco VARCHAR  NOT NULL,
  quantidade VARCHAR  NOT NULL
);

