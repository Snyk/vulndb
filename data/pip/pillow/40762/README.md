## Overview
Affected versions of [`pillow`](https://pypi.python.org/pypi/pillow) are vulnerable to Denial of Service (Dos) attack.

Integer overflow in the ImagingResampleHorizontal function in libImaging/Resample.c in Pillow before 3.1.1 allows remote attackers to have unspecified impact via negative values of the new size, which triggers a heap-based buffer overflow.

## Remediation
Upgrade `pillow` to version 3.1.1 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2016-4009)
- [GitHub Changelog](https://github.com/python-pillow/Pillow/blob/master/CHANGES.rst#311-2016-02-04)
- [Github Commit](https://github.com/python-pillow/Pillow/commit/41fae6d9e2da741d2c5464775c7f1a609ea03798)
