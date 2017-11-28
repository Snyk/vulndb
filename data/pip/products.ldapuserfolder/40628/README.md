## Overview
[`products.ldapuserfolder`](https://pypi.python.org/pypi/Products.LDAPUserFolder) is a LDAP-enabled Zope 2 user folder.

Affected versions of this package vulnerable to Access Restriction Bypass attacks.
The authenticate function in LDAPUserFolder/LDAPUserFolder.py in zope-ldapuserfolder
2.9-1 does not verify the password for the emergency account, which allows remote attackers to gain privileges.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2010-2944)
