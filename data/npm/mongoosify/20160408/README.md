## Overview
[`mongoosify`](https://www.npmjs.com/package/mongoosify) is a prototype-based inheritance library that makes it easy to create objects and inheritance hierarchies without losing the power of javascript's prototype system.

Affected versions of the package are vulnerable to Arbitrary Code Injection due to unsafe use of the `eval()` function. Node.js provides the `eval()` function by default, and is used to translate strings into Javascript code. An attacker can craft a malicious payload to inject arbitrary commands.

## Remediation
Upgrade `mongoosify` to version 0.0.4 or higher.

## References
- [Github Issue](https://github.com/nanachimi/mongoosify/issues/1)
- [Github Commit](https://github.com/nanachimi/mongoosify/commit/e755e676fbac7000d498a819116437964b1351a3)
- [Research Paper - Understanding and Automatically Preventing Injection Attacks on Node.js](https://www.microsoft.com/en-us/research/wp-content/uploads/2017/01/nodejs_tr.pdf)
