## Overview
[`jquery`](https://www.npmjs.com/package/jquery) is JavaScript library for DOM operations.
Affected versions of the package are vulnerable to Denial of Service (DoS) due to removing a logic that lowercased attribute names. Any attribute getter using a mixed-cased name for boolean attributes goes into an infinite recursion, exceeding the stack call limit.

## Remediation
Upgrade `jquery` to version 3.0.0 or higher.

## References
- [Github Issue](https://github.com/jquery/jquery/issues/3133)
- [Github Commit](https://github.com/jquery/jquery/pull/3134)
- [jsfiddle](https://jsfiddle.net/shnann6y/2/)
