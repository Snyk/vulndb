## Overview
[`Zope.html`](https://pypi.python.org/pypi/zope.html) is an HTML and XHTML Editing Support.

Affected versions of this package are vulnerable to Directory Traversal attacks. It embedded a vulnerable version of FCKeditor, which allow remote attackers to create executable files in arbitrary directories via directory traversal sequences.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2009-2265)
- [Github ChangeLog](https://github.com/zopefoundation/zope.html/blob/master/CHANGES.txt#L65)
- [Github Commit](https://github.com/zopefoundation/zope.html/commit/6fa48ba7b313bce1cf784afb7cd9f891f375112c)
