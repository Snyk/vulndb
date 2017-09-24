## Overview
[`collective_portlet_twitter`](https://pypi.python.org/pypi/collective_portlet_twitter) is a [Twitter Widget Portlet](https://twitter.com/settings/widgets).

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. User input was not escaped in the portlet attribute, allowing remote attackers to inject arbitrary web script or HTML.

## References
- [GitHub PR](https://github.com/collective/collective.portlet.twitter/pull/2)
- [GitHub Commit](https://github.com/collective/collective.portlet.twitter/commit/2af06e3a7e793de176e959b5ecee4af65d43d5d0)
