## Overview
[`fullpage.js`](https://www.npmjs.com/package/fullpage.js) is a package to help fullscreen scrolling websites.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The `fullpage.js` package used code from an older jquery library that contained the vulnerable `location.hash()` function. It was used to select elements, but also allows remote attackers to inject script into the page.

This is related to a vulnerability in the [jQuery](https://snyk.io/vuln/npm:jquery:20110606) and the [jQuery-migrate](https://snyk.io/vuln/npm:jquery-migrate:20130419) packages.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `fullpage.js` to version 2.7.6 or higher.

## References
- [GitHub PR](https://github.com/alvarotrigo/fullPage.js/pull/1705)
- [GitHub Issue](https://github.com/alvarotrigo/fullPage.js/issues/1747)
- [GitHub Commit #1](https://github.com/alvarotrigo/fullPage.js/commit/03356365ca81b3177357aed42a34a7df5b5351b4)
- [GitHub Commit #2](https://github.com/alvarotrigo/fullPage.js/pull/1705/commits/186c16ec140976e878f2e4ef4256920dc928d23e)
