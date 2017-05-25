## Overview
[`org.apache.directory.api:api-ldap-client-all`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22api-ldap-client-all%22)
Affected versions of the package are vulnerable to Timing Attack due to using the `Arrays.equals` to validate the password, which is vulnerable to a brute force attacks by malicious users.

## References
- [OSS Security](http://www.openwall.com/lists/oss-security/2015/07/07/5)
