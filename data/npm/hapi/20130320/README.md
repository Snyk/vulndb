## Overview
[`hapi`](https://www.npmjs.com/package/hapi) is an HTTP Server framework.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS). They do not handle invalid payloads, allowing attackers craft malicious links or create a third party web page to inject code into the browser.
The fix was introduced in version 0.16.0 by parsing the payload and verifying its validity.

## Remediation
Upgrade `hapi` to version 0.16.0 or higher, although later versions are also susceptible to vulnerabilities. Last known safe version is 11.1.4.

## References
- https://github.com/hapijs/hapi/pull/700
- https://github.com/hapijs/hapi/commit/41eadf911fb4d9ca765891474e7d0edefd883402
