const fs = require('fs');
const express = require('express');
const app = express();
const PORT = 8080;

app.get('/', function(req, res) {
  fs.readFile(__dirname + '/html/index.html', 'utf8', function(err, content) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });

      res.write('Failed to fetch file');

      return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(content);

    return res.end();
  })
})

app.get('/about', function(req, res) {
  fs.readFile(__dirname + '/html/about.html', 'utf8', function(err, content) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });

      res.write('Failed to fetch file');

      return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(content);

    return res.end();
  })
})

app.get('/contact-me', function(req, res) {
  fs.readFile(__dirname + '/html/contact-me.html', 'utf8', function(err, content) {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });

      res.write('Failed to fetch file');

      return res.end();
    }

    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.write(content);

    return res.end();
  })
})

app.use(function(req, res, next) {
  fs.readFile(__dirname + '/html/404.html', 'utf8', function(err, content) {
    if (err) {
      res.write('Failed to fetch file');

      return res.end();
    }
    res.writeHead(404, { 'Content-Type': 'text/html' });

    res.write(content);

    return res.end();
  });
})

app.listen(PORT);
