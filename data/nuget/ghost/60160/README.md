## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Authentication Bypass. An authenticated user can spoof an `HTTP GET` request with any username to access any other users’ drafts. This is due to the user parameter  not being validated upon the request.

## Remediation
Upgrade `ghost` to version 0.5.9 or higher.

## References
- [Voidsec-Ghost Vulnerability Report](https://voidsec.com/ghost-blogging-platform/)
- [Penetration Test Report](https://voidsec.com/wp-content/uploads/2015/03/VoidSec-Ghost.pdf)
- [Ghost ChangeLog](https://dev.ghost.org/ghost-0-5-9/)
