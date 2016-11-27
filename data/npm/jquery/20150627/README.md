## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.

Affected versions of the package are vulnerable to Cross-site Scripting (XSS) attacks when a cross-domain ajax request is performed without the `dataType` option causing `text/javascript` responses to be executed.

## Remediation
Upgrade `jquery` to version `3.0.0` or higher.

## References
- [Github Issue](https://github.com/jquery/jquery/issues/2432)
- [Github PR](https://github.com/jquery/jquery/pull/2588)
- [Github Commit](https://github.com/jquery/jquery/commit/b078a62013782c7424a4a61a240c23c4c0b42614)
- [Vulnerable code](https://github.com/jquery/jquery/blob/250a1990baa571de60325ab2c52eabb399c4cf9e/src/ajax/script.js#L18)
