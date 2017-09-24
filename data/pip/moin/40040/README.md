## Overview
[`moin`](https://pypi.python.org/pypi/moin) is an easy to use, full-featured and extensible wiki software package.

MoinMoin 1.9 before 1.9.1 does not perform the expected clearing of the sys.argv array in situations where the GATEWAY_INTERFACE environment variable is set, which allows remote attackers to obtain sensitive information via unspecified vectors.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2010-0667)
- [Openwall](http://www.openwall.com/lists/oss-security/2010/02/15/2)
