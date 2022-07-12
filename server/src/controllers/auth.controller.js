const { User, Role, RefreshToken } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken')
const {JWT_SECRET, JWT_EXPIRATION}=process.env

const sigunp = (req, res, next) => {
  User.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
  })

  .then((user) => {
    if (req.body.roles) {
      Role.findAll({
        where: {
          name: 
          req.body.roles,
          
        },
      }).then((roles) => {
        user.setRoles(roles).then(() => {
          res.send({ message: "Usuario Registrado Exitosamente" });
        });
      });
    } else {
      user.setRoles(
        [1].then(() => {
          res.send({ message: "Usuario Registrado Exitosamente" });
        })
      );
    }
  })

  .catch((err) => {
    res.status(500).send({ message: err.message });
  });
};



const sigin = (req, res, next)=>{

    User.findOne({

        where:{email:req.body.email}
    }).then(async ( user)=>{

if(!user){
    return res.status(404).send({message:"password o email invalido "})
}
let passwordIsValid = bcrypt.compareSync(
    req.body.password,
    user.password

);

if(!passwordIsValid){

    return res.status(401).send({accessToken:null,message:'password o email invalido'})
}


const token = jwt.sign({id:user.id},JWT_SECRET,{expiresIn:JWT_EXPIRATION});




let refreshToken = await RefreshToken.createToken(user);



let authorities = [];
      user.getRoles().then(roles => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          username: user.username,
          email: user.email,
          roles: authorities,
        
          accessToken: token,
          refreshToken: refreshToken,
        });
      });
    }) .catch((err) => {
        res.status(500).send({ message: err.message , });
        console.log(err)
      });
  };
  
 refreshToken = async (req, res) => {

    const { refreshToken: requestToken } = req.body;
  
    if (requestToken == null) {
      return res.status(403).send({ message: '"Refrescar token es Requerido' });
    }
    try {
  
      let refreshToken = await RefreshToken.findOne({
        where: { token: requestToken },
      });
  
      console.log(refreshToken);
  
      if (!refreshToken) {
        res.status(403).send({ message: "No se encuentra token en la base de Datos" });
  
        return;
      }
      if (RefreshToken.verifyExpiration(refreshToken)) {
        RefreshToken.destroy({ where: { id: refreshToken.id } });
  
        res.status(403).json({
          message: "Token ha Expirado inicie sesion nuevamente",
        });
        return;
      }
  
      const user = refreshToken.getUser();
      let newAccessToken = jwt.sign({ id: user.id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRATION,
      });
      return res.status(200).json({
        accessToken: newAccessToken,
        refreshToken: refreshToken.token,
      });
    } catch (err) {
      return res.status(500).send({ message: err });
    }
  };
  
  


module.exports = {
  sigunp,
  sigin,
  refreshToken
 
};

// const sigunp = (req, res, next) => {

//     User.create({
//         name:req.body.name,
//         username:req.body.username,
//         email:req.body.email,
//         password: bcrypt.hashSync(req.body.password, 10),
//     })

//     .then(user =>{

//     const isFirstAccount = (await User.count()) ===0;

//     user.role = isFirstAccount ? Role.Admin : Role.user;
//     res.status(200).json({message:"Usuario creado exitosamente"});

//     })
//     .catch((err) =>{
//         res.status(500).json({message:'Error al crear el usuario'});
//         console.log(err)
//     })

//     }
