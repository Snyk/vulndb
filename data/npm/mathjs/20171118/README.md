## Overview
[`mathjs`](https://www.npmjs.com/package/mathjs) is an extensive math library for JavaScript and Node.js

Affected versions of the package are vulnerable to Arbitrary Code Execution via `typed-function`.  A malicious user could possibly execute arbitrary code in the JavaScript engine, by creating a typed function with JavaScript code in the name.

## Remediation
Upgrade `mathjs` to version 3.17.0 or higher.

## References
- [GitHub Changelog](https://github.com/josdejong/mathjs/blob/master/HISTORY.md#2017-11-18-version-3170)
- [GitHub Commit](https://github.com/josdejong/mathjs/commit/8d2d48d81b3c233fb64eb2ec1d7a9e1cf6a55a90)
