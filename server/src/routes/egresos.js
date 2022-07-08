const {Router} = require('express');
const router = Router ();
const {createEgresos,getAllEgresos, putEgreso} = require('../controllers/egresos.controller');




router.get('/',getAllEgresos)
router.put('/update/:id' ,putEgreso);
router.post('/create', createEgresos);

module.exports = router