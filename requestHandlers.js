/*
* @Author: Vincent Wei
* @Date:   2016-07-04 21:41:49
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-06 17:35:48
*/

'use strict';

// var exec = require('child_process').exec;
var querystring = require('querystring'),
    fs = require('fs');

function start(response, postData){
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

    //阻塞
    // exec('find /',
    //     {timeout: 10000, maxBuffer:20000*1024},
    //     function(error, stdout, stderr){
    //         response.writeHead(200, {'Content-Type': 'text/plain'});
    // });

    var body = '<html lang="en">'+
                '<head>'+
                '<meta http-equiv="Content-Type" content="text/html" charset="utf-8" />'+
                '</head>'+
                '<body>'+
                '<form action="/upload" enctype="multipart/form-data" method="post">'+
                '<input type="file" name="upload" />'+
                '<input type="submit" value="Submit text" />'+
                '</form>'+
                '</body>'+
                '</html>'

    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(body);
    response.end();
}

function upload(response, postData){
    console.log('Request handler "upload" was called.');
    // return 'Hello Upload';
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write("You've sent" + postData);
    response.end();
}

function show(response, postData){
    console.log('Request handler "show" was called.');
    fs.readFile('tmp/test.png', 'binary', function(error, file){
        if (error) {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.write(error + '\n');
            response.end();
        } else {
            response.writeHead(200, {'Content-Type': 'image/png'});
            response.write(file, 'binary');
            response.end();
        }
    })
}

exports.start = start;
exports.upload = upload;
exports.show = show;

