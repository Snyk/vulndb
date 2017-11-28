## Overview
[`org.apache.karaf:org.apache.karaf.main`](https://karaf.apache.org/) is a modern and polymorphic container.

Affected versions of this package are vulnerable to LDAP Injection.
Apache Karaf uses the LDAPLoginModule to authenticate users to a directory via LDAP. However, it is not encoding usernames properly and hence is vulnerable to LDAP injection attacks.

While it appears that it not possible to exploit this vulnerability to allow an attacker to gain remote access, it allows an attacker to insert special characters into the search query step. Therefore, it can potentially be exploited as part of a Denial Of Service attack.

## References
- [Apache Karaf Security Advisory](http://karaf.apache.org/security/cve-2016-8750.txt)
