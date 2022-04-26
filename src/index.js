const express = require('express');
const api = require('./api/api');
// Initialize Express
const app = express()
app.use("/api", api);
// Create GET request
app.get('/', (req, res) => {
  res.send('Express on Vercel')
})

// Initialize server
app.listen(5000, () => {
  console.log('Running on port 5000.')
})

module.exports = app
