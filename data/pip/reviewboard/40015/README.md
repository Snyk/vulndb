## Overview
[`ReviewBoard`](https://pypi.python.org/pypi/ReviewBoard) is a fully-featured web-based code and document review tool made with love <3
Affected versions of this package are vulnerable to Arbitrary Code Execution due to unsafe use of the `eval()` function.

## Remediation
Upgrade to version `1.6.19` or greater.

## References
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2013-4409)
