var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var mine = require('./src/js/mine').types;

// 创建服务器
http.createServer(function(request, response) {
    // 解析请求，包括文件名、文件后缀
    var pathname = url.parse(request.url).pathname;
    var ext = path.extname(pathname);
    ext = ext ? ext.slice(1) : 'unknown';

    // 输出请求的文件名
    console.log('Request for ' + pathname + ' received.');

    // 从文件系统中读取请求的文件内容
    fs.readFile(pathname.substr(1), function(err, data) {
        if (err) {
            console.log(err);
            // HTTP 状态码: 404 : NOT FOUND
            // Content Type: text/plain
            response.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP 状态码: 200 : OK
            // Content Type: text/plain
            var contentType = mine[ext] || 'text/plain';
            response.writeHead(200, { 'Content-Type': contentType });

            // 响应文件内容
            response.write(data);
        }
        // 发送响应数据
        response.end();
    });
}).listen(88);

// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:88/src/html/javascript_timeline.html');
