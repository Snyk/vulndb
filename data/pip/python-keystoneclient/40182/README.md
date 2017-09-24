## Overview
[`python-keystoneclient`](https://pypi.python.org/pypi/python-keystoneclient) is a Client Library for OpenStack Identity

Affected versions of this package vulnerable to Authentication Bypass. 
python-keystoneclient before 0.2.4, as used in OpenStack Keystone (Folsom), does not properly check expiry for PKI tokens, which allows remote authenticated users to (1) retain use of a token after it has expired, or (2) use a revoked token once it expires.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-2104)
- [GitHub Commit](https://github.com/openstack/python-keystoneclient/commit/8fe7a822d3fd9f435bb4a73a838b380659196cf7)
