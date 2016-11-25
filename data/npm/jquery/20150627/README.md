## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.
Affected versions of the package are vulnerable to Cross-site Scripting (XSS) due to [this code](https://github.com/jquery/jquery/blob/250a1990baa571de60325ab2c52eabb399c4cf9e/src/ajax/script.js#L18) causing every text/javascript response to be executed.

## Remediation
Upgrade `jquery` to version 3.0.0-beta1 or higher.

## References
- [Github Issue](https://github.com/jquery/jquery/issues/2432)
- [Github PR](https://github.com/jquery/jquery/pull/2588)
- [Github Commit](https://github.com/jquery/jquery/commit/b078a62013782c7424a4a61a240c23c4c0b42614)
