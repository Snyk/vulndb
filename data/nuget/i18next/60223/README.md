## Overview
[`i18next`](https://www.npmjs.com/package/i18next) is i18next internationalization framework.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not escaping variables as expected. When passing any `interpolation` options without including `escapeValue`, the function `this.escapeValue` will get set to `undefined` in `Interpolator`. Meaning values aren't being escaped even though users expect them to be.

## Remediation
Upgrade `i18next` to version 3.4.4 or higher.

## References
- [GitHub PR](https://github.com/i18next/i18next/pull/826)
- [GitHub Commit](https://github.com/i18next/i18next/pull/826/commits/d367309d4427c2d651b0f0b304504cf59c056cab)
