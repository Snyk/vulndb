## Overview
[`Pillow`](https://pypi.python.org/pypi/Pillow) is a Python Imaging Library (Fork).

Affected versions of this package are vulnerable to Pillow: metacharacter injection issue attacks.
Python Image Library (PIL) 1.1.7 and earlier and Pillow 2.3 might allow remote attackers to execute arbitrary commands via shell metacharacters in unspecified vectors related to [CVE-2014-1932](https://snyk.io/vuln/SNYK-PYTHON-PILLOW-40034), possibly JpegImagePlugin.py.

## Remediation
Upgrade to version `2.3.1` or greater.

## References
- [GitHub PR](https://github.com/python-pillow/Pillow/pull/731)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-3007)
- [CVE](https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2014-3007)
