## Overview
[`hoek`](https://www.npmjs.com/package/hoek) is an npm package used as a central place to store hapi-specific utility methods.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
The fix was introduced in version 0.7.3 by adding comprehensive html and javascript escaping.

## Remediation
Upgrade `hoek` to version 0.7.3 or higher.

## References
- https://github.com/hapijs/hoek
- https://github.com/hapijs/hoek/pull/23
