## Overview
Affected versions of this package are vulnerable to Arbitrary Command Execution.

In Apache Hadoop 2.8.0, 3.0.0-alpha1, and 3.0.0-alpha2, the LinuxContainerExecutor runs docker commands as root with insufficient input validation. When the docker feature is enabled, authenticated users can run commands as root.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-7669)
- [Seclists](http://seclists.org/oss-sec/2017/q2/394)
- [RedHat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1448373)
