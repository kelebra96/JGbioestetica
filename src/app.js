const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing JSON request bodies
app.use(express.json());

// Middleware for parsing URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

// Serve static files from the src/public directory
app.use(express.static('src/public'));

// Import routes
const publicRoutes = require('./routes/public.routes');

// Use routes
app.use('/', publicRoutes);

// Health check route
app.get('/api/status', (req, res) => {
  res.json({ status: 'Server is running' });
});

// 404 Error handling middleware - handle routes that don't exist
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// General error handling middleware - must be last
app.use((err, req, res, next) => {
  console.error('Error occurred:', err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Export the app instance
module.exports = app;