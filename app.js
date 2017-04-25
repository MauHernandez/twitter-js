'use strict';

const express = require('express');
const chalk = require('chalk');
const router = express.Router();
const app = express();
const volleyball = require('volleyball');
const morgan = require('morgan');

app.use('/', function (req, res, next) {
    console.log(req.method, req.url);
    next();
})

// Longer method to log middleware responses
// app.use('/', function(request, response, next) {
//   console.log(request.method + ' ' + request.url + ' ' + response.statusCode);
//   next();
// })


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/news', function (req, res) {
  res.send('Hello News')	
})




