## Overview
[org.apache.sling:org.apache.sling.auth.core]|(https://sling.apache.org/) is a framework for RESTful web-applications based on an extensible content tree.

Affected versions of this package are vulnerable to Authentication Bypass. An attacker may trick a victim to send over their credentials through the Sling login form.

# Remediation
Upgrade org.apache.sling:org.apache.sling.auth.core to version 1.4.2 or higher.
## References
- [Apache Sling Mailing List](https://lists.apache.org/thread.html/182bed1dd6933824a81cc5f07639eeb813fbd8f2cc49d51b452ab621@%3Cdev.sling.apache.org%3E)
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-15700)
