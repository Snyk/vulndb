## Overview
[`org.apache.commons:commons-email`](https://commons.apache.org) aims to provide a API for sending email.

Affected versions of the package are vulnerable to SMTP Header Injection.
When a call-site passes a subject for an email that contains line-breaks in Apache Commons Email 1.0 through 1.4, the caller can add arbitrary SMTP headers.

## Remediation
Upgrade `org.apache.commons:commons-email` to version 1.5 or higher.

## References
- [Openwall](http://www.openwall.com/lists/oss-security/2017/08/01/7)
- [Apache Commons Security Report](http://commons.apache.org/proper/commons-email/security-reports.html)
- [Release Notes](https://commons.apache.org/proper/commons-email/changes-report.html#a1.5)
