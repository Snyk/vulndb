## Overview
[`roundup`](https://pypi.python.org/pypi/roundup) is a A simple-to-use and -install issue-tracking system with command-line, web and e-mail interfaces. Highly customisable.
schema.py in Roundup before 1.5.1 does not properly limit attributes included in default user permissions, which might allow remote authenticated users to obtain sensitive user information by viewing user details.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-6276)
- [Debian Security Advisory](http://www.debian.org/security/2016/dsa-3502)
