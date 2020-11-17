const http = require('http');
const fs = require('fs');


const file = fs.createWriteStream("./index.html");
const request = http.get("http://www.example.edu/", function(response) {
  response.pipe(file);
});


