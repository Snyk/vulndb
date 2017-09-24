## Overview
[`zope2`](https://pypi.python.org/pypi/zope2) is a Zope2 application server / web framework
Zope before 2.13.19, as used in Plone before 4.2.3 and 4.3 before beta 1, does not reseed the pseudo-random number generator (PRNG), which makes it easier for remote attackers to guess the value via unspecified vectors.  NOTE: this issue was SPLIT from CVE-2012-5508 due to different vulnerability types (ADT2).

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-6661)
- [Openwall](http://www.openwall.com/lists/oss-security/2012/11/10/1)
- [GitHub Changelog](https://github.com/plone/Products.CMFPlone/blob/4.2.3/docs/CHANGES.txt)
