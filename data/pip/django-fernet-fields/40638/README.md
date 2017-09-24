## Overview
[`django-fernet-fields`](https://pypi.python.org/pypi/django-fernet-fields) is a Fernet-encrypted model fields for Django.

Affected versions of this package are vulnerable to Information Exposure through the `DualField` and `HashField` columns which are insecure.

## References
- [Github Commit](https://github.com/orcasgit/django-fernet-fields/commit/b2c5fbf3eff53b2f19f116d626bc2496922882c2)
