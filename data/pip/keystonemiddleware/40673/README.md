## Overview
[`keystonemiddleware`](https://pypi.python.org/pypi/keystonemiddleware) is a Middleware for OpenStack Identity.

Affected versions of this package are vulnerable to Access Restriction Bypass.

The identity service in OpenStack Identity (Keystone) before 2015.1.3 (Kilo) and 8.0.x before 8.0.2 (Liberty) and keystonemiddleware (formerly python-keystoneclient) before 1.5.4 (Kilo) and Liberty before 2.3.3 does not properly invalidate authorization tokens when using the PKI or PKIZ token providers, which allows remote authenticated users to bypass intended access restrictions and gain access to cloud resources by manipulating byte fields within a revoked token.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-7546)
- [Keystone Bug Report](https://bugs.launchpad.net/keystone/+bug/1490804)
- [Github Commit](https://github.com/openstack/keystonemiddleware/blob/cbe9accc06a80ef8b0013983e96818379452e7da/releasenotes/notes/bug-1490804-87c0ff8e764945c1.yaml)
