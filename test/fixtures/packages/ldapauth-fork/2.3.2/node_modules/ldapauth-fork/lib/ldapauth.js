/**
 * Copyright 2011 (c) Trent Mick.
 *
 * LDAP auth.
 *
 * Usage:
 *    var LdapAuth = require('ldapauth');
 *    var auth = new LdapAuth({url: 'ldaps://ldap.example.com:636', ...});
 *    ...
 *    auth.authenticate(username, password, function (err, user) { ... });
 *    ...
 *    auth.close(function (err) { ... })
 */

var assert = require('assert');
var ldap = require('ldapjs');
var debug = console.warn;
var format = require('util').format;
var bcrypt = require('bcryptjs');


/**
 * Create an LDAP auth class. Primary usage is the `.authenticate` method.
 *
 * @param opts {Object} Config options. Keys (required, unless says
 *      otherwise) are:
 *    url {String}
 *        E.g. 'ldaps://ldap.example.com:663'
 *    bindDn {String}
 *        Optional, e.g. 'uid=myapp,ou=users,o=example.com'. Alias: adminDn
 *    bindCredentials {String}
 *        Password for bindDn. Aliases: Credentials, adminPassword
 *    bindProperty {String}
 *        Optional, default 'dn'. Property of user to bind against client
 *        e.g. 'name', 'email'
 *    searchBase {String}
 *        The base DN from which to search for users by username.
 *         E.g. 'ou=users,o=example.com'
 *    searchScope {String}
 *        Optional, default 'sub'. Scope of the search, one of 'base',
 *        'one', or 'sub'.
 *    searchFilter {String}
 *        LDAP search filter with which to find a user by username, e.g.
 *        '(uid={{username}})'. Use the literal '{{username}}' to have the
 *        given username be interpolated in for the LDAP search.
 *    searchAttributes {Array}
 *        Optional, default all. Array of attributes to fetch from LDAP server.
 *    groupDnProperty {String}
 *        Optional, default 'dn'. The property of user object to use in
 *        '{{dn}}' interpolation of groupSearchFilter.
 *    groupSearchBase {String}
 *        Optional. The base DN from which to search for groups. If defined,
 *        also groupSearchFilter must be defined for the search to work.
 *    groupSearchScope {String}
 *        Optional, default 'sub'.
 *    groupSearchFilter {String}
 *        Optional. LDAP search filter for groups. The following literals are
 *        interpolated from the found user object: '{{dn}}' the property
 *        configured with groupDnProperty.
 *    groupSearchAttributes {Array}
 *        Optional, default all. Array of attributes to fetch from LDAP server.
 *    log4js {Module}
 *        Optional. The require'd log4js module to use for logging. If given
 *        this will result in TRACE-level logging for ldapauth.
 *    verbose {Boolean}
 *        Optional, default false. If `log4js` is also given, this will add
 *        TRACE-level logging for ldapjs (quite verbose).
 *    cache {Boolean}
 *        Optional, default false. If true, then up to 100 credentials at a
 *        time will be cached for 5 minutes.
 *    timeout {Integer}
 *        Optional, default Infinity. How long the client should let
 *        operations live for before timing out.
 *    connectTimeout {Integer}
 *        Optional, default is up to the OS. How long the client should wait
 *        before timing out on TCP connections.
 *    tlsOptions {Object}
 *        Additional options passed to the TLS connection layer when
 *        connecting via ldaps://. See
 *        http://nodejs.org/api/tls.html#tls_tls_connect_options_callback
 *        for available options
 *    maxConnections {Integer}
 *        Whether or not to enable connection pooling, and if so, how many to
 *        maintain.
 *    checkInterval {Integer}
 *        How often to schedule health checks for the connection pool.
 *    maxIdleTime {Integer}
 *        How long a client can be idle before health-checking the connection
 *        (subject to the checkInterval frequency)
 *    includeRaw {boolean}
 *        Optional, default false. Set to true to add property '_raw'
 *        containing the original buffers to the returned user object.
 *        Useful when you need to handle binary attributes.
 */
function LdapAuth(opts) {
  this.opts = opts;
  assert.ok(opts.url, 'LDAP server URL not defined (opts.url)');
  assert.ok(opts.searchBase, 'Search base not defined (opts.searchBase)');
  assert.ok(opts.searchFilter, 'Search filter not defined (opts.searchFilter)');

  this.log = opts.log4js && opts.log4js.getLogger('ldapauth');

  this.opts.searchScope || (this.opts.searchScope = 'sub');
  this.opts.bindProperty || (this.opts.bindProperty = 'dn');
  this.opts.groupSearchScope || (this.opts.groupSearchScope = 'sub');
  this.opts.groupDnProperty || (this.opts.groupDnProperty = 'dn');

  if (opts.cache) {
    var Cache = require('./cache');
    this.userCache = new Cache(100, 300, this.log, 'user');
  }

  this.clientOpts = {
    url: opts.url,
    connectTimeout: opts.connectTimeout,
    timeout: opts.timeout,
    tlsOptions: opts.tlsOptions,
    maxConnections: opts.maxConnections,
    bindDn: opts.bindDn || opts.adminDn,
    bindCredentials: opts.bindCredentials || opts.Credentials || opts.adminPassword,
    checkInterval: opts.checkInterval,
    maxIdleTime: opts.maxIdleTime
  };

  if (opts.log4js && opts.verbose) {
    this.clientOpts.log4js = opts.log4js;
  }

  this._adminClient = ldap.createClient(this.clientOpts);
  this._adminBound = false;
  this._userClient = ldap.createClient(this.clientOpts);

  if (opts.cache) {
    this._salt = bcrypt.genSaltSync();
  }

  if (opts.groupSearchBase && opts.groupSearchFilter) {
    this._getGroups = this._findGroups;
  } else {
    // Assign an async identity function so there is no need to branch
    // the authenticate function to have cache set up.
    this._getGroups = function (user, callback) {
      return callback(null, user);
    }
  }
};


