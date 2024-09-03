const Book = require('../models/Book');
const User = require('../models/User');

// Borrow a book
exports.borrowBook = async (req, res) => {
  const { bookId, userId } = req.body;
  try {
    const book = await Book.findById(bookId);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    if (book.borrower) {
      return res.status(400).json({ message: 'Book is already borrowed' });
    }

    book.borrower = userId;
    await book.save();
    res.json({ message: 'Book borrowed successfully', book });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Return a borrowed book
exports.returnBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });

    book.borrower = null;
    await book.save();
    res.json({ message: 'Book returned successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
