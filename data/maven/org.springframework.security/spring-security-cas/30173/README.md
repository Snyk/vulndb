## Overview
[`org.springframework.security:spring-security-cas`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-cas%22)
When using Spring Security's CAS Proxy ticket authentication, a malicious CAS Service could trick another CAS Service into authenticating a proxy ticket that was not associated. A remote attacker could use this flaw to bypass any access control restrictions on which CAS services can authenticate to one another.

## References

- [Pivotal Security](http://www.gopivotal.com/security/cve-2014-3527)
- [Redhat Bugzilla](https://bugzilla.redhat.com/CVE-2014-3527)
- [Spring Blog](https://spring.io/blog/2014/08/15/cve-2014-3527-fixed-in-spring-security-3-2-5-and-3-1-7)
- [Jira Issue](https://jira.spring.io/browse/SEC-2688)
