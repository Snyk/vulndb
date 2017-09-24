## Overview
[`plone`](https://pypi.python.org/pypi/plone) is a Content Management System.

The error pages in Plone before 4.2.3 and 4.3 before beta 1 allow remote attackers to obtain random numbers and derive the PRNG state for password resets via unspecified vectors.  NOTE: this identifier was SPLIT per ADT2 due to different vulnerability types. CVE-2012-6661 was assigned for the PRNG reseeding issue in Zope.

## References
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5508)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/11/10/1)
- [Github Changelog](https://github.com/plone/Products.CMFPlone/blob/4.2.3/docs/CHANGES.txt)
- [Redhat Security Advisory](https://access.redhat.com/security/cve/CVE-2012-5508)
