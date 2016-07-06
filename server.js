/*
* @Author: Vincent Wei
* @Date:   2016-07-04 16:42:13
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-06 10:08:10
*/

'use strict';


var http = require('http'),
    url = require('url');

function start(route, handle){

    // 回调函数
    function onRequest(request, response){

        // 获取pathname
        var pathname = url.parse(request.url).pathname;
        console.log('Request for' + pathname + ' received.');

        // 路由
        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // var content = route(handle, pathname);

        // response.write(content);
        // response.end();

        // response.writeHead(200, {'Content-Type': 'text/plain'});
        // response.write('Hello World');
        // response.end();
        route(handle, pathname, response);
    }

    // 创建服务器，监听8888端口
    http.createServer(onRequest).listen(8888);
    console.log('Server has started');

}

exports.start = start;