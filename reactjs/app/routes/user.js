const router = require('express').Router();
const { getOne, update } = require('../controllers/user');

router.get('/:id', getOne);
router.put('/:id', update);

module.exports = router;
