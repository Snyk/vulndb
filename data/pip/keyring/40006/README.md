## Overview
[`keyring`](https://pypi.python.org/pypi/keyring) is a Store and access your passwords safely.
Affected versions of this package are vulnerable to Insecure permissions due to an incomplete fix for [CVE-2012-5577](https://snyk.io/vulnSNYK-PYTHON-KEYRING-40005).

It would create its configuration file world-readable which was fixed in [CVE-2012-5577](https://snyk.io/vulnSNYK-PYTHON-KEYRING-40005), however it only changed the permissions of an existing configuration file, which is incomplete.

## Remediation
Upgrade to version `1.0` or greater.

## References
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2012-5578)
