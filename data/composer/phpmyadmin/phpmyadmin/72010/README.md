## Overview
[phpmyadmin/phpmyadmin](https://www.phpmyadmin.net/) is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. 

Affected versions of this package are vulnerable to Man-in-the-Middle (MitM) attack. An attacker may spoof some certain servers and obtain sensitive information via a crafted certificate.

## Remediation
Upgrade `phpmyadmin/phpmyadmin` to version 4.5.5.1 or higher.
## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-2562)
- [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=1313698)
