## Overview
[`vega`](https://www.npmjs.com/package/vega) is The Vega visualization grammar tool.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). There is no validation that the requested group is an existing group before calling its scale method and using the returned scale.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `vega` to version 2.4.0 or higher.

## References
- [Github PR](https://github.com/vega/vega/pull/449)
- [Github Issue](https://github.com/vega/vega/issues/444)
- [Github Commit](https://github.com/vega/vega/compare/d778748acd9833e77d7b8380d3402d305b16c9e8...c97316c4462cde93297e0c7e861873131da8fb54)
