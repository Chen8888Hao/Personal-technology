var http = require('http'),
    map = require('through2-map');

var server = http.createServer(function(req, res) {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n');
    }

    console.log(req);

    // 传入body
    req.pipe(map(function(chunk) {
        return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(+process.argv[2]);


// 这里将不限制你使用 stream 处理 request 和 response
// 对象，并且这将更为简单。

// 在 npm 中，有很多不同的模块可以用来在 stream 传输过程中 "转换" stream
// 中的数据。对于本次练习来说，through2-map 这个模块有一个比较简单的 API
// 可以使用。

// through2-map 允许你创建一个 transform
// stream，它仅需要一个函数就能完成「接收一个数据块，处理完后返回这个数据块」
// 的功能 ，它的工作模式类似于 Array#map()，但是是针对 stream 的：

//    var map = require('through2-map')
//    inStream.pipe(map(function (chunk) {
//      return chunk.toString().split('').reverse().join('')
//    })).pipe(outStream)

// 在上面的例子中，从 inStream
// 传进来的数据会被转换成字符串（如果它不是字符串的话），并且字符会反转处理，
// 然后传入
// outStream。所以，我们这里是做了一个字符串反转器！记住！尽管，数据块（chunk
// ）的大小是由上游（up-stream）所决定的，但是你还是可以在这之上对传进来的数
// 据做一点小小的处理的。

// 要安装 through2-map，输入:

//    $ npm install through2-map

// 如果你没有联网，你可以简单的创建一个 node_modules 子目录，然后从
// learnyounode 的安装目录中（路径如下所示）完整地将这个模块复制到
// node_modules 中：

// file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
// all\learnyounode\3.5.5\learnyounode\node_modules\through2-map

// through2-map 的文档已经随着 learnyounode
// 安装到你的系统中了，用浏览器访问如下路径，即可进行查看：

// file://C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
// all\learnyounode\3.5.5\learnyounode\docs\through2-map.html
