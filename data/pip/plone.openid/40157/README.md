## Overview
[`plone.openid`](https://pypi.python.org/pypi/plone.openid) is a OpenID authentication support for PAS.

The error pages in Plone before 4.2.3 and 4.3 before beta 1 allow remote attackers to obtain random numbers and derive the PRNG state for password resets via unspecified vectors.  NOTE: this identifier was SPLIT per ADT2 due to different vulnerability types. CVE-2012-6661 was assigned for the PRNG reseeding issue in Zope.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2012-5508)
- [Github Commit](https://github.com/plone/plone.openid/commit/4945f0148a4993e042df5b824e779811e9f2d59d)
- [Plone Security Advisory](https://plone.org/products/plone/security/advisories/20121106/24
)
