## Overview
[`validator`](https://www.npmjs.com/package/validator) is String validation and sanitization.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) in IE9 due to unescaped backticks.

## Remediation
Upgrade `validator` to version 3.35.0 or higher.

## References
- [Github Commit](https://github.com/chriso/validator.js/commit/570889bf1b3c963439871a0c15aa5801ef6322d7)
