/*!
 * tomato utils
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var path = require('path');
var fs = require('fs');
var os = require('os');
var tomatolog = require('tomatolog');
var debug = require('debug')('tomato:utils');

// 默认证书
var DEFAULT_HTTPS_KEY = fs.readFileSync(path.resolve(__dirname, 'cert/ca-key.pem'));
var DEFAULT_HTTPS_CERT = fs.readFileSync(path.resolve(__dirname, 'cert/ca-cert.pem'));


var utils = module.exports;

/**
 * 创建日志记录器
 *
 * @param {String} name
 * @param {Object} config 配置，可选
 * @return {Object}
 */
utils.createLogger = function (name, config) {
  config = config || utils.appConfig().log;
  var logger = tomatolog.createLogger(name, config);
  // 注册日志记录器，以便动态调整
  if (!Array.isArray(global.workerLoggers)) global.workerLoggers = [];
  global.workerLoggers.push(logger);
  return logger;
};

/**
 * 监听调整logger的事件
 */
utils.bindDynamicLogger = function () {
  var w = global.master || global.worker || null;
  if (!(w && typeof(w.on) === 'function')) {
    debug('bind dynamic logger fail');
    return;
  }
  w.on('message', function (msg) {
    if (msg.event === 'changeLogger') {
      if (!Array.isArray(global.workerLoggers)) global.workerLoggers = [];
      switch (msg.method) {
        case 'flush':
          global.workerLoggers.forEach(function (logger) {
            logger.flush();
          });
          break;
        case 'setLevel':
          global.workerLoggers.forEach(function (logger) {
            logger.setLevel(msg.args[0]);
          });
          break;
        case 'clearFilter':
          global.workerLoggers.forEach(function (logger) {
            logger.clearFilter();
          });
          break;
        case 'setFilter':
          global.workerLoggers.forEach(function (logger) {
            try {
              var fn = eval('(' + msg.args[0] + ')');
              logger.setFilter(fn);
            } catch (err) {
              logger.error({stack: err.stack});
            }
          });
          break;
        default:
          debug('unknown logger method');
          logger.error({event: 'changeLogger', msg: msg});
      }
    }
  });
};

/**
 * 调整各进程的Logger
 *
 * @param {String} method
 */
utils.changeLogger = function (method) {
  if (!(global.worker && typeof(global.worker.sendto) === 'function')) {
    debug('change logger fail');
  }
  var args = [];
  for (var i = 1; i < arguments.length; i++) {
    args.push(arguments[i]);
  }
  if (method === 'setFilter') {
    if (args[0]) {
      args[0] = args[0].toString();
    }
  }
  var data = {
    event:  'changeLogger',
    method: method,
    args:   args
  };
  ['event', 'http', 'schedule', 'api'].forEach(function (group) {
    global.worker.sendto(group, data);
  });
};

/**
 * 今天日期字符串
 *
 * @param {String} format
 * @return {String}
 * @api public
 */
utils.today = function (format) {
  return utils.dateString(new Date(), format);
};

/**
 * 昨天日期字符串
 *
 * @param {String} format
 * @return {String}
 * @api public
 */
utils.yesterday = function (format) {
  return utils.dateString(new Date(Date.now() - 3600000 * 24), format);
};

/**
 * 获取日期字符串
 *
 * @param {Date} date
 * @param {String} format 如：y/m/d 或 y-m-d
 * @return {String}
 * @api public
 */
utils.dateString = function (date, format) {
  var n2 = function (n) {
    return n < 10 ? ('0' + n) : n;
  };
  format = format || 'y-m-d';
  var m = n2(date.getMonth() + 1);
  var d = n2(date.getDate());
  var y = date.getFullYear();
  return format.replace(/y/img, y).replace(/m/img, m).replace(/d/img, d);
};

/**
 * 取应用目录
 *
 * @param {String} p
 * @return {String}
 * @api public
 */
utils.appPath = function (p) {
  return path.resolve.apply(null, arguments);
};

/**
 * 生成日志字符串
 *
 * @param {String} type
 * @param {String} source
 * @param {Object} data
 * @return {String}
 * @api public
 */
utils.toLogString = function (type, source, data) {
  data = JSON.stringify(data);
  return Date.now() + '\t' + type + '\t' + source + '\t' + data;
};

/**
 * http请求日志记录
 *
 * @param {Object} logger
 * @param {String} source 来源，默认http
 * @return {Function}
 * @api public
 */
utils.httpLogger = function (logger, source) {
  source = source || 'http';

  // 创建日志记录器
  var logger = utils.createLogger(source);

  /**
   * 取客户端IP地址
   *
   * @param {Object} req
   * @return {String}
   * @api private
   */
  var getRemote = function (req) {
    if (req.headers['x-real-ip']) return req.headers['x-real-ip'];
    return req.socket && (req.socket.remoteAddress || (req.socket.socket && req.socket.socket.remoteAddress));
  };

  return function (req, res, next) {
    req._startTime = new Date();
    if (logger) {
      logger.info({
        event:    'request',
        remote:   getRemote(req),
        method:   req.method,
        host:     req.headers['host'],
        url:      req.url,
        referrer: req.headers['referer'] || req.headers['referrer'],
        version:  req.httpVersionMajor + '.' + req.httpVersionMinor,
        agent:    req.headers['user-agent']
      });
    }
    var end = res.end;
    res.end = function (chunk, encoding) {
      res.end = end;
      res.end(chunk, encoding);
      if (logger) {
        logger.info({
          event:    'response',
          method:   req.method,
          host:     req.headers['host'],
          url:      req.url,
          status:   res.statusCode,
          length:   parseInt(res.getHeader('Content-Length'), 10),
          spent:    new Date - req._startTime
        });
      }
    };
    next();
  };
};

