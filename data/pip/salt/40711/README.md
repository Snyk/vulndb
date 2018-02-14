## Overview
[`salt`](https://pypi.python.org/pypi/salt) is a Portable, distributed, remote execution and configuration management system.

Affected versions of the package are vulnerable to Information Disclosure.
salt before 2015.5.5 leaks git usernames and passwords to the log.

## Remediation
Upgrade `salt` to version 2015.5.5 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2015-6918)
- [Github PR](https://github.com/saltstack/salt/pull/26486)
- [Github Commit](https://github.com/saltstack/salt/commit/28aa9b105804ff433d8f663b2f9b804f2b75495a)
