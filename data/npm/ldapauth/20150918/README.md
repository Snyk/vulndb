## Overview
ldapauth versions <= 2.2.4 are vulnerable to ldap injection through the username parameter.

_Source: [Node Security Project](https://nodesecurity.io/advisories/19)_

## Remediation
Consider updating to use [ldapauth-fork](https://www.npmjs.com/package/ldapauth-fork) 2.3.3 or greater as ldapauth has not yet been patched.

## References
- https://nodesecurity.io/advisories/19
- http://www.openwall.com/lists/oss-security/2015/09/18/4