/**
 * 封装worker对象
 *
 * @param {Object} worker
 * @return {Object}
 * @api public
 */
utils.appWorker = function (worker) {
  var w = {};

  /**
   * 监听消息
   *
   * @param {Function} cb
   * @api public
   */
  w.onmessage = function (cb) {
    worker.on('message', cb);
  };

  /**
   * 发送消息
   *
   * @param {String} who
   * @param {Object} data
   * @api public
   */
  w.sendto = function (who, data) {
    worker.broadcast(who, data);
  };

  /**
   * 重载进程
   *
   * @param {String} name
   * @api public
   */
  w.reload = function (name) {
    worker.reload(name);
  };

  /**
   * 触发事件
   *
   * @param {String} event
   * @param {Object} arg
   * @api public
   */
  w.emit = function (event, arg) {
    var args = [];
    for (var i = 1; i < arguments.length; i++) {
      args.push(arguments[i]);
    }
    worker.broadcast('event', {
      event: event,
      args:  args
    });
  };

  return w;
};

/**
 * 载入应用配置文件
 *
 * 格式：
 *   env          运行环境，可选development或者production，默认为development
 *   master
 *     pidFile    主进程PID文件，默认无
 *     statusFile 状态日志，默认无
 *     delay      启动服务间隔，默认2000ms
 *     heartbeat  服务进程心跳间隔，默认2000ms
 *     api        后台管理服务，默认不开启
 *       access_key   授权字符串，数组
 *       port         监听端口，默认8081
 *       secure       启用https连接，默认true
 *       key          证书key
 *       cert         证书cert
 *   worker
 *     size       HTTP服务进程数量，默认为CPU个数-1
 *   log          日志服务，默认不开启
 *     path       保存目录，默认./log
 *     interval   写入到文件的时间间隔，默认2000ms
 *     level      日志等级，fatal > error > warn > info > debug，默认为debug
 *     output     是否在控制台输出，默认为true
 *   http
 *     port           端口，监听多个端口时可为数组，默认：8080
 *     views          视图目录，默认为./views
 *     view suffix    模板文件后最，默认.liquid
 *     static path    静态文件目录，默认./public
 *     static maxage  静态文件maxAge，默认31536000000（1年）
 *     favicon        favicon图标，默认为系统提供
 *     session store  session存储引擎，可选file、redis或cookie，默认为file
 *     session config session配置，根据相应的存储引擎配置
 *     secret         加密密匙，默认系统指定
 *
 * @return {Object}
 * @api public
 */
utils.appConfig = function () {
  try {
    var config = require(utils.appPath('config'));
  } catch (err) {
    console.error(err.stack);
    config = {};
  }

  config.env = config.env || 'development';
  config.env = config.env.toLowerCase();

  config.master = config.master || {};
  config.master.delay = config.master.delay || 2000;
  config.master.heartbeat = config.master.heartbeat || 2000;
  config.master.pidFile = config.master.pidFile || undefined;
  config.master.statusFile = config.master.statusFile || undefined;

  config.master.api = config.master.api || {enable: false};
  config.master.api.access_key = config.master.api.access_key || [];
  config.master.api.secure = !!config.master.api.secure;
  config.master.api.key = config.master.api.key || DEFAULT_HTTPS_KEY;
  config.master.api.cert = config.master.api.cert || DEFAULT_HTTPS_CERT;
  config.master.api.port = config.master.api.port || 8081;

  config.worker = config.worker || {};
  config.worker.size = config.worker.size || os.cpus().length - 1;

  config.log = config.log || {enable: false};
  config.log.path = config.log.path || './log';
  config.log.interval = config.log.interval || 2000;
  config.log.level = config.log.level || 'debug';
  config.log.output = typeof(config.log.output) === 'undefined' ? true : config.log.output;

  config.http = config.http || {};
  config.http.port = config.http.port || 8080;
  config.http.views = path.resolve(config.http.views || './views');
  config.http['view suffix'] = config.http['view suffix'] || '.liquid';
  config.http['static path'] = path.resolve(config.http['static path'] || './public');
  config.http['static maxage'] = config.http['static maxage'] || 31536000000;
  config.http.favicon = config.http.favicon || undefined;
  config.http['session store'] = config.http['session store'] || 'file';
  config.http['session config'] = config.http['session config'] || {};
  config.http.secret = config.http.secret || 'default secret string';

  return config;
};

/**
 * 查询日志
 *
 * @param {Object} query
 *   - {String} date 日期
 *   - {String} source 来源，支持|
 *   - {String} type 类型，支持|
 *   - {String} time 时间，支持>=、<=、>、<、=、,、|
 *   - {Integer} start 文件开始位置，复数表示从文件末尾开始
 * @param {Function} callback
 *   - {Object} err
 *   - {Array} lines
 *   - {Object} query
 */
utils.queryLog = function (query, callback) {
  query.date = query.date || utils.today();
  query.source = query.source || '*';
  query.type = query.type || '*';
  query.time = query.time || '*';
  query.start = query.start || 0;

  var filename = utils.appPath(config.log.path, query.date + '.log');
  fs.stat(filename, function (err, stats) {
    if (err) return callback(err);
    // TODO: 日志查询
  });
};




// 读取配置文件
var config = utils.appConfig();

// 创建日志记录器
var logger = utils.createLogger('utils');