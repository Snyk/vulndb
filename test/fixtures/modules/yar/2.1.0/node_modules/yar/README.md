<a href="https://github.com/spumko"><img src="https://raw.github.com/spumko/spumko/master/images/from.png" align="right" /></a>
![yar Logo](https://raw.github.com/spumko/yar/master/images/yar.png)

A [**hapi**](https://github.com/spumko/hapi) session plugin and cookie jar

[![Build Status](https://secure.travis-ci.org/spumko/yar.png)](http://travis-ci.org/spumko/yar)


## Install

    $ npm install yar



## Usage

The ***yar*** [hapi](https://github.com/spumko/hapi) plugin adds session support - a persistant state across multiple browser
requests using an [iron](https://github.com/hueniverse/iron) encrypted cookie and server-side storage. **yar** tries to fit
session data into a session cookie based  on a configured maximum size. If the content is too big to fit, it uses local storage
via the hapi plugin cache interface.

For example, the first handler sets a session key and the second gets it:
```javascript
var handler1 = function (request, reply) {

    request.session.set('example', { key: 'value' });
    return reply();
};

var handler2 = function (request, reply) {

    var example = request.session.get('example');
    reply(example.key);     // Will send back 'value'
};
```

The plugin requires a password for encryption, and the `ext` permission:
```javascript
var options = {
    cookieOptions: {
        password: 'password'
    }
};

var server = new Hapi.Server();

server.pack.require('yar', options, function (err) { });
```

Note: Add `isSecure: false` to the `cookieOptions` if using standard http. Take care to do this in development mode only though. You don't want to use cookies sent over insecure channels for session management. 


## API Reference

### Options

- `name` - determines the name of the cookie used to store session information. Defaults to _session_.
- `maxCookieSize` - maximum cookie size before using server-side storage. Defaults to 1K. Set to zero to always use server-side storage.
- `cache` - **hapi** [cache options](https://github.com/spumko/hapi/blob/master/docs/Reference.md#plugincacheoptions) which includes
  (among other options):
    - `expiresIn` - server-side storage expiration (defaults to 1 day).
- `cookieOptions` - the configuration for cookie-specific features:
    - `password` - (Required) used to encrypt and sign the cookie data.
    - `path` - determines the cookie path. Defaults to _'/'_.
    - `isSecure` - determines whether or not to transfer using TLS/SSL. Defaults to _true_.
    - `isHttpOnly` - determines whether or not to set HttpOnly option in cookie. Defaults to _false_.


#### Methods

**yar** adds the `session` property to every request object and initializes the `session.id` on the first request from each browser. The `request.session` interface provides the following methods:

- `reset()` - clears the session and assigns a new session id.
- `set(key, value)` - assigns a value (string, object, etc) to a given key which will persist across requests.
- `set(keysObject)` - assigns values to multiple keys using each 'keysObject' top-level property.
- `get(key, clear)` - retreive value using a key. If 'clear' is 'true', key is cleared on return.
- `clear(key)` - clears key.
- `touch()` - Manually notify the session of changes (when using `get()` and changing the content of the returned reference directly without calling `set()`).
- `flash(type, message, isOverride)` - stores volatile data - data that should be deleted once read. When given no arguments, it will return all of the flash messages and delete the originals. When given only a type, it will return all of the flash messages of that type and delete the originals. When given a type and a message, it will set or append that message to the given type. 'isOverride' used to indicate that the message provided should replace any existing value instead of being appended to it (defaults to false).
- `lazy(enabled)` - if set to 'true', enables lazy mode. In lazy mode, `request.session` can be modified directly (e.g. setting `request.session.myKey` to an object value), and those keys will be stored and loaded back. Lazy mode isn't as fast as the normal get/set because it has to store the session state on every responses regardless of any changes being made.
