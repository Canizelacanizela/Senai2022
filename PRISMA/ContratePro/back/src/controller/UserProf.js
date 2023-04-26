const { PrismaClient } = require("@prisma/client");
const jwt = require("jsonwebtoken");

const prisma = new PrismaClient();

const create = async (req, res) => {
  let userProfissionais = await prisma.userProfissionais.create({
    data: req.body,
  });

  res.status(200).json(userProfissionais).end();
};

const readOne = async (req, res) => {
  let userProfissionais = await prisma.userProfissionais.findUnique({
    where: {
      id: Number(req.params.id),
    },
    select: {
      nome: true,
      email: true,
      biografia: true,
      telefone: true,
      porhora: true,
    },
  });

  //SELECT * FROM userProfissionais INNER JOIN publicacao ON userProfissionais.id = publicacao.usuario_id WHERE ....

  res.status(200).json(userProfissionais).end();
};

const read = async (req, res) => {
  let userProfissionais = await prisma.userProfissionais.findMany({
    select: {
      id: true,
      email: true,
      nome: true,
      senha: true,
      biografia: true,
      telefone: true,
      porhora: true,
      categoria: {
        select:{
          nome_categoria:true
        }
      },
      Comentario: {
        select: {
            comentario: true,
        }
    }
    },
  });

  //SELECT email, nome FROM userProfissionais WHERE email = ''

  res.status(200).json(userProfissionais).end();
};

const login = async (req, res) => {
  let userProfissionais = await prisma.userProfissionais.findMany({
    where: {
      AND: [{ email: req.body.email }, { senha: req.body.senha }],
    },
    select: {
      id: true,
      nome: true
    },
  });
  console.log(userProfissionais[0]);
  if (userProfissionais[0] != undefined) {
    jwt.sign(
      userProfissionais[0],
      process.env.KEY,
      { expiresIn: "10h" },
      function (err, token) {
        console.log(err);
        if (err == null) {
          userProfissionais[0]["token"] = token;
          res.status(200).json(userProfissionais[0]).end();
        } else {
          res.status(404).json(err).end();
        }
      }
    );
  } else {
    res.status(404).json({ msg: "Usuario ou Senha Invalidos" }).end();
  }
  //SELECT id, nome FROM userProfissionais WHERE email = '' AND senha = ''
};

const update = async (req, res) => {
  const userProfissionais = await prisma.userProfissionais.update({
    where: {
      id: Number(req.params.id),
    },
    data: req.body,
  });
  res.status(202).json(userProfissionais).end();
};

const del = async (req, res) => {
  const userProfissionais = await prisma.userProfissionais.delete({
    where: {
      id: Number(req.params.id),
    },
  });
  res.status(204).end();
};

module.exports = {
  create,
  read,
  login,
  readOne,
  del,
  update,
};