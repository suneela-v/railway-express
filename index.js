
// index.js


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


app.listen(8080, '0.0.0.0', () => {
  console.log(`Server is running on port ${port}`);
});
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});
setInterval(() => {}, 1000); // This will keep the process alive


//redeploy purpose12