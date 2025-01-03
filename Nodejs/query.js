const express = require('express');
const app = express();

app.get('/users', (req, res) => {
  const page = req.query.page; // Access query parameter
  const limit = req.query.limit;
  res.send(`Page: ${page}, Limit: ${limit}`);
});

app.listen(3000, () => console.log('Server running on port 3000'));



// 2. Query Parameters
// Query parameters are part of the URL after the ? and are used to filter or sort the resource or provide additional information. Multiple query parameters are separated by &.

// Key Points:
// Purpose: Used for optional information like filtering, sorting, or pagination.
// Format: ?key=value&key2=value2 (e.g., ?page=2&limit=10).
// Placement: After the ? in the URL.
// Use Case: When the parameter is not mandatory for locating the resource.
// Visibility: Optional; can have default values if not provided.
// Example:
// URL: https://example.com/users?page=2&limit=10

// Query: page=2, limit=10