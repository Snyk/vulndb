## Overview
[`mathjs`](https://www.npmjs.com/package/mathjs) is an extensive math library for JavaScript and Node.js.

Affected versions of the package are vulnerable to Arbitrary Code Execution.

The expression parser in mathjs uses the `eval` and the `new Function` methods insecurely which could allow an attacker to execute arbitrary code on the remote server.

this is due to an incomplete fix for [npm:mathjs:20170331](https://snyk.io/vuln/npm:mathjs:20170331).

## Remediation
Upgrade `mathjs` to version 3.11.5 or higher.

## References
- [GitHub PR #1](https://github.com/josdejong/mathjs/issues/821)
- [GitHub PR #2](https://github.com/josdejong/mathjs/issues/822)
- [GitHub Changelog](https://github.com/josdejong/mathjs/blob/master/HISTORY.md#2017-04-08-version-3115)
- [GitHub Commit](https://github.com/josdejong/mathjs/compare/v3.10.3...v3.11.5)
