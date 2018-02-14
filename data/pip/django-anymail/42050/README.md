## Overview
[django-anymail](https://pypi.org/project/django-anymail/) is  Python Web framework.

Affected versions of this package are vulnerable to Timing Attack. An attacker could recover the `WEBHOOK_AUTHORIZATION`shared secret and post fabricated or malicious email tracking events to the app.

## Remediation
Upgrade `django-anymail` to version 1.2.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2018-6596)
- [GitHub Commit](https://github.com/anymail/django-anymail/commit/c07998304b4a31df4c61deddcb03d3607a04691b)
- [Debian](https://www.debian.org/security/2018/dsa-4107)
