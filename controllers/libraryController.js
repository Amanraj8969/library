const Library = require('../models/Library');
const Book = require('../models/Book');

// Get all libraries
exports.getLibraries = async (req, res) => {
  try {
    const libraries = await Library.find();
    res.json(libraries);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Get library by ID
exports.getLibraryById = async (req, res) => {
  try {
    const library = await Library.findById(req.params.id).populate({
      path: 'books',
      populate: { path: 'borrower', select: 'name' },
    });
    if (!library) return res.status(404).json({ message: 'Library not found' });

    res.json(library);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Create a new library
exports.createLibrary = async (req, res) => {
  const { name, location } = req.body;
  try {
    const newLibrary = new Library({ name, location });
    await newLibrary.save();
    res.status(201).json({ message: 'Library created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update library details
exports.updateLibrary = async (req, res) => {
  try {
    const library = await Library.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!library) return res.status(404).json({ message: 'Library not found' });

    res.json({ message: 'Library updated successfully', library });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete a library
exports.deleteLibrary = async (req, res) => {
  try {
    const library = await Library.findByIdAndDelete(req.params.id);
    if (!library) return res.status(404).json({ message: 'Library not found' });

    res.json({ message: 'Library deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
