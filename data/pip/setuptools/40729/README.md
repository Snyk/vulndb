## Overview
Affected versions of [`setuptools`](https://pypi.python.org/pypi/setuptools) are vulnerable to Directory Traversal.

`ez_setup._extractall()` doesn't validate the tar file members. `member.name` can start with `/` or to contain `/` which malicious attacker can exploit to Directory Traversal attacks.

## Remediation
Upgrade `setuptools` to version 3.0 or higher.

## References
- [GitHub Changelog](https://github.com/pypa/setuptools/blob/master/CHANGES.rst#30)
- [Github Issue](https://github.com/pypa/setuptools/issues/7)
- [Github Commit](https://github.com/pypa/setuptools/commit/4c7aaccacb0a756f45862826025bfdd579195d1e)
