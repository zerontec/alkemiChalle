const { User, Ingresos } = require("../db");

async function createIngreso(req, res, next) {
 

  try {
const { amount, description } = req.body;
const newIngreso = await Ingresos.create({
    amount,
    description
   })

    return res.status(200).json( newIngreso );
  } catch (err) {
    res.status(500).json({ message: "Error al crear Ingreso" });
    console.log(err);
  }
}

async function getAllIngreso(req, res, next) {
  const data = await Ingresos.findAll();
  if (data) {
    try {
      return res.status(200).json(data);
    } catch (err) {
      res.status(500).json({ message: "Error al obtener los ingresos" });
    }
  } else {
    res.status(404).json({ message: "No hay ingresos" });
  }

  res.send(data);
}


async function putIngreso(req,res,next){

const id = req.params.id;
if(!id) next({message:"No se encontro el id", status:404});
try{
    let data = await Ingresos.findByPk(id);
    data.update(req.body);
    res.status(200).json({message:'Ingreso actualizado Exitosamente'});
}catch(err){

    res.status(500).json({message:'Error al actualizar el ingreso'});
    console.log(err);

}
}

async function getIngreso(req,res,next){
    const id = req.params.id;
    if(!id) next({message:"No se encontro el id", status:404});
    try{
        let data = await Ingresos.findByPk(id);
        res.status(200).json(data);
    }catch(err){

        res.status(500).json({message:'Error al obtener el ingreso'});
        console.log(err);

    }

}



module.exports= {

putIngreso,
createIngreso,
getAllIngreso,
getIngreso


}
