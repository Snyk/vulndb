var LdapAuth = require('./lib/ldapauth');

var a = new LdapAuth({
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
});

a.authenticate('extLVesaP', 'cx3gS0vIhQTEL', function(err, user) {
  console.log(err);
  console.dir(user, {depth: null});
  a.close();
});
