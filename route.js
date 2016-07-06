/*
* @Author: Vincent Wei
* @Date:   2016-07-04 16:38:20
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-06 17:43:05
*/

'use strict';

function route(handle, pathname, response, postData){
    console.log('About to route a request for' + pathname);
    if (typeof handle[pathname] === 'function'){
        handle[pathname](response, postData);
    }else{
        console.log('No request handler found for' + pathname);
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;