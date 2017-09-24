## Overview
[`pip`](https://pypi.python.org/pypi/pip) is the PyPA recommended tool for installing Python packages.

Affected versions of the package are vulnerable to Symlink attacks.
pip before 1.3 allows local users to overwrite arbitrary files via a symlink attack on a file in the /tmp/pip-build temporary directory.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1888)
- [Github Issue](https://github.com/pypa/pip/issues/725)
- [Github PR](https://github.com/pypa/pip/pull/780)
