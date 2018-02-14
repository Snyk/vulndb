## Overview
[moodle/moodle](https://github.com/moodle/moodle) is a learning platform designed to provide educators, administrators and learners with a single robust, secure and integrated system to create personalised learning environments.

Affected versions of this package are vulnerable to Server Side Request Forgery (SSRF). By substituting the source URL in the filepicker AJAX request, authenticated users are able to retrieve and view any URL.

## Remediation
Upgrade `moodle/moodle` to versions 3.1.10, 3.2.7, 3.3.4, 3.4.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-1042)
- [Security Focus](https://www.securityfocus.com/bid/102752)
- [Moodle Security announcements](https://moodle.org/mod/forum/discuss.php?d=364381)
