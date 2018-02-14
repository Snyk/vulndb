## Overview
[`django-basicauth`](https://pypi.python.org/pypi/django-basicauth) is a basic auth utility package for Django.

Affected versions of this package are vulnerable to timing attacks due to not validating passwords in constant time.

## References
- [GitHub Changelog](https://github.com/hirokiky/django-basicauth/blob/master/CHANGES.txt)
- [GitHub Commit](https://github.com/hirokiky/django-basicauth/commit/94ba948c5f6b8b2543570bda4c8f73737f249971)
