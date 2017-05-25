## Overview
[`ghost`](https://www.npmjs.com/package/ghost) is a blogging platform.
Affected versions of the package are vulnerable to Denial of Service (DoS) attack, via filesystem exhaustion. When updating a user avatar, the pervious one is saved and not deleted. Also, the file size of the avatar is not limited.

## Remediation
Upgrade `ghost` to version 0.5.9 or higher.

## References
- [Voidsec-Ghost Vulnerability Report](https://voidsec.com/ghost-blogging-platform/)
- [Penetration Test Report](https://voidsec.com/wp-content/uploads/2015/03/VoidSec-Ghost.pdf)
- [Ghost ChangeLog](https://dev.ghost.org/ghost-0-5-9/)
