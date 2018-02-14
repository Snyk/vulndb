## Overview
[Net-ldap](https://rubygems.org/gems/net-ldap) implements client access for the Lightweight Directory Access Protocol (LDAP), an IETF standard protocol for accessing distributed directory services. 

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attacks as it did not properly validate SSL certificates. A malicious host could connect to the server, making it to believe it is a a trusted host. 

## Remediation
Upgrade net-ldap to 0.16.0 version or higher.

## References
- [OpenWall](http://openwall.com/lists/oss-security/2017/12/17/10)
- [GitHub Issue](https://github.com/ruby-ldap/ruby-net-ldap/issues/258)
- [GitHub Commit](https://github.com/ruby-ldap/ruby-net-ldap/pull/279)
