## Overview
[`org.apache.oodt:oodt-core`](https://mvnrepository.com/artifact/org.apache.oodt/oodt/1.2) is a new version of Object Oriented Data Technology.

Affected versions of this package vulnerable to Cross-site Scripting (XSS) attacks. The URL is stored 'as is' in the `ApplicationRequest` object. If shown later in a view, (e.g.: on a 404 page) it may become a vector for an XSS attack.

This is related to [SNYK-PYTHON-OODT-40626](https://snyk.io/vuln/SNYK-PYTHON-OODT-40626)

## References
- [Apache Issue](https://issues.apache.org/jira/browse/OODT-364)
- [Github ChangeLog](https://github.com/apache/oodt/blob/master/CHANGES.txt#L897)
- [GitHub Commit](https://github.com/apache/oodt/commit/cf6ff6b5437cee01792269cc16010e595547a64d)
