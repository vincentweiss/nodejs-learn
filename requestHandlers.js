/*
* @Author: Vincent Wei
* @Date:   2016-07-04 21:41:49
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-06 10:34:24
*/

'use strict';

var exec = require('child_process').exec;

function start(response){
    console.log('Request handler "start" was called.');

    // 阻塞
    // function sleep(milliSeconds){
    //     var startTime = new Date().getTime();
    //     while (new Date().getTime() < startTime + milliSeconds);
    // }

    // sleep(10000);
    // return 'Hello Start'

    // 错误的非阻塞
    // var content = 'empty';

    // exec('ls -lah', function(error, stdout, stderr){
    //     content = stdout;
    // })
    // return content;

    //start(response)
    // exec('ls -lah', function(error, stdout, stderr){
    //     response.writeHead(200, {'Content-Type': 'text/plain'});
    //     response.write(stdout);
    //     response.end();
    // })

    exec('find /',
        {timeout: 10000, maxBuffer:20000*1024},
        function(error, stdout, stderr){
            response.writeHead(200, {'Content-Type': 'text/plain'});
        })
}

function upload(response){
    console.log('Request handler "upload" was called.');
    // return 'Hello Upload';
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write('Hello Upload');
    response.end();
}

exports.start = start;
exports.upload = upload;

