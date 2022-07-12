const {Role,User} = require ('./../db');
const bcrypt = require('bcrypt');

async function defaultAdminAndRoles(){

    try{
const roldb = await Role.findAll();
if(roldb.length === 0){

    const rolUser = await Role.create({
        id:1,
        name:'user'

    });
    const roleAdmin = await Role.create({

        id:2,
        name:"admin"
    })


}else {
    console,log('Roles ya existen ')
} 
const userdb = await User.findOne({
    where: {
      id: 2
    }
  })
  if (!userdb) {
    const user = await User.create({
      name: "Admin",
      username: "admin",
      email: "admin@gmail.com",
      password: bcrypt.hashSync("12345", 8),
     
    });
    await user.addRoles(2);
  } else {
    console.log("Admin ya existe");
  }

    }catch(err){
console.log(err)

    }








}

module.exports= {

defaultAdminAndRoles

}