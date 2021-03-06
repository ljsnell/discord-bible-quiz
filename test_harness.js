'use strict';

const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

var responseBuilder = require('./build_response.js')

const server = http.createServer((req, res) => {
  let rawdata = fs.readFileSync('./questions/ref.json');
  let questionList = JSON.parse(rawdata);
  var randomQuestion = questionList[Math.floor(Math.random()*questionList.length)];
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(responseBuilder.buildResponse(randomQuestion));
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 