## Overview
[`pycares`](https://pypi.python.org/pypi/pycares) is a Python interface for c-ares.

Heap-based buffer overflow in the ares_create_query function in c-ares 1.x before 1.12.0 allows remote attackers to cause a denial of service (out-of-bounds write) or possibly execute arbitrary code via a hostname with an escaped trailing dot.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-5180)
- [Github PR](https://github.com/saghul/pycares/pull/37)
- [Github Commit](https://github.com/saghul/pycares/commit/0115c819d9ed876999c4f116f8b155ec503e57bc)
