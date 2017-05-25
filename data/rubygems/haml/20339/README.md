## Overview
[`haml`](https://rubygems.org/gems/haml) is a layer on top of HTML or XML that's designed to express the structure of documents in an elegant way.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). There is no character escaping in the `:erb` filter.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `haml` to version 3.2.0.beta.3 or higher.

## References
- [Github Issue](https://github.com/haml/haml/issues/584)
- [Github Commit](https://github.com/haml/haml/commit/6d6404132a04c8025c9fe60aef0833909c6837a1)
