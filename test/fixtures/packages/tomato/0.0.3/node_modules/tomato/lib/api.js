/*!
 * tomato api
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var pm = require('pm');
var express = require('express');
var http = require('http');
var https = require('https');
var utils = require('./utils');
var debug = require('debug')('tomato:api');


// 读取配置文件
var config = utils.appConfig();

// 创建日志记录器
var logger = utils.createLogger('api');


// 创建worker
var worker = global.worker = pm.createWorker();
worker.ready();

// 创建express实例
var app = express();

// 初始化express实例
var configureInit = function () {
  app.set('env', config.env);
  app.set('port', config.master.api.port);

  // 日志记录
  app.use(utils.httpLogger(logger, 'api'));

  // 请求解析配置，使用http中的配置
  app.use(express.favicon(config.http.favicon));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser(config.http.secret));

  // Session配置，使用http中的配置
  switch (config.http['session store']) {
    case 'redis':
      app.use(express.session({
        secret: config.http.secret,
        store:  new RedisStore(config.http['session config'])
      }));
      break;
    case 'cookie':
      app.use(express.cookieSession({
        secret: config.http.secret,
        cookie: config.http['session config']
      }));
      break;
    default:
      app.use(express.session({
        secret: config.http.secret,
        cookie: {
          secure: true
        }
      }));
  }

  /**
   * 访问权限控制
   * 客户端设置请求头 Access-Key 或者GET/POST/Cookie参数 access_key
   * 顺序 headers > GET > POST > Cookie
   */
  app.use('/api', function (req, res, next) {
    var access_key = req.headers['access-key'] ||
                     (req.query && req.query.access_key) ||
                     (req.body && req.body.access_key) ||
                     (req.cookies && req.cookies.access_key);
    if (access_key && config.master.api.access_key.indexOf(access_key) !== -1) {
      logger.info({event: 'verify-success', access_key: access_key, url: req.url});
      req.access_key = access_key;
      next();
    } else {
      logger.warn({event: 'verify-fail', access_key: access_key, url: req.url});
      res.json({error: 'Permission denied.', access_key: access_key});
    }
  });

  // API接口
  require('./api/index.js')(utils.appWorker(worker), app, logger, config);

  /**
   * 载入用户初始化程序
   * 文件名：api.js
   * 格式：
   *   module.exports = function (worker, app, logger, config) {
   *     worker对象包含如下方法：
   *       onmessage(callback) 监听进程通讯消息
   *       sendto(to, msg)     发送信息给指定进程
   *       reload(name)        重启指定服务
   *       emit(event, arg1, arg2) 触发事件
   *     app为express实例
   *     logger为日志记录器
   *     config为应用配置
   *
   *     用户在此处进行应用的初始化，包括注册中间件、路由处理程序等
   *   }
   */
  try {
    var initApi = require(utils.appPath('api.js'));
    initApi(utils.appWorker(worker), app, logger, config);
  } catch (err) {
    debug('Cannot find file "api.js".');
  }

  // 路由处理
  app.use(app.router);
  app.use('/public', express.static(config.http['static path'], {maxAge: config.http['static maxage']}));

  // 返回JSON格式的出错信息
  app.use('/api', function (err, req, res, next) {
    res.json({
      error:    err.stack || err.toString()
    });
  });

  // 返回友好出错信息
  app.use(express.errorHandler());

  // 不同运行环境
  if (config.env === 'production') {
    app.enable('view cache');
  } else {
    app.disable('view cache');
  }
};
app.configure(configureInit);

// 创建http服务器
var server;
if (config.master.api.secure) {
  server = https.createServer({
    key:  config.master.api.key,
    cert: config.master.api.cert
  }, app);
} else {
  server = http.createServer(app);
}
server.listen(config.master.api.port);

// 捕捉全局异常
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  logger.fatal({stack: err.stack});
});

// 绑定全局动态logger
utils.bindDynamicLogger();

logger.info({event: 'start'});
