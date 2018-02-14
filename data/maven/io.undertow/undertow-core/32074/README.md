## Overview
[io.undertow:undertow-core](http://undertow.io/) is a Java web server based on non-blocking IO.

Affected versions of this package are vulnerable to Directory Traversal. It does not use the ALLOW_ENCODED_SLASH option, allowing the slash characters encoded in the url. This may lead to path traversal and information disclosure of arbitrary local files.

## Remediation
There is no fixed version for io.undertow:undertow-core

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1048)
- [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1534343)
