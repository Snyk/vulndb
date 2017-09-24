## Overview
[`rack`](https://rubygems.org/gems/rack)  provides a minimal, modular and adaptable interface for developing web applications in Ruby.

Affected versions of the package are vulnerable to IP Spoofing by specifying the same IP address in `X-Forwarded-For` and the `Client-IP`, thus easily spoofing the value of requesting IP.

## Remediation
Upgrade `rack` to version 1.6.0.beta or higher.

## References
- [Github PR](https://github.com/rack/rack/pull/705)
- [Github Commit](https://github.com/rack/rack/commit/7a8efc2a270f363b85ce610ad897184d80b7a1d6)
