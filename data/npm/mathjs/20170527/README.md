## Overview
[`mathjs`](https://www.npmjs.com/package/mathjs) is an extensive math library for JavaScript and Node.js.

Affected versions of the package are vulnerable to Arbitrary Code Execution. The `isSafeMethod` was able to call other methods (like bind) which is not allowed and could cause code execution on the remote server.

## Remediation
Upgrade `mathjs` to version 3.13.3 or higher.

## References
- [GitHub Changelog](https://github.com/josdejong/mathjs/blob/master/HISTORY.md#2017-05-27-version-3133)
- [GitHub Commit](https://github.com/josdejong/mathjs/commit/ed5f2cebaf873ba1e57acbce2a3668686ac69331)
