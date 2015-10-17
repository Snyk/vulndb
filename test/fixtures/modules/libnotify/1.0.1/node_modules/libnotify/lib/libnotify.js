// libnotify - Copyright Mitko Kostov <mitko.kostov@gmail.com> (MIT Licensed)
// fork of visionmedia's node-growl modified to work with libnotify on linux

/**
 * Module dependencies.
 */

var child_process = require('child_process'),
    path = require('path')

/**
 * Node-libnotify version.
 */

exports.version = '1.0.1'

/**
 * Fetch the binary version when available.
 *
 * @param  {function} callback
 * @api public
 */

exports.binVersion = function(callback) {
  child_process.exec('notify-send -v', function(err, stdout, stderr){
    if (err) callback(err)
    else callback(null, stdout)
  })
}


/**
 * Send libnotify notification _msg_ with _options_.
 *
 * Options:
 *
 *  - title   Notification title
 *  - time    Set the expiration time
 *  - image
 *    - path to an image sets -i ( you can also use stock icons )
 *
 * Examples:
 *
 *   growl.notify('New email')
 *   growl.notify('5 new emails', { title: 'Thunderbird' })
 *   growl.notify('Email sent', function(){
 *     // ... notification sent
 *   })
 *
 * @param {string} msg
 * @param {object} options
 * @param {function} callback
 * @api public
 */

exports.notify = function(msg, options, callback) {
  var image,
      args = ['notify-send','"' + msg + '"'],
      options = options || {}
  this.binVersion(function(err, version){
    if (err) return callback(err)
    if (image = options.image) args.push('-i ' + image)
    if (options.time) args.push('-t', options.time)
    if (options.category) args.push('-c', options.category)
    if (options.urgency) args.push('-u', options.urgency)
    if (options.title) {
      args.shift()
      args.unshift('notify-send', '"'+ options.title +'"')
    }
    child_process.exec(args.join(' '), callback)
  })
}
