## Overview
[`django-friendship`](https://pypi.python.org/pypi/django-friendship) provides an easy extensible interface for following and friendship.

Affected versions of this package are vulnerable to Access Restriction Bypass. Any user can access the accept, reject and the cancel friendship views, and allow them to perform these actions in place of the intended user.

## References
- [Github ChangeLog](https://github.com/revsys/django-friendship/blob/master/CHANGELOG.txt#L40)
- [Github PR](https://github.com/revsys/django-friendship/pull/32)
- [Github Commit](https://github.com/revsys/django-friendship/commit/b522463cb5a04240b1aeb1b7c06559fa1450ab4a)
