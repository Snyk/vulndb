## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is Just a blogging platform.
Affected versions of the package are vulnerable to Bearer token leakage, due to storing it in the `localStorage` of the browser. If used alongside a Cross-site Scripting (XSS) attack, a malicious user may hijack the user session. 

## Remediation
Upgrade `ghost` to version 0.5.9 or higher.

## References
- [Voidsec-Ghost Vulnerability Report](https://voidsec.com/ghost-blogging-platform/)
- [Penetration Test Report](https://voidsec.com/wp-content/uploads/2015/03/VoidSec-Ghost.pdf)
- [GitHub ChangeLog](https://gist.github.com/ErisDS/6111e30e006ed34cf9f6)
