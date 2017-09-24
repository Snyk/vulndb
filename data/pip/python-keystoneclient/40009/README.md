## Overview
[`python-keystoneclient`](https://pypi.python.org/pypi/python-keystoneclient) is a Client Library for OpenStack Identity
Affected versions of this package are vulnerable to Information Disclosure.
The user-password-update command in python-keystoneclient before 0.2.4 accepts the new password in the --password argument, which allows local users to obtain sensitive information by listing the process.

## Remediation
Upgrade to version `0.2.4` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-2013)
- [GitHub Commit](https://github.com/openstack/python-keystoneclient/commit/f2e0818b)
- [OpenStack](http://www.openwall.com/lists/oss-security/2013/05/23/4)
