const express = require('express');
const app = express();

// Middleware applied globally
app.use(express.json()); // Parse JSON in request bodies
app.use((req, res, next) => {
  console.log('Middleware executed');
  next();
});

// Middleware applied to a specific route
app.use('/api', (req, res, next) => {
  console.log('API middleware');
  next();
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
