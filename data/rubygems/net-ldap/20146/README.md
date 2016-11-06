## Overview
[`net-ldap`](https://rubygems.org/gems/net-ldap) implements client access for the Lightweight Directory Access Protocol (LDAP), an IETF standard protocol for accessing distributed directory services.
Affected versions of this gem generate SSHA passwords with a weak salt value that is between 0 and 999. This may allow a local attacker to more easily gain access to password information.

## References
- http://rubysec.com/advisories/OSVDB-106108
- http://osvdb.org/show/osvdb/106108
