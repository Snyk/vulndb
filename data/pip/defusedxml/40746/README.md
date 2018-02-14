## Overview
Affected versions of [`defusedxml`](https://pypi.python.org/pypi/defusedxml) are vulnerable to XML External Entity (XXE) Injection.

The XML libraries for Python 3.4, 3.3, 3.2, 3.1, 2.7, and 2.6, as used in OpenStack Keystone Essex and Folsom, Django, and possibly other products allow remote attackers to read arbitrary files via an XML external entity declaration in conjunction with an entity reference, aka an XML External Entity (XXE) attack.

## Remediation
Upgrade `defusedxml` to version 0.4 or higher.

## References
- [NVD](https://nvd.nist.gov/vuln/detail/CVE-2013-1665)
- [GitHub Changelog](https://github.com/tiran/defusedxml/blob/master/CHANGES.txt#L35)
