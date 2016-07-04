
var http = require('http'),
    url = require('url');

function start(){

    // 回调函数
    function onRequest(request, response){
        // 获取pathname
        var pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + 'received.');
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.write('Hello World');
        response.end();
    }

    // 创建服务器，监听8888端口
    http.createServer(onRequest).listen(8888);

    console.log('Server has started');

}

exports.start = start;