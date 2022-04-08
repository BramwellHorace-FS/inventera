const router = require('express').Router();
const { getOne, create } = require('../controllers/user');

router.get('/:id', getOne);
router.post('/', create);

module.exports = router;
