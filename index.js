const fs = require('fs');
const http = require('http');

// Create the index.html file
fs.writeFile('index.html', '<h1> Hello World </h1><p> This is Navya Charitha... </p>', (err) => {
  if (err) throw err;
  console.log('File created successfully.');
});

// Serve the index.html file
const server = http.createServer((req, res) => {
  fs.readFile('index.html', (err, data) => {
    if (err) throw err;
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

server.listen(5002, () => {
  console.log('Server running on port 5002');
});

