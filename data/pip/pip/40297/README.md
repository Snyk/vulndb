## Overview
[`pip`](https://pypi.python.org/pypi/pip) is the PyPA recommended tool for installing Python packages.

Affected versions of the package are vulnerable to Denial of Service (DoS).
pip 1.3 through 1.5.6 allows local users to cause a denial of service (prevention of package installation) by creating a /tmp/pip-build-* file for another user.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-8991)
- [Github PR](https://github.com/pypa/pip/pull/2122)
- [Github Commit](https://github.com/pypa/pip/commit/043fe9f5700315d97f83609c1f59deece8f1b901)
