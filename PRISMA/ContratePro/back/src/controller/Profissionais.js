const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const create = async (req, res) => {
  let tabela_Profissionais = await prisma.tabelaProfissionais.create({
    data: req.body,
  });

  res.status(200).json(tabela_Profissionais).end();
};

const readOne = async (req, res) => {
  let tabela_Profissionais = await prisma.tabelaProfissionais.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
      id: true,
      nome_p: true,
      email: true,
      endereco: true,
      biografia: true,
      tel: true,
      descricao: true,
      preco_h: true,
      categorias: {
        select: {
          nome_categoria: true,
        },
      },
    },
  });

  res.status(200).json(tabela_Profissionais).end();
};

const read = async (req, res) => {
  let tabela_Profissionais = await prisma.tabelaProfissionais.findMany({
    select: {
      id: true,
      nome_p: true,
      email: true,
      endereco: true,
      biografia: true,
      tel: true,
      descricao: true,
      preco_h: true,
      categorias: {
        select: {
          nome_categoria: true,
        },
      },
    },
  });

  res.status(200).json(tabela_Profissionais).end();
};

const update = async (req, res) => {
  const tabela_Profissionais = await prisma.tabelaProfissionais.update({
    where: {
      id: Number(req.params.id),
    },
    data: req.body,
  });
  res.status(202).json(tabela_Profissionais).end();
};

const del = async (req, res) => {
  const tabela_Profissionais = await prisma.tabelaProfissionais.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(204).end();
};

module.exports = {
  create,
  read,
  del,
  update,
  readOne
};
