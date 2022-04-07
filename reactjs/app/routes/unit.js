const router = require('express').Router();
const unitController = require('../controllers/unit');

router.get('/', unitController.getAll);

module.exports = router;
