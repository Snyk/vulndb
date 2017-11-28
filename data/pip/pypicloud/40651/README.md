## Overview
[`pypicloud`](https://pypi.python.org/pypi/pypicloud) is a private PyPI backed by S3.

Affected versions of this package are vulnerable to Access Restriction Bypass due to not validating the users password in some cases.

## References
- [Github ChangeLog](https://github.com/stevearc/pypicloud/blob/master/CHANGES.rst#022---2014313)
- [Github Commit](https://github.com/stevearc/pypicloud/commit/001e8a5ba86ceff0e212ffa1436801ff6d9293ce)
