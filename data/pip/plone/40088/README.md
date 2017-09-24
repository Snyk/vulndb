## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

Plone 4.1.3 and earlier computes hash values for form parameters without restricting the ability to trigger hash collisions predictably, which allows remote attackers to cause a Denial of Service (CPU consumption) by sending many crafted parameters.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2011-4462)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2011-4462)
