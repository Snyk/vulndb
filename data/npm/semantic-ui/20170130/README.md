## Overview
[`semantic-ui`](https://www.npmjs.com/package/semantic-ui)  empowers designers and developers by creating a shared vocabulary for UI..
Affected versions of the package are vulnerable to Cross-site Scripting (XSS).
When using a dropdown and allowing users to type their own additions to a multi select,  the user can escape outside of the selector and can be used in XSS attacks.
You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade to `semantic-ui` version 2.2.8 or newer.

## References
- [Github Issue](https://github.com/Semantic-Org/Semantic-UI/issues/4962)
