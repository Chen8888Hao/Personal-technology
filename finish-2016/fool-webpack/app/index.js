var $ = require('jquery');
var sub = require('./sub');
var mainStyle = require('./main.less');
var jqPlugin = require('./jq-plugin');
var moment = require('moment');

var app = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
document.body.appendChild(app);

$('body').append('<p>Look at me! now is ' + moment().format() + '</p>');
$('p').greenify();
