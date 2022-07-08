const {Router} = require ('express');
const router = Router();
const ingresosRoutes = require ('./ingresos');
const egresosRoutes = require('./egresos');

// router.get('/', (req, res) => { 
//     res.status(200).send('Hello World!') });

  router.use('/ingresos', ingresosRoutes );
  router.use('/egresos', egresosRoutes);

module.exports = router;