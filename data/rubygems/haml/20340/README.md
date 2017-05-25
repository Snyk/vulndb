## Overview
[`haml`](https://rubygems.org/gems/haml) is a layer on top of HTML or XML that's designed to express the structure of documents in an elegant way.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). The `haml_concat` does not have it's contents properly escaped, when used in the `haml_tag` block.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `haml` to version 4.0.5 or higher.

## References
- [GitHub PR](https://github.com/haml/haml/pull/812)
- [GitHub Issue](https://github.com/haml/haml/issues/718)
- [GitHub Commit](https://github.com/haml/haml/commit/303d2d8b507df4f9af7435d77d9c97b5f6530d69)
