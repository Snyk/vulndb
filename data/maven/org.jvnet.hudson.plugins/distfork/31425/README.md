## Overview
[`org.jvnet.hudson.plugins:distfork`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22distfork%22)
Affected versions of this package are vulnerable to Arbitrary Code Execution. No permission checks were performed (beyond the basic check for Overall/Read permission). Anyone with that permission to was allowed run arbitrary shell commands on all connected nodes.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2017-2652)
- [OSS Security](http://seclists.org/oss-sec/2017/q1/656)
