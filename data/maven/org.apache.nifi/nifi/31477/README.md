## Overview
[`org.apache.nifi:nifi`](https://nifi.apache.org) is an easy to use, powerful, and reliable system to process and distribute data.

In Apache NiFi before 0.7.4 and 1.x before 1.3.0, there are certain user input components in the UI which had been guarding for some forms of XSS issues but were insufficient.

## Remediation
Upgrade `org.apache.nifi:nifi` to version 0.7.4, 1.3.0 or higher.

## References
- [Github PR](https://nvd.nist.gov/vuln/detail/CVE-2017-7665)
- [Github Issue](http://www.openwall.com/lists/oss-security/2017/06/11/1)
- [Github Commit](http://mail-archives.apache.org/mod_mbox/www-announce/201706.mbox/%3CCAFddr25eFkXCOQGwyN4B4VVNjdVYLcKya_JCaW%3Dd%3D11%3DQkyd4g%40mail.gmail.com%3E)
