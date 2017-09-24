## Overview
[`caravel`](https://pypi.python.org/pypi/caravel) is a interactive data visualization platform build on SqlAlchemy and druid.io.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. User input was not escaped in the FAB list view, allowing remote attackers to inject arbitrary web script or HTML.

## References
- [GitHub PR](https://github.com/airbnb/superset/pull/1125)
- [GitHub Commit](https://github.com/airbnb/superset/commit/b62d7e3e8eaa80e201af3141fb4fe26c39e1ff79)
