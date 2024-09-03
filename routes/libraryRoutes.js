const express = require('express');
const {
  getLibraries,
  getLibraryById,
  createLibrary,
  updateLibrary,
  deleteLibrary,
} = require('../controllers/libraryController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

// Library routes
router.get('/', authMiddleware, getLibraries);
router.get('/:id', authMiddleware, getLibraryById);
router.post('/', authMiddleware, createLibrary);
router.put('/:id', authMiddleware, updateLibrary);
router.delete('/:id', authMiddleware, deleteLibrary);

module.exports = router;
