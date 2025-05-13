
// index.js


const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
console.log("App is starting...");

app.get('/', (req, res) => {
  res.send('Hello from Railway Express App!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

//redeploy purpose12