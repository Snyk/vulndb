## Overview
[`ldap3`](http://pypi.python.org/pypi/ldap3) is a strictly RFC 4510 conforming LDAP V3 pure Python client library.

Affected versions of this package are vulnerable to Authentication Bypass via the rebind() method of the Connection object. It is performing the following comparison to validate input data:

```py
if password:
    self.password = password
````

That condition is false in case of password = '', so the old value of the object will be keep in that case, including case where the bind was correct.

This is a potential security hole, since a correct bind followed by a rebind with empty password will complete the binding correctly.
## References
- [GitHub Issue](https://github.com/cannatag/ldap3/issues/393)
