## Overview
[`DOMPurify`](https://www.npmjs.com/package/dompurify) is a DOM-only XSS sanitizer for HTML, MathML and SVG.

Affected versions of this package are vulnerable to a Cross-site Scripting (XSS) bug in Safari (>= versions 10.1). Specifically, when DOMPurify attempts to parse a string like:

```html
<svg onload=alert(document.domain)>
```
it will result in XSS.

## Remediation
Upgrade `dompurify` to version 0.8.6 or higher.

## References
- [GitHub Release Notes](https://github.com/cure53/DOMPurify/releases/tag/0.8.6)
- [GitHub Commit](https://github.com/cure53/DOMPurify/commit/27908090e4a2d0a75f15924d68bed07ea5e52998)
