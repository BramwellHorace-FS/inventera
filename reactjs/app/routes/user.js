const router = require('express').Router();
const userCtrl = require('../controllers/user');

router.get('/:id', userCtrl.getOne);
router.post('/', userCtrl.create);

module.exports = router;
