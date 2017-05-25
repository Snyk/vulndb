## Overview
[`hotel`](https://www.npmjs.com/package/hotel) is local domains for everyone.
Affected versions of the package are vulnerable to Man-in-the-Middle (MitM) attacks. Hotel contained a self-signed certificate built-in, the private key being in the repo. This allows any user to use that key and listen in on the traffic.

## Remediation
There is no fix version for `hotel`.

## References
- [GitHub PR](https://github.com/typicode/hotel/pull/55/)
- [GitHub Issue](https://github.com/typicode/hotel/issues/94)
