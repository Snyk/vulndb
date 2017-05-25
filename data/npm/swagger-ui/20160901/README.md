## Overview
[`swagger-ui`](https://www.npmjs.com/package/swagger-ui) is a dependency-free collection of HTML, JavaScript, and CSS assets that dynamically generate beautiful documentation from a Swagger-compliant API.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not escaping html script tags.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `swagger-ui` to version 2.2.3 or higher.

## References
- [Github PR](https://github.com/swagger-api/swagger-ui/pull/2374)
- [Github Commit](https://github.com/swagger-api/swagger-ui/commit/f87eaaa81073a61e30ff0cedee4fd9cd2dd1fca9)
