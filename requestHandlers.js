/*
* @Author: Vincent Wei
* @Date:   2016-07-04 21:41:49
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-05 21:18:58
*/

'use strict';

function start(){
    console.log('Request handler "start" was called.');

    function sleep(milliSeconds){
        var startTime = new Date().getTime();
        while (new Date().getTime() < startTime + milliSeconds);
    }

    sleep(10000);
    return 'Hello Start'
}

function upload(){
    console.log('Request handler "upload" was called.');
    return 'Hello Upload';
}

exports.start = start;
exports.upload = upload;

