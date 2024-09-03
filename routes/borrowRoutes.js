const express = require('express');
const { borrowBook, returnBook } = require('../controllers/borrowController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Borrowing routes
router.post('/', authMiddleware, borrowBook);
router.put('/return/:id', authMiddleware, returnBook);

module.exports = router;
