## Overview
[`i18next`](https://www.npmjs.com/package/i18next) is i18next internationalization framework.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to the interpolation resolution code in `translate.js` loops over each key in the dictionary and applies replacements one at a time. Along with the unescaped suffix feature in `i18next`, may allow attackers to use the name of another key in the dictionary to leverage themselves to inject code into the browser.

## Remediation
Upgrade `i18next` to version 1.10.3 or higher.

## References
- [Github PR](https://github.com/i18next/i18next/pull/443)
- [Github Commit](https://github.com/i18next/i18next/pull/443/commits/34e8e13a2b64708a0aed01092e4dbfd0e5013831)