LdapAuth.prototype.close = function (callback) {
  var self = this;
  // It seems to be OK just to call unbind regardless of if the
  // client has been bound (e.g. how ldapjs pool destroy does)
  self._adminClient.unbind(function(err) {
    self._userClient.unbind(callback);
  });
};


/**
 * Ensure that `this._adminClient` is bound.
 */
LdapAuth.prototype._adminBind = function (callback) {
  // Anonymous binding
  if (typeof this.clientOpts.bindDn === 'undefined' || this.clientOpts.bindDn === null) {
    return callback();
  }
  if (this._adminBound) {
    return callback();
  }
  var self = this;
  this._adminClient.bind(this.clientOpts.bindDn, this.clientOpts.bindCredentials,
                         function (err) {
    if (err) {
      self.log && self.log.trace('ldap authenticate: bind error: %s', err);
      return callback(err);
    }
    self._adminBound = true;
    return callback();
  });
};

/**
 * Conduct a search using the admin client. Used for fetching both
 * user and group information.
 *
 * @param searchBase {String} LDAP search base
 * @param options {Object} LDAP search options
 * @param {Function} `function (err, result)`.
 */
LdapAuth.prototype._search = function (searchBase, options, callback) {
  var self = this;

  self._adminBind(function (err) {
    if (err)
      return callback(err);

    self._adminClient.search(searchBase, options, function (err, result) {
      if (err)
        return callback(err);

      var items = [];
      result.on('searchEntry', function (entry) {
        items.push(entry.object);
        if (self.opts.includeRaw === true) {
          items[items.length - 1]._raw = entry.raw;
        }
      });

      result.on('error', callback);

      result.on('end', function (result) {
        if (result.status !== 0) {
          var err = 'non-zero status from LDAP search: ' + result.status;
          return callback(err);
        }
        return callback(null, items);
      });
    });
  });
};

/**
 * Find the user record for the given username.
 *
 * @param username {String}
 * @param callback {Function} `function (err, user)`. If no such user is
 *    found but no error processing, then `user` is undefined.
 *
 */
LdapAuth.prototype._findUser = function (username, callback) {
  var self = this;
  if (!username) {
    return callback("empty username");
  }

  var searchFilter = self.opts.searchFilter.replace(/{{username}}/g, username);
  var opts = {filter: searchFilter, scope: self.opts.searchScope};
  if (self.opts.searchAttributes) {
    opts.attributes = self.opts.searchAttributes;
  }

  self._search(self.opts.searchBase, opts, function (err, result) {
    if (err) {
      self.log && self.log.trace('ldap authenticate: user search error: %s %s %s', err.code, err.name, err.message);
      return callback(err);
    }

    switch (result.length) {
    case 0:
      return callback();
    case 1:
      return callback(null, result[0])
    default:
      return callback(format(
        'unexpected number of matches (%s) for "%s" username',
        result.length, username));
    }
  });
};

LdapAuth.prototype._findGroups = function(user, callback) {
  var self = this;
  if (!user) {
    return callback("no user");
  }

  var searchFilter = self.opts.groupSearchFilter.replace(/{{dn}}/g, user[self.opts.groupDnProperty]);
  var opts = {filter: searchFilter, scope: self.opts.groupSearchScope};
  if (self.opts.groupSearchAttributes) {
    opts.attributes = self.opts.groupSearchAttributes;
  }
  self._search(self.opts.groupSearchBase, opts, function (err, result) {
    if (err) {
      self.log && self.log.trace('ldap authenticate: group search error: %s %s %s', err.code, err.name, err.message);
      return callback(err);
    }

    user._groups = result;
    callback(null, user);
  });
};

/**
 *
 */
LdapAuth.prototype.authenticate = function (username, password, callback) {
  var self = this;

  if (self.opts.cache) {
    // Check cache. 'cached' is `{password: <hashed-password>, user: <user>}`.
    var cached = self.userCache.get(username);
    if (cached && bcrypt.compareSync(password, cached.password)) {
      return callback(null, cached.user)
    }
  }

  // 1. Find the user DN in question.
  self._findUser(username, function (err, user) {
    if (err)
      return callback(err);
    if (!user)
      return callback(format('no such user: "%s"', username));

    // 2. Attempt to bind as that user to check password.
    self._userClient.bind(user[self.opts.bindProperty], password, function (err) {
      if (err) {
        self.log && self.log.trace('ldap authenticate: bind error: %s', err);
        return callback(err);
      }
      // 3. If requested, fetch user groups
      self._getGroups(user, function(err, user) {
        if (err) {
          self.log && self.log.trace('ldap authenticate: group search error %s', err);
          return callback(err);
        }
        if (self.opts.cache) {
          bcrypt.hash(password, self._salt, function (err, hash) {
            self.userCache.set(username, {password: hash, user: user});
            return callback(null, user);
          });
        } else {
          return callback(null, user);
        }
      })
    });
  });
};



module.exports = LdapAuth;
