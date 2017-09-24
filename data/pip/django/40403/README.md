## Overview
[`django`](https://pypi.python.org/pypi/django) is a high-level Python Web framework that encourages rapid development and clean, pragmatic design.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The `dismissChangeRelatedObjectPopup` function uses Javascript's `Element.innerHTML` in an unsafe manner. This allows remote attackers to forge content in the admin's add/change popup.

## References
- [Django Vulnerability Description](https://www.djangoproject.com/weblog/2016/jul/18/security-releases/)
- [Vulnerability Lab Report](http://www.vulnerability-lab.com/get_content.php?id=1869)
- [GitHub Commit 1.9.x](https://github.com/django/django/commit/d03bf6fe4e9bf5b07de62c1a271c4b41a7d3d158)
- [GitHub Commit 1.8.x](https://github.com/django/django/commit/f68e5a99164867ab0e071a936470958ed867479d)
- [Redhat Security Advisory](http://rhn.redhat.com/errata/RHSA-2016-1596.html)
- [Seclists](http://seclists.org/fulldisclosure/2016/Jul/53)
- [Packetsorm Security](http://packetstormsecurity.com/files/137965/Django-3.3.0-Script-Insertion.html)
- [CVE](https://web.nvd.nist.gov/view/vuln/detail?vulnId=CVE-2016-6186)
