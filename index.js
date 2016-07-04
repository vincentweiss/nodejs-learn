/*
* @Author: Vincent Wei
* @Date:   2016-07-04 16:06:46
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-04 16:49:12
*/

'use strict';

var server = require('./server');
var router = require('./route')

server.start(router.route);