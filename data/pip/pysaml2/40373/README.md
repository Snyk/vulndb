## Overview
[`pysaml2`](https://pypi.python.org/pypi/pysaml2) is a Python implementation of SAML Version 2.

Affected versions of this package are vulnerable to XML External Entity (XXE) Injection attack via a crafted SAML XML request or response.

## Remediation
The fix is merged to the master branch but not yet published.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-10127)
- [Github Issue](https://github.com/rohe/pysaml2/issues/366)
- [Github PR](https://github.com/rohe/pysaml2/pull/379)
- [Github Commit](https://github.com/rohe/pysaml2/commit/8c2b0529efce45b94209da938c89ebdf0a79748d)
