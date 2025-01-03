const express = require('express');
const app = express();

app.get('/users/:id', (req, res) => {
  const userId = req.params.id; 
  res.send(`User ID is: ${userId}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));


// 1. Path Parameters
// Path parameters are part of the URL path itself and are typically used to identify a specific resource. They are denoted by placeholders in the URL path.

// Key Points:
// Purpose: Used to identify a specific resource or entity.
// Format: /resource/:id (e.g., /users/123).
// Placement: Inside the URL path.
// Use Case: When the parameter is essential to locate a resource.
// Visibility: Cannot be optional (a missing parameter often results in a 404 error).
// Example:
// URL: https://example.com/users/123

// Path: /users/:id
// 123 is the path parameter representing the user ID.