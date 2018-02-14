## Overview
[moodle/moodle](https://moodle.org/) is a learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments.

Affected versions of this package are vulnerable to Arbitrary Email Header Injection. An attacker may inject arbitrary e-mail headers via vectors involving a crafted (1) From: or (2) Sender: header.

## Remediation
Upgrade `moodle/moodle` to versions 1.9.16, 2.0.7, 2.1.4, 2.2.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2012-0796)
- [Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=783532)
