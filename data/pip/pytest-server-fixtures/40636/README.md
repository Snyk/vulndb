## Overview
[`pytest-server-fixtures`](https://pypi.python.org/pypi/pytest-server-fixtures) provides an extensible framework for running up real network servers in your tests, as well as a suite of fixtures for some well-known webservices  and databases.

Affected versions of this package vulnerable to Arbitrary Script Injection because the `shell=True` flag which enables subshells in the `workspace.run()` method.

## References
- [Github ChangeLog](https://github.com/manahl/pytest-plugins/blob/master/CHANGES.md#110-2016-2-15)
- [Github Commit](https://github.com/manahl/pytest-plugins/commit/ea6072a461edde63c07f7b7f4a4daffdc09fb116)
