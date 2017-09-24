## Overview
[`rsanic`](https://pypi.python.org/pypi/rsanic) is a micro framework built on top of sanic.py written in Python 3.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. The `autoescape` option was set to False in the jinja configuration, allowing attackers to use inject content into user input

## References
- [GitHub Changelog](https://github.com/reformo/rsanic/blob/master/ChangeLog.rst#new-in-version-022)
- [GitHub Commit](https://github.com/reformo/rsanic/commit/6791cb09c322e1ff6e7b471a3bd2219a44e25801)
