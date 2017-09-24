## Overview
[`onegov.form`](https://pypi.python.org/pypi/onegov.form) is a form library based on WTForms.

Affected versions of this package are vulnerable to Cross-Site Scripting (XSS). When a label is rendered, the contents of the label element were not escaped.

## References
- [Github Issue](https://github.com/wtforms/wtforms/issues/315)
- [Github Commit](https://github.com/OneGov/onegov.form/commit/abce4e1ca620de244460f005f9d2412683552f30)
