const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(404);
                res.end('Dosya bulunamadı');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        });
    } else {
        res.writeHead(404);
        res.end('Sayfa bulunamadı');
    }
});

server.listen(3000, () => {
    console.log('Sunucu http://localhost:3000 adresinde çalışıyor');
});