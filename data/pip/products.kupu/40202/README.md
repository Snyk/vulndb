## Overview
Affected versions of [`products.kupu`](https://pypi.python.org/pypi/products.kupu) are vulnerable to Information Exposure.
The WYSIWYG component (wysiwyg.py) in Plone 2.1 through 4.1, 4.2.x through 4.2.5, and 4.3.x through 4.3.1 allows remote attackers to obtain sensitive information via a crafted URL, which reveals the installation path in an error message.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2013-4194)
- [Redhat Bugzilla](https://bugzilla.redhat.com/show_bug.cgi?id=978470)
