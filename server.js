const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const authMiddleware = require('./middlewares/authMiddleware');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// Import routes
const userRoutes = require('./routes/userRoutes');
const bookRoutes = require('./routes/bookRoutes');
const libraryRoutes = require('./routes/libraryRoutes');
const borrowRoutes = require('./routes/borrowRoutes');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/books', authMiddleware, bookRoutes);
app.use('/api/libraries', authMiddleware, libraryRoutes);
app.use('/api/borrow', authMiddleware, borrowRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
