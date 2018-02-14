## Overview
Affected versions of [`setuptools`](https://pypi.python.org/pypi/setuptools) are vulnerable to Man-in-the-Middle (MitM) attack.

The ssl.match_hostname function does not properly handle wildcards in hostnames, which might allow man-in-the-middle attackers to spoof servers via a crafted certificate. (same as CVE-2013-7440).

## Remediation
Upgrade `setuptools` to version 1.3 or higher.

## References
- [Pythong Bugs](https://bugs.python.org/issue17997)  
- [GitHub Changelog](https://github.com/pypa/setuptools/blob/master/CHANGES.rst#13)
- [Github Commit](https://github.com/pypa/setuptools/commit/38fcb3e366ee7a21ff5f0f550fe190b1326fc04b)
