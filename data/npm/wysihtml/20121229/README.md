## Overview
[`wysihtml`](https://www.npmjs.com/package/wysihtml) is an Open source rich text editor for the modern web.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) which can occur when a use auto-links a url string with script in the string, allowing them to potentially execute arbitrary code.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `wysihtml` to version 0.4.0 or higher.

## References
- [Github Commit](https://github.com/Voog/wysihtml/commit/34ebe36a3d6b070883f9315fa3097f7598ed11e9)
