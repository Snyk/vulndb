## Overview
[brisket](https://github.com/bloomberg/brisket) Brisket is a framework for building single page web apps using isomorphic JavaScript.  Affected versions of the package didn't sanitize the bootstrapped data url, opening a door for Cross-site Scripting (XSS) attacks.

## Remediation
Upgrade to `brisket` version 0.33.1 or newer.

## References
- https://github.com/bloomberg/brisket/blob/master/CHANGELOG.md#0331
- https://github.com/bloomberg/brisket/pull/138/commits/7f8f971f16d8ea6f8469b689070a797c6eddfed0
