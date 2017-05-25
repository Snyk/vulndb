## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks when a cross-domain ajax request is performed without the `dataType` option causing `text/javascript` responses to be executed.

## Remediation
Upgrade `jquery` to version `3.0.0` or higher.

## References
- [GitHub Issue](https://github.com/jquery/jquery/issues/2432)
- [GitHub PR](https://github.com/jquery/jquery/pull/2588)
- [GitHub Commit 3.0.0](https://github.com/jquery/jquery/pull/2588/commits/c254d308a7d3f1eac4d0b42837804cfffcba4bb2)
- [GitHub Commit 1.12](https://github.com/jquery/jquery/commit/f60729f3903d17917dc351f3ac87794de379b0cc)
- [Vulnerable code](https://github.com/jquery/jquery/blob/250a1990baa571de60325ab2c52eabb399c4cf9e/src/ajax/script.js#L18)
