## Overview
Affected versions of [`formencode`](https://pypi.python.org/pypi/formencode) are vulnerable to Access Restriction Bypass

schema.py in FormEncode for Python (python-formencode) 1.0 does not apply the chained_validators feature, which allows attackers to bypass intended access restrictions via unknown vectors.


## Remediation
Upgrade `formencode` to version 1.0.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2008-6547)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=454988)
