## Overview
[`pip`](https://pypi.python.org/pypi/pip) is the PyPA recommended tool for installing Python packages.

Affected versions of the package are vulnerable to Arbitrary Code Execution.
pip before 1.3 uses HTTP to retrieve packages from the PyPI repository, and does not perform integrity checks on package contents, which allows man-in-the-middle attackers to execute arbitrary code via a crafted response to a "pip install" operation.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-1629)
- [Bugzilla redhat](https://bugzilla.redhat.com/show_bug.cgi?id=968059)
- [Github Issue](https://github.com/pypa/pip/issues/425)
- [Github PR](https://github.com/pypa/pip/pull/791)
