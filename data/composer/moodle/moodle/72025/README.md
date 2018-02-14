## Overview
[moodle/moodle](https://github.com/moodle/moodle) is a learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). An attacker may inject javascript in the event name in the calendar block.

## Remediation

Upgrade `moodle/moodle` to versions 3.1.10, 3.2.7, 3.3.4 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1045)
- [Moodle Security announcements](https://moodle.org/mod/forum/discuss.php?d=364384)
