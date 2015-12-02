// Load modules

var Uuid = require('node-uuid');


// Declare internals

var internals = {};


// Defaults

internals.defaults = {
    name: 'session',                // Cookie name
    ttl: 24 * 60 * 60 * 1000,       // One day session
    maxCookieSize: 1024,            // Maximum size allowed in a cookie
    store: null,                    // Catbox compatible policy object to be used instead of hapi's cache
    cookieOptions: {                // hapi server.state() options, except 'encoding' which is always 'iron'. 'password' required.
        path: '/',
        isSecure: true
    }
};


exports.register = function (plugin, options, next) {

    // Validate options and apply defaults
    
    var settings = plugin.hapi.utils.applyToDefaults(internals.defaults, options);
    plugin.hapi.utils.assert(!settings.cookieOptions.encoding, 'Cannot override cookie encoding');
    var rawCookieOptions = plugin.hapi.utils.clone(settings.cookieOptions);
    settings.cookieOptions.encoding = 'iron';
    rawCookieOptions.encoding = 'none';

    // Configure cookie
    
    plugin.state(settings.name, settings.cookieOptions);

    // Setup session store
    
    var startTime = Date.now();
    var cache = (settings.store ? settings.store : plugin.cache({ expiresIn: settings.ttl }));

    // Pre auth
    
    plugin.ext('onPreAuth', function (request, callback) {

        // Load session data from cookie

        var load = function () {

            request.session = plugin.hapi.utils.clone(request.state[settings.name]);
            if (request.session &&
                request.session.id) {

                request.session._isModified = false;
                if (request.session._store) {
                    return decorate();
                }

                request.session._store = {};
                return cache.get(request.session.id, function (err, cached) {

                    if (err) {
                        return decorate(err);
                    }

                    if (cached && cached.item) {
                        request.session._store = cached.item;
                    }

                    return decorate();
                });
            }
            
            request.session = {
                id: Uuid.v4(),
                _store: {},
                _isModified: true
            };

            decorate();
        };

        var decorate = function (err) {

            if (request.session._store._lazyKeys) {
                request.session._isLazy = true;                 // Default to lazy mode if previously set
                request.session._store._lazyKeys.forEach(function (key) {

                    request.session[key] = request.session._store[key];
                    delete request.session._store[key];
                });
            }

            request.session.reset = function () {

                request.session.id = Uuid.v4();
                request.session._store = {};
                request.session._isModified = true;
                cache.drop(request.session.id, function (err) { });
            };

            request.session.get = function (key, clear) {

                var value = request.session._store[key];
                if (clear) {
                    request.session.clear(key);
                }

                return value;
            };

            request.session.set = function (key, value) {

                plugin.hapi.utils.assert(key, 'Missing key');
                plugin.hapi.utils.assert(typeof key === 'string' || (typeof key === 'object' && value === undefined), 'Invalid session.set() arguments');

                request.session._isModified = true;

                if (typeof key === 'string') {
                    var holder = {};
                    holder[key] = value;
                    key = holder;
                }

                Object.keys(key).forEach(function (name) {

                    request.session._store[name] = key[name];
                });
            };

            request.session.clear = function (key) {

                request.session._isModified = true;
                delete request.session._store[key];
            };

            request.session.touch = function () {

                request.session._isModified = true;
            };

            request.session.flash = function (type, message, isOverride) {

                request.session._isModified = true;
                request.session._store._flash = request.session._store._flash || {};

                if (!type && !message) {
                    var messages = request.session._store._flash;
                    request.session._store._flash = {};
                    return messages;
                }

                if (!message) {
                    var messages = request.session._store._flash[type];
                    delete request.session._store._flash[type];
                    return messages || [];
                }

                request.session._store._flash[type] = (isOverride ? message : (request.session._store._flash[type] || []).concat(message));
                return request.session._store._flash[type];
            };

            request.session.lazy = function (enabled) {

                request.session._isLazy = enabled;
            };

            callback(err);
        };

        load();
    });
    
    // Post handler
    
    plugin.ext('onPostHandler', function (request, callback) {

        if (!request.session._isModified &&
            !request.session._isLazy) {

            return callback();
        }

        var prepare = function () {

            if (request.session._isLazy) {
                var lazyKeys = [];
                Object.keys(request.session).forEach(function (key) {

                    if (['id', '_store', '_isModified', '_isLazy', 'reset', 'get', 'set', 'clear', 'touch', 'flash', 'lazy'].indexOf(key) === -1 &&
                        key[0] !== '_' &&
                        typeof request.session.key !== 'function') {

                        lazyKeys.push(key);
                        request.session._store[key] = request.session[key];
                    }
                });

                if (lazyKeys.length) {
                    request.session._store._lazyKeys = lazyKeys;
                }
            }

            if (settings.maxCookieSize) {
                return cookie();
            }

            return storage();
        };
        
        var cookie = function () {
            
            var content = {
                id: request.session.id,
                _store: request.session._store
            };
            
            plugin.hapi.state.prepareValue(settings.name, content, settings.cookieOptions, function (err, value) {
            
                if (err) {
                    return callback(err);
                }
            
                if (value.length > settings.maxCookieSize) {
                    return storage();
                }
            
                request.setState(settings.name, value, rawCookieOptions);
                return callback();
            });
        };
        
        var storage = function () {
            
            request.setState(settings.name, { id: request.session.id });
            cache.set(request.session.id, request.session._store, 0, callback);
        };

        prepare();
    });

    next();
};


