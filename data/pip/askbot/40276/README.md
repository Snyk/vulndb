## Overview
[`askbot`](https://pypi.python.org/pypi/askbot) is a Question and Answer forum, like StackOverflow, written in python and Django
Multiple cross-site scripting (XSS) vulnerabilities in Askbot before 0.7.49 allow remote attackers to inject arbitrary web script or HTML via vectors related to the (1) tag or (2) user search forms.

## References
- [NVD](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2014-2236)
- [Openwall](http://www.openwall.com/lists/oss-security/2014/02/28/8)
- [GitHub Commit](https://github.com/ASKBOT/askbot-devel/commit/876e3662ff6b78cc6241338c15e3a0cb49edf4e2#diff-b693b4c02739be4b3231bece15b0eb87)
- [GitHub Commit](https://github.com/ASKBOT/askbot-devel/commit/a676a86b6b7a5737d4da4f59f71e037406f88d29)
