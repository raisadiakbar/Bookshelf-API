require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');


const hostname = '127.0.0.1';
const Port = 9000;

const Router = require('./route/book');

app.get('/', (req, res)=> {
  res.send('Hello World');
}) 

// app.use(express.urlencoded({ extended: true, type: 'application/x-www-form-urlencoded' }));
app.use(express.json());

app.use('/books', Router);

app.listen(Port, hostname, () => {
     console.log(`Server running at http//${hostname}:${Port}`);
})


module.exports = app;

