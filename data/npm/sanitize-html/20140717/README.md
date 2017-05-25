## Overview
[`sanitize-html`](https://www.npmjs.com/package/sanitize-html) is a library for scrubbing html input of malicious values.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) due to unescaped double quotes.

Entering the following:

```html
<IMG SRC= onmouseover="alert('XSS');">
```

produces the following:

```html
<img src="onmouseover="alert('XSS');"" />
```

## Remediation
Upgrade `sanitize-html` to version 1.2.3 or higher.

## References
- [GitHub Issue](https://github.com/punkave/sanitize-html/issues/19)
- [GitHub PR](https://github.com/punkave/sanitize-html/pull/20)
- [GitHub Changelog](https://github.com/punkave/sanitize-html/blob/master/README.md#changelog)
