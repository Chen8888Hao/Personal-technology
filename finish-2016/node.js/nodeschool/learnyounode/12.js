var http = require('http'),
    url = require('url');

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    }
}

function unixtime(time) {
    //另外， Date # getTime() 放个应该也会很有用。
    return {
        unixtime: time.getTime()
    }
}

var server = http.createServer(function(req, res) {
    // console.log(url.parse(req.url, true));

    var parseUrl = url.parse(req.url, true),
        time = new Date(parseUrl.query.iso);
    // JavaScript 的 Date 可以将日期以 ISO 的格式展现出来， 如： new Date().toISOString()。 并且， 如果你把一个字符串传给 Date的构造函数， 它也可以帮你将字符串处理成日期类型。

    var result;

    if (/^\/api\/parsetime/.test(req.url)) {
        result = parsetime(time);
    } else if (/^\/api\/unixtime/.test(req.url)) {
        result = unixtime(time);
    }

    if (result) {
        res.writeHead(200, {
            'Content-Type': 'application/json'
        });
        res.end(JSON.stringify(result));
    } else {
        res.writeHead(400);
        res.end();
    }
});

server.listen(process.argv[2]);


// 编写一个 HTTP 服务器，每当接收到一个路径为 '/api/parsetime' 的 GET
//  请求的时候，响应一些 JSON 数据。我们期望请求会包含一个查询参数（query
//  string），key 是 "iso"，值是 ISO 格式的时间。

//  如:

//  /api/parsetime?iso=2013-08-10T12:10:15.474Z

//  所响应的 JSON 应该只包含三个属性：'hour'，'minute' 和 'second'。例如：

//     {
//       "hour": 14,
//       "minute": 23,
//       "second": 15
//     }

//  然后增再加一个接口，路径为
//  '/api/unixtime'，它可以接收相同的查询参数（query
//  string），但是它的返回会包含一个属性：'unixtime'，相应值是一个 UNIX
//  时间戳。例如:

//     { "unixtime": 1376136615474 }

//  你的服务器需要监听第一个命令行参数所指定的端口。


// HTTP 服务器的 request 对象含有一个 url
// 属性， 你可以通过它来决定具体需要走哪一条 "路由"。

// 你可以使用 Node 的核心模块 'url'
// 来处理 URL 和 查询参数（ query string）。
// url.parse(request.url, true) 方法会处理
// request.url， 它返回的对象中包含了一些很有帮助的属性， 方便方便你处理
// querystring。

// 举个例子， 你可以在命令行窗口输入以下命令试试：

// $ node - pe "require('url').parse('/test?q=1', true)"

// 关于 url 模块的文档， 你可以使用浏览器访问如下路径来访问：
// file: //C:\Users\cody\AppData\Roaming\npm\node_modules.learnyounode_npminst
//     all\ learnyounode\ 3.5 .5\ learnyounode\ node_apidoc\ url.html

// 你的响应应该是一个 JSON 字符串的形式。 请查看 JSON.stringify()
// 来获取更多信息。

// 你也应当争做 Web 世界的好公民， 正确地为响应设置 Content - Type 属性：

// res.writeHead(200, {
//     'Content-Type': 'application/json'
// })

// JavaScript 的 Date 可以将日期以 ISO 的格式展现出来， 如： new
// Date().toISOString()。 并且， 如果你把一个字符串传给
// Date的构造函数， 它也可以帮你将字符串处理成日期类型。 另外， Date # getTime()
// 放个应该也会很有用。
