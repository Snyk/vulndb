/*!
 * tomato http
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var pm = require('pm');
var express = require('express');
var http = require('http');
var RedisStore = require('connect-redis')(express);
var utils = require('./utils');
var debug = require('debug')('tomato:http');


// 读取配置文件
var config = utils.appConfig();

// 创建日志记录器
var logger = utils.createLogger('http', config.log);


// 创建worker
var worker = global.worker = pm.createWorker();

// 创建express实例
var app = express();

// 初始化express实例
var configureInit = function () {
  app.set('env', config.env);
  app.set('port', Array.isArray(config.http.port) ? config.http.port[0] : config.http.port);

  // 模板引擎配置
  var liquidRender = app.liquidRender = require('express-liquid')();
  app.set('views', config.http.views);
  var viewSuffix = config.http['view suffix'];
  if (viewSuffix[0] === '.') viewSuffix = viewSuffix.substr(1);
  app.set('view engine', viewSuffix);
  app.engine(viewSuffix, liquidRender);

  // 版本信息
  var version = require('../').version;
  app.use(function (req, res, next) {
    res.header('X-Powered-By', 'Express (Tomato/' + version + ')');
    next();
  });

  // 日志记录
  app.use(utils.httpLogger(logger, 'http'));

  // 配置favicon
  app.use(express.favicon(config.http.favicon));

  // 请求超时
  if (config.http.timeout > 0) {
    app.use(express.timeout(config.http.timeout));
  }

  // 上传限制
  if (config.http['upload limit']) {
    app.use(express.limit(config.http['upload limit']));
  }

  // POST解析
  app.use(express.urlencoded());
  app.use(express.bodyParser());

  app.use(express.methodOverride());

  // Cookie解析
  app.use(express.cookieParser(config.http.secret));

  // 压缩传输
  if (config.http.compress) {
    app.use(express.compress());
  }

  // Session配置
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
   * 载入用户初始化程序
   * 文件名：app.js
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
  var initApp = require(utils.appPath('app.js'));
  initApp(utils.appWorker(worker), app, logger, config);

  // 自动注册路由
  if (config.http['auto routing path']) {
    var autoRoutingPath = utils.appPath(config.http['auto routing path']);
    utils.autoRouting(app, autoRoutingPath);
  }

  // 路由处理
  app.use(app.router);
  app.use('/public', express.static(config.http['static path'], {maxAge: config.http['static maxage']}));

  // 不同运行环境
  if (config.env === 'production') {

    // 生产环境开启模板缓存
    app.enable('view cache');
    // TODO: 对用户不显示出错信息
    app.use(function (err, req, res, next) {
      logger.error({stack: err.stack, url: req.url});
      next('Server Error');
    });
    
  } else {

    // 调试环境关闭模板缓存
    app.disable('view cache');
    app.use(express.errorHandler());

  }
};
app.configure(configureInit);

// 创建http服务器
var server = http.createServer(app);
worker.ready(function (socket) {
  debug('new connection: ' + socket.remoteAddress);
  server.emit('connection', socket);
});

// 捕捉全局异常
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  logger.fatal({stack: err.stack});
});

// 绑定全局动态logger
utils.bindDynamicLogger();

logger.info({event: 'start'});
