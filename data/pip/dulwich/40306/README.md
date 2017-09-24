## Overview
[`dulwich`](https://pypi.python.org/pypi/dulwich) is a Python Git Library
Buffer overflow in the C implementation of the apply_delta function in pack.c in Dulwich before 0.9.9 allows remote attackers to execute arbitrary code via a crafted pack file.

## References
- [NCD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2015-0838)
- [dulwich](https://lists.launchpad.net/dulwich-users/msg00829.html)
