## Overview
[`sequel`](https://rubygems.org/gems/sequel) is a Database Toolkit for Ruby.

Affected versions of the package are vulnerable to Denial of Service (DoS) and unsafe object creation vulnerabilities. When parsing certain JSON documents, it can be tricked into creating Ruby symbols in the target system.

## Remediation
Upgrade `sequel` to version 3.45.0 or higher.

## References
- [Github Commit](https://github.com/jeremyevans/sequel/commit/8f990beedbcaa3c2df8aaaa0f79b002755655595)
