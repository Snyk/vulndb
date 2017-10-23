## Overview
[`superagent`](https://www.npmjs.com/package/superagent) is elegant & feature rich browser / node HTTP with a fluent API.

Affected versions of the package are vulnerable to Denial of Service (DoS) attacks. It uncompresses responses in memory, and a server controlled by a malicious user may send a specially crafted zip file which will then unzip in the target server and will cause excessive CPU consumption. This is also known as a `Zip Bomb`.

## Remediation
There is no fix version for `superagent`.

## References
- [Github PR](https://github.com/visionmedia/superagent/issues/1259)
