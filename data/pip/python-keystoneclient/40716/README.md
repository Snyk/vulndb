## Overview
Affected versions of [`python-keystoneclient`](https://pypi.python.org/pypi/python-keystoneclient) are vulnerable to Access Restrictions Bypass.

The identity service in OpenStack Identity (Keystone) before 2015.1.3 (Kilo) and 8.0.x before 8.0.2 (Liberty) and keystonemiddleware (formerly python-keystoneclient) before 1.5.4 (Kilo) and Liberty before 2.3.3 does not properly invalidate authorization tokens when using the PKI or PKIZ token providers, which allows remote authenticated users to bypass intended access restrictions and gain access to cloud resources by manipulating byte fields within a revoked token.

## Remediation
Upgrade `python-keystoneclient` to version 2.3.3 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-7546)
- [Openstack Security](https://security.openstack.org/ossa/OSSA-2016-005.html)
