var http = require('http'),
    fs = require('fs');

var server = http.createServer(function(req, res) {
    // var file = fs.createReadStream(res);
    // file.pipe(process.argv[3]);

    res.writeHead(200, {
        'content-type': 'text/plain'
    });

    // 读入我们想要的文件流
    var rs = fs.createReadStream(process.argv[3]);
    // 派送给res
    rs.pipe(res);
});

server.listen(process.argv[2]);

// 由于我们需要创建的是一个 HTTP 服务而不是普通的 TCP 服务，因此，你应该使用
// http 这个 Node 核心模块。它和 net 模块类似，http 模块拥有一个叫做
// http.createServer() 的方法，所不同的是它所创建的服务器是用 HTTP
// 协议进行通信的。

// http.createServer()
// 接收一个回调函数作为参数，回调函数会在你的服务器每一次进行连接的时候执行，
// 这个回调函数有以下的特征：

//    function callback (request, response) { /* ... */ }

// 在这里，这两个参数是代表一个 HTTP 请求以及相应的响应的两个对象。request
// 用来从请求中获取一些的属性，例如请求头和查询字符（query-string)，而
// response 会发送数据给客户端，包括响应头部和响应主体。

// request 和 response 也都是 Node
// stream！这意味着，如果需要的话，你可以使用流式处理（streaming）所抽象的那
// 些方法来实现发送和接收数据。

// http.createServer() 会返回一个 HTTP 服务器的实例。你需要调用
// server.listen(portNumber) 方法去监听一个特定的端口。

// 一个典型的 Node HTTP 服务器将会是这个样子：

//    var http = require('http')
//    var server = http.createServer(function (req, res) {
//      // 处理请求的逻辑...
//    })
//    server.listen(8000)

// http 模块的文档你可以使用浏览器访问如下路径来查看：
// file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
// all\learnyounode\3.5.5\learnyounode\node_apidoc\http.html

// fs 这个核心模块也含有一些用来处理文件的流式（stream） API。你可以使用
// fs.createReadStream() 方法来为命令行参数指定的文件创建一个
// stream。这个方法会返回一个 stream 对象，该对象可以使用类似 src.pipe(dst)
// 的语法把数据从 src流传输(pipe) 到
// dst流中。通过这种形式，你可以轻松地把一个文件系统的 stream 和一个 HTTP
// 响应的 stream 连接起来。
