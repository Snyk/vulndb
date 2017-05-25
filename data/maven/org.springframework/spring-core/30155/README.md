## Overview
[`org.springframework:spring-core`](http://search.maven.org/#search%7Cga%7C1%7Ca%3A%22spring-core%22)
Affected versions of this package are vulnerable to Regular expression Denial of Service (ReDoS) attacks via the `java.util.regex.Pattern.compile` method.
An attacker could use a long string with many optional groups to cause high cpu consumption. This is related to issue CVE-2004-2540.

## References
- [Pentest Report - Marc Schoenefeld ](https://packetstormsecurity.com/hitb06/DAY_1_-_Marc_Schoenefeld_-_Pentesting_Java_J2EE.pdf)
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2009-1190)
- [RedHat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=497161)
