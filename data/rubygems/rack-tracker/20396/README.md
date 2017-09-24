## Overview
[`rack-tracker`](https://rubygems.org/gems/rack-tracker) a rack middleware that can be hooked up to multiple services and exposing them in a unified fashion.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS). When the escaping \ character was present in rendered trackers, it messed up the html and potentially could cause an XSS attack.

You can read more about `Cross-site Scripting (XSS)` on our [blog](https://snyk.io/blog/marked-xss-vulnerability/).

## Remediation
Upgrade `rack-tracker` to version 1.0.2 or higher.

## References
- [Github PR](https://github.com/railslove/rack-tracker/pull/54)
- [Github Issue](https://github.com/railslove/rack-tracker/issues/50)
- [Github Commit](https://github.com/railslove/rack-tracker/commit/94359f402d8e1df6f0d21d733fac2bee96ebc083)
