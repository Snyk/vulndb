## Overview
[`org.springframework.security:spring-security-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-security-core%22)
DaoAuthenticationProvider in VMware SpringSource Spring Security before 2.0.8, 3.0.x before 3.0.8, and 3.1.x before 3.1.3 does not check the password if the user is not found, which makes the response delay shorter and might allow remote attackers to enumerate valid usernames via a series of login requests.

## References

- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2012-5055)
