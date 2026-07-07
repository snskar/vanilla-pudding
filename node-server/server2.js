const http = require('http');

const PORT = 3000;


let sendJson = (res, statusCode, data) => {
    res.writeHead(statusCode, {'Content-type': 'application/json'});
    res.end(JSON.stringify(data));
};

let server = http.createServer((req, res) => {

    let {method, url} = req;

    // Router

    if(method === 'GET' && url === '/') {

        res.writeHead(200, {'Content-type': 'text/html'});

        res.end(
            `
                <h1> Sample Node Server </h1>
                <ul>
                    <li> <a href='/api/health'>API Health Check</a></li>
                    <li> <a href = '/api/time'> API date </li>
                </ul> 
            `
        );
        return;
    }

    if(method === 'GET' && url === '/api/health'){
        sendJson(res, 200, {status: 'Ok'});
        return;
    }

    if(method === 'GET' && url === '/api/time'){

        sendJson(res, 200, {date: new Date().toISOString()});
        return;
    }

    sendJson(res, 404, {error: 'Route not found'});
    return;
});


server.listen(PORT, () => {
    console.log(`Server listening on PORT :: ${PORT}`);
});