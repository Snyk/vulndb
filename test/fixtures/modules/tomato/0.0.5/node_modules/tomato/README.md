tomato Node.js Web框架
===============

1、安装
==============

```bash
npm install tomato
```


2、快速入门
==============

**启动文件：server.js**

```javascript
var tomato = require('tomato');

// master：pm模块的Master实例，用于多进程管理
// 用法参考这里：https://github.com/aleafs/pm
//
// logger：tomatolog模块的Logger实例，用于记录日志
// 用法参考这里：用法参考这里：https://github.com/leizongmin/tomatolog
//
// config：当前应用的配置信息
tomato(function (master, logger, config) {
  // 服务启动后，执行此处
});
```

**HTTP应用文件：app.js**

```javascript
// worker：pm模块的Worker实例，用于多进程管理
// 用法参考这里：https://github.com/aleafs/pm
//
// app：express模块实例，用于处理HTTP服务
// 用法参考这里：https://github.com/visionmedia/express
//
// logger：tomatolog模块的Logger实例，用于记录日志
// 用法参考这里：用法参考这里：https://github.com/leizongmin/tomatolog
//
// config：当前应用的配置信息
module.exports = function (worker, app, logger, config) {
  // 在此处进行初始化操作
  app.get('/', function (req, res, next) {
    worker.emit('test', new Date(), Math.random(), Date.now());
    res.end(new Date().toString());
  });
};
```

**配置文件：config.js**

```javascript
exports.worker = {
  size:   2     // http服务子进程数量
};
exports.http = {
  port:   8080  // http服务监听的端口
}
```

在以上文件放在同一个目录下，运行以下命令即可启动：

```bash
node server.js
```

此时，在浏览器中打开http://127.0.0.1:8080/ 即可看到页面中输出了当前系统时间。


3、配置
==============

默认配置如下：

```
env               运行环境，可选development或者production，默认为development
master
  pidFile         主进程PID文件，默认无
  statusFile      状态日志，默认无
  delay           启动服务间隔，默认2000ms
  heartbeat       服务进程心跳间隔，默认2000ms
  api             后台管理服务，默认不开启
    access_key    授权字符串，数组
    port          监听端口，默认8081
    secure        启用https连接，默认true
    key           证书key
    cert          证书cert
worker
  size            HTTP服务进程数量，默认为CPU个数-1
log               日志服务，默认不开启
  path            保存目录，默认./log
  interval        写入到文件的时间间隔，默认2000ms
  level           日志等级，fatal > error > warn > info > debug，默认为debug
  output          是否在控制台输出，默认为true
http
  port            端口，监听多个端口时可为数组，默认：8080
  views           视图目录，默认为./views
  view suffix     模板文件后最，默认.liquid
  static path     静态文件目录，默认./public
  static maxage   静态文件maxAge，默认31536000000（1年）
  favicon         favicon图标，默认为系统提供
  session store   session存储引擎，可选file、redis或cookie，默认为file
  session config  session配置，根据相应的存储引擎配置
  secret          加密密匙，默认系统指定
  compress        是否开启压缩传输，默认为false
  timeout         请求超时时间，单位为ms，默认为false
  upload limit    上传文件限制，比如5mb, 200kb, 1gb等，默认为false
  auto routing path   载入指定目录的文件并自动注册路由 ，默认为false
```


4、任务计划
=============

任务计划服务可以很方便的在指定时间执行一些任务。

**在当前目录添加任务计划文件：schedule.js**

```javascript
// register：注册一个任务程序，返回一个cron模块的CronJob实例
// 用法参考这里：https://github.com/ncb000gt/node-cron
// 示例：register('cron时间表', callback);
//
// worker：pm模块的Worker实例
module.exports = function (register, worker) {
  var a = register('*/2 * * * *', function () {
    console.log('任务运行了。');
  });
};
```

在启动时，程序会自动检查此文件是否存在，并自动执行。


5、事件处理
==============

事件服务可以在一个服务进程中集中处理一些任务。

**在当前目录添加事件处理文件：event.js**

```javascript
// register：注册一个事件监听程序
// 示例：register('时间名', callback);
//
// worker：pm模块的Worker实例
module.exports = function (register, worker) {
  register('test', function () {
    console.log(arguments);
  });
}
```

**在任一个worker进程中可以通过以下方式来触发事件**

```javascript
worker.emit('事件名', 参数1, 参数2, ...);
```


授权
=================

```
Copyright (c) 2012 Lei Zongmin(雷宗民) <leizongmin@gmail.com>
http://ucdok.com

The MIT License

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE
LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
