## Overview
[`rendr`](https://www.npmjs.com/package/rendr) is a module that allows you to render your Backbone.js apps on the client and the server.
Affected versions of the package do not sanitize the key value in the server router and are vulnerable to Cross-site Scripting (XSS) attacks.

## Remediation
Upgrade `rendr` to version 0.4.8-2 or higher.

## References
- https://github.com/rendrjs/rendr/commit/db392b94128ebf41d86d85b42d99ea053d83dbfd
