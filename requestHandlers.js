/*
* @Author: Vincent Wei
* @Date:   2016-07-04 21:41:49
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-04 21:57:21
*/

'use strict';

function start(){
    console.log('Request handler "start" was called.')
}

function upload(){
    console.log('Request handler "upload" was called')
}

exports.start = start;
exports.upload = upload;

