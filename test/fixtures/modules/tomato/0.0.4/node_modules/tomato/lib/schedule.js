/*!
 * tomato schedule
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var pm = require('pm');
var fs = require('fs');
var path = require('path');
var cronJob = require('cron').CronJob;
var utils = require('./utils');
var debug = require('debug')('tomato:schedule');


// 读取配置文件
var config = utils.appConfig();

// 创建日志记录器
var logger = utils.createLogger('schedule', config.log);


// 创建worker
var worker = global.worker = pm.createWorker();
worker.ready();


/**
 * 注册计划任务
 *
 * Exapples:
 *
 *   var job = register('test1', '1-59 * * * *', function () {
 *     // 任务启动执行代码
 *   }, 'America/Los_Angeles');
 *
 *   job.stop();  // 停止任务
 *   job.start(); // 重新开始任务
 *
 *   语法参考这里：http://crontab.org/
 *
 * @param {string} name
 * @param {String} rule
 * @param {Function} fn
 * @param {String} timeZone
 * @return {object}
 * @api private
 */
var register = function (name, rule, fn, timeZone) {
  if (arguments.length < 3) {
    fn = rule;
    rule = name;
    name = 'Task_' + Date.now() + '' + parseInt(Math.random() * 1000);
  }
  logger.info({event: 'register', name: name, rule: rule});
  var job = new cronJob(rule, function () {
    logger.info({event: 'start-job', name: name});
    try {
      fn();
    } catch (err) {
      logger.error({stack: err.stack, event: 'job-error', name: name});
    }
  }, function () {
    logger.info({event: 'stop-job', name: name});
  }, true, timeZone);
  return job;
};

/**
 * 载入用户的计划任务
 * 文件名：schedule.js
 * 格式：
 *   module.exports = function (register, worker) {
 *     register为注册计划的函数：register('0 * * * *', handle);
 *     worker为当前进程的worker对象
 *
 *     在此处注册计划任务
 *   }
 */
var initSchedule = require(utils.appPath('schedule.js'));
initSchedule(register, utils.appWorker(worker));


// 捕捉全局异常
process.on('uncaughtException', function (err) {
  console.error(err.stack);
  logger.fatal({stack: err.stack});
});

// 绑定全局动态logger
utils.bindDynamicLogger();

logger.info({event: 'start'});
