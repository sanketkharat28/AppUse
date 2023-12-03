const express = require('express');
const app = express();

// Middleware function 1
app.use('/middleware1', (req, res, next) => {
  console.log('Middleware 1 for path /middleware1');
  next(); // Call the next middleware function
});

// Middleware function 2
app.use('/middleware2', (req, res, next) => {
  console.log('Middleware 2 for path /middleware2');
  next(); // Call the next middleware function
});

// Route handler
app.get('/', (req, res) => {
  res.send('Hello, this is the main route!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
