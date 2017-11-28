## Overview
[`Djblets`](https://pypi.python.org/pypi/Djblets) is a collection of useful classes and functions for developing large-scale Django-based web applications.
Affected versions of this package are vulnerable to Arbitrary Code Execution due to using the unsafe `eval()` function.

## Remediation
Upgrade to version `1.6.19`, `1.7.15` or greater.

## References
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4409)
