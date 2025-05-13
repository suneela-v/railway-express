const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

console.log("App is starting...");

app.get('/', (req, res) => {
  res.send('Hello from Railway Express App!');
});

app.use((req, res, next) => {
  res.setHeader('Connection', 'keep-alive');
  next();
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
