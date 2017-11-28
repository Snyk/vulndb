## Overview
[`plone.mockup`](https://pypi.python.org/pypi/plone.mockup) is a plone integration package for mockup.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks. The embedded template uses `<%= value %>` which is insecure.

## References
- [Github ChangeLog](https://github.com/plone/mockup/blob/master/CHANGES.rst#213-2016-03-10)
- [Github PR #1](https://github.com/plone/mockup/pull/627)
- [Github PR #2](https://github.com/plone/mockup/pull/629)
- [Github Commit #1](https://github.com/plone/mockup/commit/c3e469de3408924e63db9fc3b0f78f4d3ede80a9)
- [Github Commit #2](https://github.com/plone/mockup/commit/2edb61573fd20dd715fa0c6be95385654794c5a2)
