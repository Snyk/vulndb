## Overview
[`mockup`](https://pypi.python.org/pypi/mockup) is a collection of client side patterns for faster and easier web development.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS) attacks via the title attribute in an object. If an attacker can create new object or modify the title in an existing object within a Plone instance, then convince her victim (or anyone with access) to use the `folder_contents` view and select the affected item, this would then populate the raw title text into the selection well without being sanitized, triggering the XSS attack.

## References
- [Github ChangeLog](https://github.com/plone/mockup/blob/master/CHANGES.rst#213-2016-03-10)
- [Github PR #1](https://github.com/plone/mockup/pull/627)
- [Github PR #2](https://github.com/plone/mockup/pull/629)
- [Github Commit #1](https://github.com/plone/mockup/commit/c3e469de3408924e63db9fc3b0f78f4d3ede80a9)
- [Github Commit #2](https://github.com/plone/mockup/commit/2edb61573fd20dd715fa0c6be95385654794c5a2)
