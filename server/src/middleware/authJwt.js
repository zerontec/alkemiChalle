const { decode } = require("jsonwebtoken");
const jwt = require("jsonwebtoken");
const { User } = require("../../db");

const { TokenExpiredError } = jwt;
const catchError = (err, res) => {
  if (err instanceof TokenExpiredError) {
    return res.status(401).send({ messague: "Token Expirado" });
  }
  return res.sendStatus(401).send({ message: "No Autorizado" });
};

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).send({ messague: "No se Recibio Token " });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ messague: "Token Invalido" });
    }

    req.userId = decodes.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "admin") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Require ser Administrador!",
      });
      return;
    });
  });
};

const isUser = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    user.getRoles().then((roles) => {
      for (let i = 0; i < roles.length; i++) {
        if (roles[i].name === "user") {
          next();
          return;
        }
      }

      res.status(403).send({
        message: "Requiere ser usuario!",
      });
    });
  });
};

module.exports = {
  verifyToken,
  isAdmin,
  isUser,
  catchError
};
