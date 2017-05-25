## Overview
[`summit`](https://www.npmjs.com/package/summit) is a node web framework.

Affected versions of this package are vulnerable to Arbitrary Command Execution via the `eval()` function in the PouchDB driver. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload instead of a valid collection name to inject arbitrary commands.

## Remediation
There is no fix version for `summit`.

## References
- [Github Issue](https://github.com/notduncansmith/summit/issues/23)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
