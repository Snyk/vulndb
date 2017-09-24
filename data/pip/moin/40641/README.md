## Overview
[`moin`](https://pypi.python.org/pypi/moin)  is an easy to use, full-featured and extensible wiki software package.

Affected versions of this package are vulnerable to Denial of Service (DoS).

The password_checker function in config/multiconfig.py in MoinMoin 1.6.1 uses the cracklib and python-crack features even though they are not thread-safe, which allows remote attackers to cause a denial of service (segmentation fault and crash) via unknown vectors.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2008-6549)
