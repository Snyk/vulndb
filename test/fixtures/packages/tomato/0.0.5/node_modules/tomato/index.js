/*!
 * tomato
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var pm = require('pm');
var fs = require('fs');
var path = require('path');
var debug = require('debug')('tomato:master');
var utils = require('./lib/utils');



/**
 * 启动服务
 *
 * @param {Function} callback 格式：function (master, logger, config) {}
 * @api public
 */
var exports = module.exports = function (callback) {

  // 读取配置文件
  var config = utils.appConfig();

  var master = global.master = pm.createMaster({
    pidfile:    config.master.pidFile,
    statusfile: config.master.statusFile
  });

  // 已注册的服务数量
  var REGISTER_GROUP_NUM = 0;

  // 启动服务之间的延时
  var START_DELAY = 0; //config.master.delay;

  // 进程心跳时间
  var HEARTBEAT = config.master.heartbeat;

  /**
   * 注册服务进程
   *
   * Examples:
   *    register('log', 'lib/log.js', {children: 5});
   *
   * @param {String} name
   * @param {String} main
   * @param {Object} options
   * @api private
   */
  var register = function (name, main, options) {
    options = options || {};
    options.heartbeat_interval = HEARTBEAT;
    options.children = options.children || 1;
    main = path.resolve(__dirname, main);
    REGISTER_GROUP_NUM++;
    var delay = REGISTER_GROUP_NUM * START_DELAY + START_DELAY;
    debug('Start ' + name + ' after ' + delay + 'ms...');
    setTimeout(function () {
      logger.info({event: 'register', name: name, main: main, options: options});
      master.register(name, main, options);
    }, delay);
  };

   // 创建日志记录器
   var logger = utils.createLogger('master');

  // 注册事件服务
  if (fs.existsSync(utils.appPath('event.js'))) {
    register('event', 'lib/event.js');
  }

  // 注册任务计划服务
  if (fs.existsSync(utils.appPath('schedule.js'))) {
    register('schedule', 'lib/schedule.js');
  }

  // 注册系统管理API接口
  if (config.master.api && config.master.api.enable !== false) {
    register('api', 'lib/api.js');
  }

  // 注册Web服务
  if (!fs.existsSync(utils.appPath('app.js'))) {
    throw new Error('Could not find file "' + utils.appPath('app.js') + '".');
  } else {
    register('http', 'lib/http.js', {
      children: config.worker.size,
      listen:   Array.isArray(config.http.port) ? config.http.port : [config.http.port]
    });
  }

  // 放弃重启
  master.on('giveup', function (name, fatals) {
    debug('Master giveup to restart %s process after %d times.', name, fatals);
    logger.warn({event: 'giveup', name: name, fatals: fatals});
  });

  // 捕捉全局异常
  process.on('uncaughtException', function (err) {
    console.error(err.stack);
    logger.fatal({stack: err.stack});
  });

  setTimeout(function () {
    
    master.dispatch();
    logger.info({event: 'start'});
    // 返回
    if (typeof(callback) === 'function') callback(master, logger, config);

  }, (REGISTER_GROUP_NUM + 2) * START_DELAY);
};


// 版本号
exports.version = require('./package.json').version;
