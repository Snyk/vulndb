/*!
 * tomato event
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var pm = require('pm');
var fs = require('fs');
var path = require('path');
var redis = require('redis');
var utils = require('./utils');
var debug = require('debug')('tomato:event');


// 读取配置文件
var config = utils.appConfig();

// 创建日志记录器
var logger = utils.createLogger('event');


// 创建worker
var worker = global.worker = pm.createWorker();
worker.ready();


// 处理消息的函数列表
var EVENT_HANDLES = {};

/**
 * 注册事件监听
 *
 * @param {string} name
 * @param {Function} handle
 * @api private
 */
var register = function (name, handle) {
  logger.info({event: 'register', name: name});
  if (!Array.isArray(EVENT_HANDLES[name])) EVENT_HANDLES[name] = [];
  EVENT_HANDLES[name].push(handle);
};

/**
 * 载入用户的队列消息处理程序
 * 文件名：event.js
 * 格式：
 *   module.exports = function (register, worker) {
 *     register为注册消息处理函数：register('type', handle);
 *       handle格式： function (timestamp, msg) {}
 *     worker为当前进程的worker对象
 *
 *     在此处注册计划任务
 *   }
 */
var initEvent = require(utils.appPath('event.js'));
initEvent(register, utils.appWorker(worker));

/**
 * 触发事件
 *
 * @param {Object} msg
 *   - {String} event 事件名称
 *   - {Array} args 参数列表
 * @api private
 */
var emitEvent = function (msg) {
  if (typeof(msg) !== 'object') msg = {};
  if (!Array.isArray(msg.args)) msg.args = [];
  if (!Array.isArray(EVENT_HANDLES[msg.event])) return;
  logger.info({event: 'emit', name: msg.event});
  EVENT_HANDLES[msg.event].forEach(function (fn) {
    try {
      fn.apply(null, msg.args);
    } catch (err) {
      logger.error({event: 'emit', name: msg.event});
    }
  });
};

// 监听事件消息
worker.on('message', emitEvent);


// 捕捉全局异常
process.on('uncaughtException', function (err) {
  logger.fatal({stack: err.stack});
});

// 绑定全局动态logger
utils.bindDynamicLogger();

logger.info({event: 'start'});
