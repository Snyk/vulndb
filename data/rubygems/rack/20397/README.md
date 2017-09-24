## Overview
[`rack`](https://rubygems.org/gems/rack)  provides a minimal, modular and adaptable interface for developing web applications in Ruby.

Affected versions of the package are vulnerable to Denial of Service (DoS). If an attacker sent a malformed or malicious HTTP request, containing `\n` instead of `\r\n` , it could cause an infinite loop.

## Remediation
Upgrade `rack` to version 1.3.0.beta or higher.

## References
- [Github PR](https://github.com/rack/rack/pull/147)
- [Github Commit](https://github.com/rack/rack/commit/6a0e0ee8fcd982bccf30077ec94cb55018bbed91)
