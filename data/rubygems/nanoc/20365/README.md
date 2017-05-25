## Overview
[`nanoc`](https://rubygems.org/gems/nanoc) is a static-site generator focused on flexibility.
Affected versions of the package are vulnerable to Information Exposure. Resources embedded within HTML documents were not correctly validated, and malicious users could request a protocol that degrades the security of the original connection. Browsers do not enforce consistant protocols, which could lead to the leakage of private information.

## Remediation
Upgrade `nanoc` to version 3.8.0 or higher.

## References
- [GitHub PR](https://github.com/nanoc/nanoc/pull/543)
- [GitHub Issue](https://github.com/nanoc/nanoc/issues/542)
- [GitHub Commit](https://github.com/nanoc/nanoc/commit/0e7cdad97091ed48a642d1d3239f2ec38cd2a287)
