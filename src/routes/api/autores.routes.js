const router = require('express').Router();

const { getAutorById } = require('../../controllers/autores.controller');
router.get('/:id/posts', getAutorById);

module.exports = router;