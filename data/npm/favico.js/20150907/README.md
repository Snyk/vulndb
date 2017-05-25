## Overview
[`favico.js`](https://www.npmjs.com/package/favico.js) is a library to manipulate the favicon, adding alert badges, render images or videos.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The `setTimeout` and `setInterval` functions accepted strings expressions as their first argument, instead of functions explicitly. This may allow an attacker to inject script.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `favico.js` to version 0.3.10 or higher.

## References
- [GitHub PR](https://github.com/ejci/favico.js/pull/98)
- [GitHub Commit](https://github.com/ejci/favico.js/commit/14ae05c48da0b187247996f3cf2eaf5a42411a4f)
