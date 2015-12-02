var LdapAuth = require('./lib/ldapauth');

var opts = {
  "url": "ldap://localhost:1398",
  "adminDn": "cn=Production Monitoring LDAP sa,ou=Service Accounts,ou=eprdnet,dc=zen-proxy,dc=local",
  "adminPassword": "R9vExzzv8pzMKxm",
  "searchBase": "dc=zen-proxy,dc=local",
  "searchFilter": "(&(objectClass=person)(sAMAccountName={{username}}))",
  "searchAttributes": [
    "dn", "cn", "givenName", "name", "memberOf", "sAMAccountName", "objectSid"
  ],
  "groupSearchBase": "dc=zen-proxy,dc=local",
  "groupSearchFilter": "(member={{dn}})",
  "groupSearchAttributes": ["dn", "cn", "sAMAccountName"]
};

opts = {
  "url": "ldap://ldap.forumsys.com:389",
  "adminDn": "cn=read-only-admin,dc=example,dc=com",
  "adminPassword": "password",
  "searchBase": "dc=example,dc=com",
  "searchFilter": "(uid={{username}})",
  "cache": true
}

var a = new LdapAuth(opts);

a.authenticate('riemann', 'password', function(err, user) {
  if (err) {
    console.warn(err);
  } else {
    console.dir(user, {depth: null});
  }
  a.authenticate('riemann', 'password', function(err, user) {
    console.log('second');
    a.close(function(err, res) {
      console.log(err);
      console.log(res);
    });
  });
});
