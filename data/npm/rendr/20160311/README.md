## Overview
[`rendr`](https://www.npmjs.com/package/rendr) is your Backbone.js apps on the client and the server.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
View options are automatically unescaped whenever they are rendered to the DOM, and rendr unescapes is as well. This may allow attackers to execute XSS attacks (e.g. when displaying escaped HTML in a `_block`).

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `rendr` to version 1.1.4 or higher.

## References
- [GitHub PR](https://github.com/rendrjs/rendr/pull/513)
- [GitHub Commit](https://github.com/rendrjs/rendr/commit/d712bd5c3a5a9f5150153dec8555b06ee30680f7)
