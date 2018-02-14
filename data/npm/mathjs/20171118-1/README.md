## Overview
[`mathjs`](https://www.npmjs.com/package/mathjs) is an extensive math library for JavaScript and Node.js

Affected versions of the package are vulnerable to Arbitrary Code Execution. Forbidden properties like constructor could be replaced by using unicode characters when creating an object.

## Remediation
Upgrade `mathjs` to version 3.17.0 or higher.

## References
- [GitHub Changelog](https://github.com/josdejong/mathjs/blob/master/HISTORY.md#2017-11-18-version-3170)
- [GitHub Commit](https://github.com/josdejong/mathjs/commit/a60f3c8d9dd714244aed7a5569c3dccaa3a4e761)
