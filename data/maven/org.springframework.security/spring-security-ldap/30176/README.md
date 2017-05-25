## Overview
[`org.springframework.security:spring-security-ldap`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-ldap%22)
The ActiveDirectoryLdapAuthenticator does not check the password length. If the directory allows anonymous binds then it may incorrectly authenticate a user who supplies an empty password.

## References

- [Pivotal Security](http://www.gopivotal.com/security/cve-2014-0097)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-0097)
