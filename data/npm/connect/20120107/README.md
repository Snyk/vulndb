## Overview
[`connect`](https://www.npmjs.com/package/connect) is High performance middleware framework.
Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. It is possible to crash the node server by requesting a url with a trailing backslash in the end.

## Remediation
Upgrade `connect` to version 2.0.0 or higher.

## References
- [GitHub Issue](https://github.com/senchalabs/connect/issues/452)
- [GitHub Commit]( https://github.com/senchalabs/connect/commit/2b0e8d69a14312fa2fd3449685be0c0896dfe53e)
