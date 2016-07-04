var http = require('http')

function start(){
    // 回调函数
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('Request received');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    http.createServer(onRequest).listen(8888);
    console.log('Server has started');

}

exports.start = start;