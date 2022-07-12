const {Router} = require('express');
const router = Router ();
const {  sigunp,sigin,refreshToken} = require('../controllers/auth.controller');
const {checkDuplicatedUsernameOrEmail}= require('../middleware/verifySignUp');

router.post('/register',checkDuplicatedUsernameOrEmail, sigunp);
router.post('/sigin', sigin)
router.post('/refresh-token', refreshToken)




module.exports = router;