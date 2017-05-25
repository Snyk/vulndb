## Overview
[`decamelize`](https://www.npmjs.com/package/decamelize) converts a camelized string into a lowercased one with a custom separator.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS). The seperators are not escaped and may allow an attacker to send seperators like `|`, which will cause the regex parser to hang for long periods of time.

## Remediation
Update `decamelize` to version 1.1.2 or higher.

## References
- [Github Issue](https://github.com/sindresorhus/decamelize/issues/5)
- [Github Commit](https://github.com/sindresorhus/decamelize/commit/76d47d8de360afb574da2e34db87430ce11094e0)
