## Overview
[`dompurify`](https://www.npmjs.com/package/dompurify) is a DOM-only XSS sanitizer for HTML, MathML and SVG.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks. SVG tags are case sensitive, but DOMPurify transforms these tags to lowercase. This causes the SVG document to render incorrectly, and may trigger a flaw in the Opera browser.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `dompurify` to version 0.8.0 or higher.

## References
- [GitHub Issue](https://github.com/cure53/DOMPurify/issues/148)
- [GitHub Commit](https://github.com/cure53/DOMPurify/commit/6eccdd38fc11bc6df22386700ec2278cb743f8eb)
