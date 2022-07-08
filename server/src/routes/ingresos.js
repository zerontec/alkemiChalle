const {Router} = require ('express');
const router = Router();
const{createIngreso, getAllIngreso, getIngreso, putIngreso} = require('../controllers/ingresos.controller');


router.get('/', getAllIngreso)
router.put('/update/:id' ,putIngreso);
router.get('/:id', getIngreso);
router.post('/create', createIngreso);


module.exports= router;