/*!
 * tomato api router
 *
 * @author 老雷<leizongmin@gmail.com>
 */

var child_process = require('child_process');
var utils = require('../utils');


module.exports = function (worker, app, logger, config) {

  /**
   * 系统时间
   */
  app.all('/api/time', function (req, res, next) {
    res.json({
      time:       new Date(),
      timestamp:  Date.now(),
      date:       utils.today()
    });
  });

  /**
   * 重启服务
   *
   * 参数： name
   */
  app.post('/api/reload', function (req, res, next) {
    var name = req.body.name;
    if (!name) {
      next('Miss parameter "name".');
    } else {
      worker.reload(name);
      res.json({
        name:  name
      });
    }
  });

  /**
   * 触发事件
   *
   * 参数： event, args
   */
  app.post('/api/emit', function (req, res, next) {
    var event = req.body.event;
    var args = req.body.args;
    if (!event) {
      next('Miss parameter "event".');
    } else {
      var _args = [event];
      if (Array.isArray(args)) {
        _args = _args.concat(args);
      }
      worker.emit.apply(worker, _args);
      res.json({
        event:  event,
        args:   args
      });
    }
  });

  /**
   * 执行系统命令
   *
   * 参数： cmd, path
   * 返回： stdout, stderr
   */
  app.post('/api/exec', function (req, res, next) {
    var cmd = req.body.cmd;
    var path = req.body.path;
    if (!cmd) {
      next('Miss parameter "cmd".');
    } else {
      child_process.exec(cmd, {
        cwd:  path
      }, function (err, stdout, stderr) {
        if (err) {
          next(err);
        } else {
          res.json({
            cmd:    cmd,
            path:   path,
            stdout: stdout.toString(),
            stderr: stderr.toString()
          });
        }
      });
    }
  });

  /**
   * 读取日志文件
   *
   * 参数： date, size
   */
  app.get('/api/log/tail', function (req, res, next) {
    
  });

  /**
   * 设置日志等级
   *
   * 参数： level
   */
  app.post('/api/log/set/level', function (req, res, next) {
    var level = req.body.level;
    if (!level) {
      next('miss parameter "level".');
    } else {
      level = level.toLowerCase();
      utils.changeLogger('setLevel', level);
      res.json({
        method:   'setLevel',
        level:    level
      });
    }
  });

};
