## Overview
[`org.ldaptive:ldaptive`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22ldaptive%22)
It was discovered that the implementation used by the vtldap/ldaptive project to check that the server hostname matches the domain name in the subject's CN field was flawed. This can be exploited by a Man-in-the-middle (MITM) attack, where the attacker can spoof a valid certificate using a specially crafted subject.

## References

- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3607)
- [ref # ](http://shibboleth.net/community/advisories/secadv_20140919.txt)
