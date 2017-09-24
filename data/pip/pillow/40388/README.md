## Overview
[`pillow`](https://pypi.python.org/pypi/pillow) is a Python Imaging Library (Fork).

Heap-based buffer overflow in the j2k_encode_entry function in Pillow 2.5.0 through 3.1.1 allows remote attackers to cause a denial of service (memory corruption) via a crafted Jpeg2000 file.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-3076)
