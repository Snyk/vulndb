## Overview
[`collective_tablepage`](https://pypi.python.org/pypi/collective_tablepage) is a Plone page with an editable table as main content.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS). Data from the text cells were transformed to HTML without any validation or escaping, and this data could be input by a user.

## References
- [GitHub Commit](https://github.com/collective/collective.tablepage/commit/010c97c7bb83406d09e4fbdfa96f60c693fbd832)
