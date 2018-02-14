## Overview
Affected versions of [`python-keystoneclient`](https://pypi.python.org/pypi/python-keystoneclient) are vulnerable to Man-in-the-Middle (MitM) attacks.

The s3_token middleware in OpenStack keystonemiddleware before 1.6.0 and python-keystoneclient before 1.4.0 disables certification verification when the "insecure" option is set in a paste configuration (paste.ini) file regardless of the value, which allows remote attackers to conduct man-in-the-middle attacks via a crafted certificate, a different vulnerability than CVE-2014-7144.

## Remediation
Upgrade `python-keystoneclient` to version 1.4.0 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-1852)
