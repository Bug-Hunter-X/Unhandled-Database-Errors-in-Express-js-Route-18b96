const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database interaction ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user);
});

// Problem: Missing error handling in database interaction
// If the database query fails, the server crashes without an appropriate error response to the client.