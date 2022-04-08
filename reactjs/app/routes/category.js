const router = require('express').Router();
const { getAll, getOne, create, update, delete: deleteCategory } = require('../controllers/category');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteCategory);

module.exports = router;
