## Overview:
ldapauth versions <= 2.2.4 are vulnerable to ldap injection through the username parameter.

_Original description taken from the [Node Security Project](https://nodesecurity.io/)_

## Recommendations:
Consider updating to use [ldapauth-fork](https://www.npmjs.com/package/ldapauth-fork) 2.3.3 or greater as ldapauth has not yet been patched.

## References:
- http://www.openwall.com/lists/oss-security/2015/09/18/4
