## Overview
Affected versions of [`djangorestframework`](https://pypi.python.org/pypi/djangorestframework) are vulnerable to XML External Entity (XXE) Injection which happens because ` xml.etree.ElementTree` in not secured against XXE injections. 

## Remediation
Upgrade `djangorestframework` to version 2.2.1 or higher.

## References
- [GitHub Release Note](https://github.com/encode/django-rest-framework/blob/version-2.4.x/docs/topics/release-notes.md#221)
- [Python Blog Announcement](http://blog.python.org/2013/02/announcing-defusedxml-fixes-for-xml.html)
- [Github PR](https://github.com/encode/django-rest-framework/pull/673)
- [Github Commit](https://github.com/encode/django-rest-framework/commit/dcee027fa97f015ff3b87f0fd72b7995cdd6e155)
