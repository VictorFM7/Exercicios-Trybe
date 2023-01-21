const express = require('express');
const { BooksController } = require('../controllers')

const router = express.Router();

router.get('/', BooksController.getAll);
router.get('/:id', BooksController.getById);

module.exports = router;
