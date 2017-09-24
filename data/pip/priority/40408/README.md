## Overview
[`priority`](https://pypi.python.org/pypi/priority) is a pure-Python implementation of the HTTP/2 priority tree.

Affected versions of this package are vulnerable to Denial of Service (DoS) attacks.
A HTTP/2 implementation built using any version of the Python priority library prior to version 1.2.0 could be targeted by a malicious peer by having that peer assign priority information for every possible HTTP/2 stream ID. The priority tree would happily continue to store the priority information for each stream, and would therefore allocate unbounded amounts of memory. Attempting to actually use a tree like this would also cause extremely high CPU usage to maintain the tree.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6580)
- [Github PR](https://github.com/python-hyper/priority/pull/23)
- [Github Commit](https://github.com/python-hyper/priority/commit/7d01a7dc4db83bce50f20d47caf4f37b403a3ecd)
