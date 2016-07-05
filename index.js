/*
* @Author: Vincent Wei
* @Date:   2016-07-04 16:06:46
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-04 22:18:03
*/

'use strict';

var server = require('./server');
var router = require('./route');
var requestHandlers = require('./requestHandlers');

var handle = {};
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;


server.start(router.route, handle);