## Overview
[`dompurify`](https://www.npmjs.com/package/dompurify) is a DOM-only XSS sanitizer for HTML, MathML and SVG.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) and DOM Clobbering due to Insecure Defaults. The default configuration allowed DOM Clobbering when used by a sanitized website. The default was changed to pevent such situations.

You can read more about `Insecure Defaults` on our [blog](https://snyk.io/blog/mongodb-hack-and-secure-defaults/).

## Remediation
Upgrade `dompurify` to version 0.3 or higher.

## References
- [Github Issue](https://github.com/cure53/DOMPurify/issues/14)
- [Github Commit](https://github.com/cure53/DOMPurify/commit/78037ea4db57daba7e171242378d3d97c517dd08)
