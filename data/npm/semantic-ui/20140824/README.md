## Overview
[`semantic-ui`](https://www.npmjs.com/package/semantic-ui) empowers designers and developers by creating a shared vocabulary for UI.    
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to not escaping characters like &, <, >, ", ', and \`
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `semantic-ui` to version 1.0.0 or higher.

## References
- [Github PR](https://github.com/Semantic-Org/Semantic-UI/pull/1033)
- [Github Commit](https://github.com/Semantic-Org/Semantic-UI/commit/259fd6f0dbf07e3b67fcd190fa575980c0998ec8)
