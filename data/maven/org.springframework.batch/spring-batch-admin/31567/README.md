## Overview
[`org.springframework.batch:spring-batch-admin`](https://batch.springframework.org) is an web application and API for managing and monitoring Spring Batch jobs.

Affected versions of the package are vulnerable to Cross-Site Request Forgery (CSRF).
Cross-site request forgery (CSRF) vulnerability in the Spring Batch Admin before 1.3.0 allows remote attackers to hijack the authentication of unspecified victims and submit arbitrary requests, such as exploiting the file upload vulnerability.

## Remediation
Upgrade `org.springframework.batch:spring-batch-admin` to version 1.3.0.RELEASE or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2017-12881)
- [Securityfocus](http://www.securityfocus.com/bid/100410/info)
