## Overview
[`Pillow`](https://pypi.python.org/pypi/Pillow) is a Python Imaging Library (Fork).

Affected versions of this package are vulnerable to Symlink attacks due to insecurely creating temporary files.
The (1) `JpegImagePlugin.py` and (2) `EpsImagePlugin.py` scripts use the names of temporary files on the command line, which makes it easier for local users to conduct symlink attacks by listing the processes.

## Remediation
Upgrade to version `2.3.1` or greater.

## References
- [GitHub Commit](https://github.com/python-pillow/Pillow/commit/4e9f367dfd3f04c8f5d23f7f759ec12782e10ee7)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=CVE-2014-1933)
