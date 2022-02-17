const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
  console.log(req.url);
  if (req.url == '/')
    req.url = './index.html';
  else
    req.url = '.' + req.url;
  fs.readFile(req.url, 'utf-8', (err, data) => {
    if (err) throw ('Error');
    res.end(data);
    // console.log('sent!');
  })
})

server.listen(3000, '127.0.0.1', () => {
  console.log('Listening at port 3000...');
});