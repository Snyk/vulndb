## Overview
[`pyfribidi`](https://pypi.python.org/pypi/pyfribidi) is a Python libfribidi interface.

Buffer overflow in the fribidi_utf8_to_unicode function in PyFriBidi before 0.11.0 allows remote attackers to cause a denial of service (application crash) via a 4-byte utf-8 sequence.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-1176)
- [Github Issue](https://github.com/pediapress/pyfribidi/issues/2)
- [Github Commit](https://github.com/pediapress/pyfribidi/commit/d2860c655357975e7b32d84e6b45e98f0dcecd7a)
