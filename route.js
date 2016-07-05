/*
* @Author: Vincent Wei
* @Date:   2016-07-04 16:38:20
* @Last Modified by:   Vincent Wei
* @Last Modified time: 2016-07-05 21:04:40
*/

'use strict';

function route(handle, pathname){
    console.log('About to route a request for' + pathname);
    if (typeof handle[pathname] === 'function'){
        return handle[pathname]();
    }else{
        console.log('No request handler found for' + pathname);
        return '404 Not found';
    }
}

exports.route = route;