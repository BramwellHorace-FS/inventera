const router = require('express').Router();
const { getAll, getOne, create, update, delete: deleteSupplier } = require('../controllers/supplier');

router.get('/', getAll);
router.get('/:id', getOne);
router.post('/', create);
router.put('/:id', update);
router.delete('/:id', deleteSupplier);

module.exports = router;
