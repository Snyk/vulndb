## Overview
[`mathjs`](https://www.npmjs.com/package/mathjs) is an extensive math library for JavaScript and Node.js.

Affected versions of the package are vulnerable to Arbitrary Code Execution.

The expression parser in mathjs uses the `eval` and the `new Function` methods insecurely which could allow an attacker to execute arbitrary code on the remote server.

## Remediation
Upgrade `mathjs` to version 3.10.3 or higher.

## References
- [GitHub Commit](https://github.com/josdejong/mathjs/compare/v3.10.1...v3.10.3)
- [GitHub Changelog](https://github.com/josdejong/mathjs/blob/v3.11.5/HISTORY.md#2017-03-31-version-3103)