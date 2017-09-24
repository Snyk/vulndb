## Overview
[`cmsplugin_filer`](https://pypi.python.org/pypi/cmsplugin_filer) is a django-cms plugins for django-filer.

Affected versions of this package are vulnerable to Cross-site Scripting(XSS) attacks due to using the django `firstof` method, the output of which is not escaped (for DJango version `<=1.7`)

## References
- [GitHub PR](https://github.com/divio/cmsplugin-filer/pull/185)
- [GitHub Commit](https://github.com/divio/cmsplugin-filer/commit/7bdf2106e3ea38ecd8eae4d57c9c8eccca005965)
