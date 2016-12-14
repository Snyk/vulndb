## Overview
[`nw`](https://www.npmjs.com/package/nw) is an installer for nw.js.
Affected versions of the package are vulnerable to Man in the Middle (MitM) attacks due to downloading resources over an insecure protocol.

## Remediation
There is no fix version for `nw`.

## References
- [Vulnerable Code](https://github.com/nwjs/npm-installer/blob/v0.13.0/scripts/install.js#L30)
