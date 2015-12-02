Fork of [node-ldapauth](https://github.com/trentm/node-ldapauth) - A simple node.js lib to authenticate against an LDAP server.

## About the fork

This fork was originally created and published because of an urgent need to get newer version of [ldapjs](http://ldapjs.org/) in use to [passport-ldapauth](https://github.com/vesse/passport-ldapauth) since the newer version supported passing `tlsOptions` to the TLS module. Since then a lot of issues from the original module ([#2](https://github.com/trentm/node-ldapauth/issues/2), [#3](https://github.com/trentm/node-ldapauth/issues/3), [#8](https://github.com/trentm/node-ldapauth/issues/8), [#10](https://github.com/trentm/node-ldapauth/issues/10), [#11](https://github.com/trentm/node-ldapauth/issues/11), [#12](https://github.com/trentm/node-ldapauth/issues/12), [#13](https://github.com/trentm/node-ldapauth/pull/13)) have been fixed, and new features have been added as well.

Multiple [ldapjs](http://ldapjs.org/) client options have been made available.

## Usage

```javascript
var LdapAuth = require('ldapauth-fork');
var options = {
    url: 'ldaps://ldap.example.com:636',
    ...
};
var auth = new LdapAuth(options);
...
auth.authenticate(username, password, function(err, user) { ... });
...
auth.close(function(err) { ... })
```

## Install

    npm install ldapauth-fork


## License

MIT. See "LICENSE" file.


## `LdapAuth` Config Options

[Use the source Luke](https://github.com/vesse/node-ldapauth-fork/blob/master/lib/ldapauth.js#L25-93)


## express/connect basicAuth example

```javascript
var connect = require('connect');
var LdapAuth = require('ldapauth-fork');

// Config from a .json or .ini file or whatever.
var config = {
  ldap: {
    url: "ldaps://ldap.example.com:636",
    bindDn: "uid=myadminusername,ou=users,o=example.com",
    bindCredentials: "mypassword",
    searchBase: "ou=users,o=example.com",
    searchFilter: "(uid={{username}})"
  }
};

var ldap = new LdapAuth({
  url: config.ldap.url,
  bindDn: config.ldap.bindDn,
  bindCredentials: config.ldap.bindCredentials,
  searchBase: config.ldap.searchBase,
  searchFilter: config.ldap.searchFilter,
  //log4js: require('log4js'),
  cache: true
});

var basicAuthMiddleware = connect.basicAuth(function (username, password, callback) {
  ldap.authenticate(username, password, function (err, user) {
    if (err) {
      console.log("LDAP auth error: %s", err);
    }
    callback(err, user)
  });
});
```
