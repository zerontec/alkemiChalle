const { Egresos } = require("../db");

async function createEgresos(req, res, next) {
  try {
    const { amount, description } = req.body;
    const newEgreso = await Egresos.create({
      amount,
      description,
    });

    res.status(200).json(newEgreso);
  } catch (err) {
    res.status(500).json({ message: "Error al crear el egreso" });
    console.log(err);
  }
}

async function getAllEgresos(req, res, next) {
  const data = await Egresos.findAll();
  if (!data)
    try {
      res.status(404).json({ message: "No hay egresos" });
    } catch (err) {
      res.status(500).json({ message: "Error al obtener los egresos" });
    }
  else {
    res.send(data);
  }
}

async function putEgreso(req, res, next) {
  const id = req.params.id;
  if (!id) next({ mesague: "No se encontro el id", status: 404 });
  try {
    let data = await Egresos.findByPk(id);
    data.update(req.body);
    res.status(200).json({ message: "Egreso actualizado Exitosamente" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar el egreso" });
  }
}

module.exports = {
  createEgresos,
  getAllEgresos,
  putEgreso,
};
