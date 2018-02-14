## Overview
[`dpaste`](https://pypi.python.org/pypi/dpaste) is a Django based pastebin. It's intended to run separately but its also possible to be installed into an existing Django project like a regular app.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to not escaping HTML tags.

## References
- [Github ChangeLog](https://github.com/bartTC/dpaste/blob/master/CHANGELOG#L68)
- [Github Commit](https://github.com/bartTC/dpaste/commit/497e5f0c28d575b3e92ef65b70384314a9e330da)
