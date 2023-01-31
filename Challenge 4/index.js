const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')
app.get('/', (req, res) => {
  res.end('Hello World!');
});
app.get("/list_jokes", (req, res) => {
  res. setHeader("Access-Control-Allow-Origin", "*");
    fs.readFile(__dirname + '/' + 'jokes.json', (err, data) => {
        res.end(data);
    });
});
app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });