const http = require('http');
const fs = require('fs');

function getFilesizeInBytes(filename) {
  const stats = fs.statSync(filename);
  const fileSizeInBytes = stats.size;
  return fileSizeInBytes;
}

const file = fs.createWriteStream("./index.html");
const request = http.get("http://www.example.edu/", function(response) {
  response.pipe(file);
});


