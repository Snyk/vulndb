## Overview
[`org.springframework.ldap:spring-ldap-core`](https://ldap.springframework.org) is a library to simplify LDAP programming in Java, built on the same principles as Spring Jdbc.

Affected versions of the package are vulnerable to Access Restriction Bypass.
when `DefaultTlsDirContextAuthenticationStrategy` is set as an authentication strategy a malicious user could log in to every username with any password.

## Remediation
Upgrade `org.springframework.ldap:spring-ldap-core` to version 2.3.2 or higher.

## References
- [Pivotal Security Advisory](https://pivotal.io/security/cve-2017-8028)
- [Github PR](https://github.com/spring-projects/spring-ldap/pull/432)
- [Github Issue](https://github.com/spring-projects/spring-ldap/issues/430)
- [Github Commit](https://github.com/spring-projects/spring-ldap/commit/08e8ae289bbd1b581986c7238604a147119c1336)
