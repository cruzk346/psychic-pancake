const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/' && req.method === 'GET') {
    res.end('Hello, Galvanize!\nWhat a splendid pie, pizza-pizza pie');
  } else {
    res.statusCode = 404;
    res.end();
  }
});
server.listen(3000, 'localhost', () => console.log('Server is running on http://localhost:3000'));
