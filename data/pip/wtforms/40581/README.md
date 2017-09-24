## Overview
[`wtforms`](https://pypi.python.org/pypi/wtforms) is a flexible forms validation and rendering library for python web development.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks due to the label names not being escaped in `WTForms`.

## References
- [GitHub Issue](https://github.com/wtforms/wtforms/issues/315)
