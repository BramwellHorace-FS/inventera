const router = require('express').Router();
const { getAll, getOne, create, update, delete: deleteOne } = require('../controllers/formula');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteOne);

module.exports = router;
