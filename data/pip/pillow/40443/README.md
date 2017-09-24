## Overview
[`pillow`](https://pypi.python.org/pypi/pillow) is a Python Imaging Library (Fork).

Pillow before 3.3.2 allows context-dependent attackers to obtain sensitive information by using the "crafted image file" approach, related to an "Integer Overflow" issue affecting the Image.core.map_buffer in map.c component.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-9189)
