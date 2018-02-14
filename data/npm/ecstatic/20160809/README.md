## Overview
[`ecstatic`](https://www.npmjs.com/package/ecstatic) is a simple static file server middleware that works with both Express and Flatiron.

Affected versions of the package are vulnerable to Denial of Service (DoS).
The process of replacing null bytes in the url string is being done in a loop:

`Find Null Bytes` --> `If found remove Null Byte` --> `Repeat`

When no more Null Bytes found, the flow of the program continues.

This method would work fine with a normal URL that should be relatively short, but a malicious user may craft a very long URL with a lot of Null Bytes.

**PoC by Checkmarx:**

`http://www.checkmarx.com/advisories/%00%00%00%00%00%00...`

**Slowdown:**
> A payload of 22kB caused a lag of 1 second,
A payload of 35kB caused a lag of 3 seconds,
A payload of 86kB caused the server to crash

## Remediation
Upgrade `ecstatic` to version 2.0.0 or higher.

## References
- [Checkmarx Vulnerability Report](https://www.checkmarx.com/advisories/denial-of-service-dos-vulnerability-in-ecstatic-npm-package/)
- [GitHub Issue](https://github.com/jfhbrook/node-ecstatic/issues/16)
- [GitHub Commit](https://github.com/jfhbrook/node-ecstatic/commit/71ce93988ead4b561a8592168c72143907189f01#diff-b2b5a88fb51675f1aa1065c093dce1ee)
