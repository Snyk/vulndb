## Overview
[`yard`](https://rubygems.org/gems/yard) is a documentation generation tool for the Ruby programming language.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). Strings parsed from the anchor in the address bar were not sanitized, allowing for arbitrary HTML to be embedded into the page.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/xss-attacks-the-next-wave/).

## Remediation
Upgrade `yard` to version 0.8.7.1 or higher.

## References
- [Github Commit](https://github.com/lsegal/yard/commit/715d6cb462392e610ab751fcfee7b622850fa802)
