## Overview
[`ms`](https://www.npmjs.com/package/ms) is a tiny millisecond conversion utility.

Affected versions of this package are vulnerable to Regular Expression Denial of Service (ReDoS) due to an incomplete fix for previously reported vulnerability [npm:ms:20151024](https://snyk.io/vuln/npm:ms:20151024). The fix limited the length of accepted input string to 10,000 characters, and turned to be insufficient making it possible to block the event loop for 0.3 seconds (on a typical laptop) with a specially crafted string passed to `ms()` function.

*Proof of concept*
```js
ms = require('ms');
ms('1'.repeat(9998) + 'Q') // Takes about ~0.3s
```

**Note:** Snyk's patch for this vulnerability limits input length to 100 characters. This new limit was deemed to be a breaking change by the author.
Based on user feedback, we believe the risk of breakage is _very_ low, while the value to your security is much greater, and therefore opted to still capture this change in a patch for earlier versions as well.  Whenever patching security issues, we always suggest to run tests on your code to validate that nothing has been broken.

For more information on `Regular Expression Denial of Service (ReDoS)` attacks, go to our [blog](https://snyk.io/blog/redos-and-catastrophic-backtracking/).

## Disclosure Timeline
- Feb 9th, 2017 - Reported the issue to package owner.
- Feb 11th, 2017 - Issue acknowledged by package owner.
- April 12th, 2017 - Fix PR opened by Snyk Security Team.
- May 15th, 2017 - Vulnerability published.
- May 16th, 2017 - Issue fixed and version `2.0.0` released.
- May 21th, 2017 - Patches released for versions `>=0.7.1, <=1.0.0`.

## Remediation
Upgrade `ms` to version 2.0.0 or higher.

## References
- [GitHub PR](https://github.com/zeit/ms/pull/89)
- [GitHub Commit](https://github.com/zeit/ms/pull/89/commits/305f2ddcd4eff7cc7c518aca6bb2b2d2daad8fef)
