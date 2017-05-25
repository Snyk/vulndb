## Overview
[`dompurify`](https://www.npmjs.com/package/dompurify) is a DOM-only XSS sanitizer for HTML, MathML and SVG.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) which is caused by Double-Clobbering.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `dompurify` to version 0.4.4 or higher.

## Referencesּּ
- [DOMPurify Report](https://cure53.de/pentest-report_dompurify.pdf)
- [Github Commit](https://github.com/cure53/DOMPurify/commit/4817f34ac0d413c002adb03d14da169f71057771)
