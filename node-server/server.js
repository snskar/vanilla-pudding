const http = require('http');

const PORT = 3000;

function sendJson (res, statusCode, data){

    res.writeHead(statusCode, {'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
}


const server = http.createServer((req, res) => {

    const {method, url} = req;

    //Router

    if(method === 'GET' && url === '/') {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.end(`
                <h1> My Node Server </h1>
                <ul>
                    <li><a href="/api/health">Health check</a></li>
                    <li><a href ="/api/time">Current time</a></li>
                </ul>
            `);
        return;
    }

    if(method === 'GET' && url === '/api/health'){
        sendJson(res, 200, {status: 'ok'});
        return;
    }

    if(method === 'GET' && url === '/api/time'){
        sendJson(res,200, {time: new Date().toISOString() });
        return;
    }

    sendJson(res, 404, {error: 'Route not found'});
})

server.listen(PORT, ()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
});