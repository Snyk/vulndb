## Overview
[`keystone`](https://pypi.python.org/pypi/keystone) is a A very simple web framework

Affected versions of this package are vulnerable to Privilege Escalation.
The LDAP backend in OpenStack Identity (Keystone) Grizzly and Havana, when removing a role on a tenant for a user who does not have that role, adds the role to the user, which allows local users to gain privileges.

## Remediation
Upgrade to version `2014.1` or greater.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-4477)
- [GitHub Commit](https://github.com/openstack/keystone/commit/c6800c)
