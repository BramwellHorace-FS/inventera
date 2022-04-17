const router = require('express').Router();
const { upload } = require('../controllers/upload');

// POST /api/upload
router.post('/', upload);

module.exports = router;
