const http = require('http');
const url = require('url');

const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
    const path = url.parse(req.url).pathname;
    const query = url.parse(req.url,true).query;
    if(path === '/add'){
        res.write(`${parseInt(query.no1)} + ${parseInt(query.no2)}\n`);
        const sum = parseInt(query.no1) + parseInt(query.no2);
        res.end(`Sum = ${sum}`);
    }
});

server.listen(port, function(err){
    if(err)console.log(err);
    console.log(`Server started at http://localhost:${port}`);
});

