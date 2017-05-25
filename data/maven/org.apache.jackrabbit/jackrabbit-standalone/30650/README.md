## Overview
[`org.apache.jackrabbit:jackrabbit-standalone`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22jackrabbit-standalone%22)
Affected versions of the package are vulnerable to Insecure Temporary File Creation.
The default configuration of javax.servlet.context.tempdir in Apache Commons FileUpload 1.0 through 1.2.2 uses the /tmp directory for uploaded files, which allows local users to overwrite arbitrary files via an unspecified symlink attack.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-0248)
- [securityfocus](http://www.securityfocus.com/bid/58326)
