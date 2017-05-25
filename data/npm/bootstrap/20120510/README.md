## Overview
[`bootstrap`](https://www.npmjs.com/package/bootstrap) is a popular front-end framework for developing responsive, mobile first projects on the web.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The html option for popovers/tooltips is unescaped when grabbed with jQuery's `.attr()` method. This may allow attackers to execute XSS attacks.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `bootstrap` to version 2.1.0 or higher.

## References
- [Github PR](https://github.com/twbs/bootstrap/pull/3421)
- [Github Commit](https://github.com/twbs/bootstrap/commit/f836473129819c2e348f821ed268451b9b8bf2e4)
