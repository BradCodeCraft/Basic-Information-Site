const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
  const q = url.parse(req.url, true);
  const fileName = q.pathname.substring(1).length == 0 ? 'index.html' : q.pathname.substring(1) + '.html';

  fs.readFile(__dirname + '/html/' + fileName, (err, data) => {
    if (err) {
      fs.readFile(__dirname + '/html/404.html', (err, data) => {
        res.writeHead(404, { 'Content-Type': 'text/html' });

        res.write(data);

        return res.end();
      });
    } else {

      res.writeHead(200, { 'Content-Type': 'text/html' });

      res.write(data);

      return res.end();
    }
  })


}).listen(8080);
