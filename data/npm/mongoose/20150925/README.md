## Overview
[`mongoose`](https://www.npmjs.com/package/mongoose) is a MongoDB ODM.
Affected versions of the package are vulnerable to Denial of Service (DoS) via Infinite Loop when calculating a corrupt array. An attacker can use this to his advantage to crash the servers.

## Remediation
Upgrade `mongoose` to version 4.1.10 or higher.


## References
- [Github Issue](https://github.com/Automattic/mongoose/issues/3405)
- [Github Commit](https://github.com/Automattic/mongoose/commit/d4d57176848bcaaae20d466273f124355c0d262f)
