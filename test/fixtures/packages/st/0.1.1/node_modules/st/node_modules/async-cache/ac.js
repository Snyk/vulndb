module.exports = AsyncCache;

var LRU = require('lru-cache');

function AsyncCache(opt) {
  if (!opt || typeof opt !== 'object') {
    throw new Error('options must be an object');
  }

  if (!opt.load) {
    throw new Error('load function is required');
  }

  if (!(this instanceof AsyncCache)) {
    return new AsyncCache(opt);
  }

  this._opt = opt;
  this._cache = new LRU(opt);
  this._load = opt.load;
  this._loading = {};
}

AsyncCache.prototype.get = function(key, cb) {
  if (this._loading[key]) {
    this._loading[key].push(cb);
    return;
  }

  var cached = this._cache.get(key);
  if (cached) {
    return process.nextTick(function() {
      cb(null, cached);
    });
  }

  this._loading[key] = [ cb ];
  this._load(key, function(er, res) {
    if (!er) this._cache.set(key, res);

    var cbs = this._loading[key];
    delete this._loading[key];

    cbs.forEach(function (cb) {
      cb(er, res);
    });
  }.bind(this));
};

AsyncCache.prototype.set = function(key, val) {
  return this._cache.set(key, val);
};

AsyncCache.prototype.reset = function() {
  return this._cache.reset();
};

AsyncCache.prototype.has = function(key) {
  return this._cache.get(key);
};

AsyncCache.prototype.del = function(key) {
  return this._cache.del(key);
};
