const { User } = require("../db");

async function checkDuplicatedUsernameOrEmail(req, res, next) {
  //username
  User.findOne({
    where: {
      username: req.body.username,
    },
  }).then(async (user) => {
    if (user) {
      res.status(400).send({ message: "El usuario ya existe" });

      return;
    }

    //Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({ message: "El email ya existe" });

        return;
      }

      next();
    });
  });
}
const checkRolesExisted = (req, res, next) => {
    if (req.body.roles) {
      for (let i = 0; i < req.body.roles.length; i++) {
        if (!ROLES.includes(req.body.roles[i])) {
          res.status(400).send({
            message: "Role no existe = " + req.body.roles[i],
          });
          return;
        }
      }
    }
  
    next();
  };

  module.exports = {


    checkRolesExisted,
    checkDuplicatedUsernameOrEmail,
  }